variable "alb_certificate_arn" {
  description = "The ARN of the ACM certificate for the ALB HTTPS listener."
  type        = string
}

resource "aws_ecr_repository" "msh-ecr-repo" {
  # This resource creates an ECR repository for the Multi-Speciality Hospital project
  # It is used to store Docker images for the ECS services
  name                 = "msh-ecr-repo"
  image_tag_mutability = "MUTABLE"
  # Setting image_tag_mutability to "MUTABLE" allows overwriting images with the same tag
  tags = {
    Name        = "msh-ecr-repo"
    Environment = "development"
    project     = "multi-speciality-hospital"
    owner       = "devops-team"
    email       = "abhishek.srivastava@octobit8.com"
    Type        = "ecr-repository"
  }
  # Enabling image scanning on push to ensure security best practices
  # This will scan images for vulnerabilities when they are pushed to the repository
  depends_on = [aws_vpc.msh, aws_subnet.msh-public, aws_subnet.msh-private]
  image_scanning_configuration {
    scan_on_push = true
  }
}

resource "aws_cloudwatch_log_group" "ecs_log_group" {
  name              = "/ecs/msh-ecs-cluster"
  retention_in_days = 14
  tags = {
    Name        = "msh-ecs-log-group"
    Environment = "development"
    project     = "multi-speciality-hospital"
    owner       = "devops-team"
    email       = "abhishek.srivastava@octobit8.com"
    Type        = "cloudwatch-log-group"
  }
}

resource "aws_ecs_cluster" "msh-ecs-cluster" {
  # This resource creates an ECS cluster for the Multi-Speciality Hospital project
  # It is used to manage and run containerized applications
  name = "msh-ecs-cluster"
  tags = {
    Name        = "msh-ecs-cluster"
    Environment = "development"
    project     = "multi-speciality-hospital"
    owner       = "devops-team"
    email       = "abhishek.srivastava@octobit8.com"
    Type        = "ecs-cluster"
  }
  # The ECS cluster is dependent on the VPC and subnets being created
  depends_on = [aws_vpc.msh, aws_subnet.msh-public, aws_subnet.msh-private]
}
resource "aws_ecs_task_definition" "msh-ecs-task" {
  # This resource defines the ECS task for the Multi-Speciality Hospital project
  # It specifies the Docker image and container settings for the ECS service
  family                   = "msh-ecs-task"
  requires_compatibilities = ["FARGATE"]
  network_mode             = "awsvpc"
  cpu                      = "256" # 0.25 vCPU
  memory                   = "512" # 0.5 GB
  execution_role_arn       = aws_iam_role.ecs_task_execution_role.arn

  container_definitions = jsonencode([
    {
      name      = "msh-container"
      image     = "${aws_ecr_repository.msh-ecr-repo.repository_url}:latest"
      essential = true
      portMappings = [
        {
          containerPort = 80
          hostPort      = 80
          protocol      = "tcp"
        }
      ]
      logConfiguration = {
        logDriver = "awslogs"
        options = {
          awslogs-group         = aws_cloudwatch_log_group.ecs_log_group.name
          awslogs-region        = "us-east-1"
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
  # The ECS task definition is dependent on the ECR repository being created
  depends_on = [aws_ecr_repository.msh-ecr-repo]
}

resource "aws_lb" "msh-alb" {
  name               = "msh-alb"
  internal           = false
  load_balancer_type = "application"
  security_groups    = [aws_security_group.msh-public-sg.id]
  subnets            = [aws_subnet.msh-public.id]

  tags = {
    Name        = "msh-alb"
    Environment = "development"
    project     = "multi-speciality-hospital"
    owner       = "devops-team"
    email       = "abhishek.srivastava@octobit8.com"
    Type        = "application-load-balancer"
  }
}

resource "aws_lb_target_group" "msh-alb-tg" {
  name     = "msh-alb-tg"
  port     = 80
  protocol = "HTTP"
  vpc_id   = aws_vpc.msh.id

  health_check {
    path                = "/"
    protocol            = "HTTP"
    matcher             = "200-399"
    interval            = 30
    timeout             = 5
    healthy_threshold   = 2
    unhealthy_threshold = 2
  }

  tags = {
    Name        = "msh-alb-tg"
    Environment = "development"
    project     = "multi-speciality-hospital"
    owner       = "devops-team"
    email       = "abhishek.srivastava@octobit8.com"
    Type        = "alb-target-group"
  }
}

resource "aws_lb_listener" "msh-alb-listener" {
  load_balancer_arn = aws_lb.msh-alb.arn
  port              = 443
  protocol          = "HTTPS"
  ssl_policy        = "ELBSecurityPolicy-2016-08"
  certificate_arn   = var.alb_certificate_arn

  default_action {
    type             = "forward"
    target_group_arn = aws_lb_target_group.msh-alb-tg.arn
  }
}

resource "aws_ecs_service" "msh-ecs-service" {
  # This resource creates an ECS service for the Multi-Speciality Hospital project
  # It runs the ECS task on the specified cluster and subnets
  name            = "msh-ecs-service"
  cluster         = aws_ecs_cluster.msh-ecs-cluster.id
  task_definition = aws_ecs_task_definition.msh-ecs-task.arn
  desired_count   = 1
  launch_type     = "FARGATE"

  network_configuration {
    subnets          = [aws_subnet.msh-public.id]
    security_groups  = [aws_security_group.msh-public-sg.id]
    assign_public_ip = true
  }

  load_balancer {
    target_group_arn = aws_lb_target_group.msh-alb-tg.arn
    container_name   = "msh-container"
    container_port   = 80
  }

  tags = {
    Name        = "msh-ecs-service"
    Environment = "development"
    project     = "multi-speciality-hospital"
    owner       = "devops-team"
    email       = "abhishek.srivastava@octobit8.com"
    Type        = "ecs-service"
  }
  # The ECS service is dependent on the ECS cluster and task definition being created
  depends_on = [aws_lb_listener.msh-alb-listener, aws_ecs_cluster.msh-ecs-cluster, aws_ecs_task_definition.msh-ecs-task]
  # The service will run the task in the public subnet with the specified security group
  # This allows the service to be accessible from the internet
  # The security group allows inbound traffic on port 80 (HTTP) from anywhere
  lifecycle {
    ignore_changes = [
      network_configuration[0].security_groups,
      network_configuration[0].subnets
    ]
  }
}

resource "aws_wafv2_web_acl" "msh_waf" {
  name        = "msh-waf"
  description = "WAF for ALB"
  scope       = "REGIONAL"
  default_action {
    allow {}
  }
  visibility_config {
    cloudwatch_metrics_enabled = true
    metric_name                = "msh-waf"
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
    Name        = "msh-waf"
    Environment = "development"
    project     = "multi-speciality-hospital"
    owner       = "devops-team"
    email       = "abhishek.srivastava@octobit8.com"
    Type        = "waf"
  }
}

resource "aws_wafv2_web_acl_association" "msh_waf_alb_assoc" {
  resource_arn = aws_lb.msh-alb.arn
  web_acl_arn  = aws_wafv2_web_acl.msh_waf.arn
}




