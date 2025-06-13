resource "aws_ecr_repository" "msh_ecr_repo" {
  name                 = "msh_ecr_repo"
  image_tag_mutability = "IMMUTABLE"
  encryption_configuration {
    encryption_type = "KMS"
    kms_key         = aws_kms_key.ecr.arn
  }
  image_scanning_configuration {
    scan_on_push = true
  }
  tags = {
    Name        = "msh-ecr-repo"
    Environment = "development"
    project     = "multi_speciality_hospital"
    owner       = "devops_team"
    email       = "abhishek.srivastava@octobit8.com"
    Type        = "ecr-repository"
  }
  depends_on   = [aws_vpc.msh, aws_subnet.msh_public, aws_subnet.msh_private]
  force_delete = true
}

resource "aws_cloudwatch_log_group" "ecs_log_group" {
  name              = "/ecs/msh-ecs-cluster"
  retention_in_days = 14
  kms_key_id        = aws_kms_key.cw_logs.arn
  tags = {
    Name        = "msh-ecs-log-group"
    Environment = "development"
    project     = "multi-speciality-hospital"
    owner       = "devops-team"
    email       = "abhishek.srivastava@octobit8.com"
    Type        = "cloudwatch-log-group"
  }
}

resource "aws_ecs_cluster" "msh_ecs_cluster" {
  name = "msh_ecs_cluster"
  setting {
    name  = "containerInsights"
    value = "enabled"
  }
  tags = {
    Name        = "msh-ecs-cluster"
    Environment = "development"
    project     = "multi-speciality-hospital"
    owner       = "devops-team"
    email       = "abhishek.srivastava@octobit8.com"
    Type        = "ecs-cluster"
  }
  depends_on = [aws_vpc.msh, aws_subnet.msh_public, aws_subnet.msh_private]
}

resource "aws_ecs_task_definition" "msh_ecs_task" {
  family                   = "msh-ecs-task"
  requires_compatibilities = ["FARGATE"]
  network_mode             = "awsvpc"
  cpu                      = "256" # 0.25 vCPU
  memory                   = "512" # 0.5 GB
  execution_role_arn       = aws_iam_role.ecs_task_execution_role.arn

  container_definitions = jsonencode([
    {
      name      = "msh-container"
      image     = "${aws_ecr_repository.msh_ecr_repo.repository_url}:latest"
      essential = true
      portMappings = [
        {
          containerPort = 3000
          hostPort      = 3000
          protocol      = "tcp"
        }
      ]
      logConfiguration = {
        logDriver = "awslogs"
        options = {
          awslogs-group         = aws_cloudwatch_log_group.ecs_log_group.name
          awslogs-region        = "ap-south-1"
          awslogs-stream-prefix = "ecs"
        }
      }
    }
  ])

  tags = {
    Name        = "msh-ecs-task"
    Environment = "development"
    project     = "multi-speciality-hospital"
    owner       = "devops-team"
    email       = "abhishek.srivastava@octobit8.com"
    Type        = "ecs-task-definition"
  }
  depends_on = [aws_ecr_repository.msh_ecr_repo]
}

resource "aws_ecs_service" "msh_ecs_service" {
  name            = "msh_ecs_service"
  cluster         = aws_ecs_cluster.msh_ecs_cluster.id
  task_definition = aws_ecs_task_definition.msh_ecs_task.arn
  desired_count   = 1
  launch_type     = "FARGATE"

  network_configuration {
    subnets          = [aws_subnet.msh_public.id]
    security_groups  = [aws_security_group.msh_public_sg.id]
    assign_public_ip = true
  }

  load_balancer {
    target_group_arn = aws_lb_target_group.msh_alb_tg.arn
    container_name   = "msh-container"
    container_port   = 3000
  }

  tags = {
    Name        = "msh-ecs-service"
    Environment = "development"
    project     = "multi-speciality-hospital"
    owner       = "devops-team"
    email       = "abhishek.srivastava@octobit8.com"
    Type        = "ecs-service"
  }
  depends_on = [aws_lb_listener.msh_alb_listener, aws_ecs_cluster.msh_ecs_cluster, aws_ecs_task_definition.msh_ecs_task]
  lifecycle {
    ignore_changes = [
      network_configuration[0].security_groups,
      network_configuration[0].subnets
    ]
  }
}

resource "aws_wafv2_web_acl" "msh_waf" {
  name        = "msh_waf"
  description = "WAF for ALB"
  scope       = "REGIONAL"
  default_action {
    allow {}
  }
  visibility_config {
    cloudwatch_metrics_enabled = true
    metric_name                = "msh_waf"
    sampled_requests_enabled   = true
  }
  rule {
    name     = "AWS-AWSManagedRulesCommonRuleSet"
    priority = 1
    override_action {
      none {}
    }
    statement {
      managed_rule_group_statement {
        name        = "AWSManagedRulesCommonRuleSet"
        vendor_name = "AWS"
      }
    }
    visibility_config {
      cloudwatch_metrics_enabled = true
      metric_name                = "AWSManagedRulesCommonRuleSet"
      sampled_requests_enabled   = true
    }
  }
  tags = {
    name        = "msh_waf"
    environment = "development"
    project     = "multi-speciality-hospital"
    owner       = "devops-team"
    email       = "abhishek.srivastava@octobit8.com"
    type        = "waf"
  }
}

resource "aws_wafv2_web_acl_association" "msh_waf_alb_assoc" {
  resource_arn = aws_lb.msh_alb.arn
  web_acl_arn  = aws_wafv2_web_acl.msh_waf.arn
}

resource "aws_kms_key" "ecr" {
  description             = "KMS key for ECR encryption"
  deletion_window_in_days = 7
  enable_key_rotation     = true
  policy                  = <<EOF
{
  "Version": "2012-10-17",
  "Id": "key-default-1",
  "Statement": [
    {
      "Sid": "Enable IAM User Permissions",
      "Effect": "Allow",
      "Principal": {"AWS": "arn:aws:iam::${data.aws_caller_identity.current.account_id}:root"},
      "Action": [
          "kms:Encrypt",
          "kms:Decrypt",
          "kms:ReEncrypt*",
          "kms:GenerateDataKey*",
          "kms:DescribeKey"
        ],
      "Resource": "*"
    },
    {
      "Sid": "AllowContainerRegistry",
      "Effect": "Allow",
      "Principal": {"Service": "ecr.${data.aws_region.current.name}.amazonaws.com"},
      "Action": [
        "kms:Encrypt",
        "kms:Decrypt",
        "kms:ReEncrypt*",
        "kms:GenerateDataKey*",
        "kms:DescribeKey"
      ],
      "Resource": "*"
    }
  ]
}
EOF
  tags = {
    Name        = "ecr-kms-key"
    Environment = "development"
    project     = "multi-speciality-hospital"
    owner       = "devops-team"
    email       = "abhishek.srivastava@octobit8.com"
    Type        = "kms-key"
  }
}




