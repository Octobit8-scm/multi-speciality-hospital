resource "aws_iam_role" "ecs_task_execution_role" {
  name = "msh_ecs_task_execution_role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = "sts:AssumeRole"
        Effect = "Allow"
        Principal = {
          Service = "ecs-tasks.amazonaws.com"
        }
      }
    ]
  })

  tags = {
    Name        = "msh-ecs-task-execution-role"
    Environment = "development"
    project     = "multi-speciality-hospital"
    owner       = "devops-team"
    email       = "abhishek.srivastava@octobit8.com"
    Type        = "ecs-task-execution-role"
  }
}

resource "aws_iam_role_policy_attachment" "ecs_task_execution_role_policy" {
  role       = aws_iam_role.ecs_task_execution_role.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AmazonECSTaskExecutionRolePolicy"
}

resource "aws_iam_policy" "ecs_task_execution_kms_decrypt" {
  name        = "msh_ecs_task_execution_kms_decrypt"
  description = "Allow ECS task execution role to decrypt ECR images with KMS key"
  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect = "Allow"
        Action = [
          "kms:Decrypt",
          "kms:DescribeKey"
        ]
        Resource = var.ecr_kms_key_arn
      }
    ]
  })
  tags = {
    name        = "msh-ecs-task-execution-kms-decrypt"
    environment = "development"
    project     = "multi_speciality_hospital"
    owner       = "devops_team"
    email       = "abhishek.srivastava@octobit8.com"
    type        = "ecs_task_execution_kms_decrypt_policy"
  }
}

resource "aws_iam_role_policy_attachment" "ecs_task_execution_kms_decrypt" {
  role       = aws_iam_role.ecs_task_execution_role.name
  policy_arn = aws_iam_policy.ecs_task_execution_kms_decrypt.arn
}

resource "aws_accessanalyzer_analyzer" "main" {
  analyzer_name = "main"
  type          = "ACCOUNT"
  tags = {
    name        = "main_access_analyzer"
    environment = "development"
    project     = "multi_speciality_hospital"
    owner       = "devops_team"
    email       = "abhishek.srivastava@octobit8.com"
    type        = "access_analyzer"
  }
}

resource "aws_ecr_repository_policy" "msh_ecr_repo_policy" {
  repository = aws_ecr_repository.msh_ecr_repo.name
  policy     = data.aws_iam_policy_document.ecr_policy.json
}


resource "aws_iam_role" "vpc_flow_log_role" {
  name = "vpc_flow_log_role"
  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Action = "sts:AssumeRole"
      Effect = "Allow"
      Principal = {
        Service = "vpc-flow-logs.amazonaws.com"
      }
    }]
  })
  tags = {
    name        = "vpc_flow_log_role"
    environment = "development"
    project     = "multi_speciality_hospital"
    owner       = "devops_team"
    email       = "abhishek.srivastava@octobit8.com"
    type        = "iam_role"
  }
}

resource "aws_iam_role_policy_attachment" "vpc_flow_log_role_attachment" {
  role       = aws_iam_role.vpc_flow_log_role.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AmazonAPIGatewayPushToCloudWatchLogs"
}
