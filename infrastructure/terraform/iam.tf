# kics-scan ignore-block

resource "aws_iam_role" "ecs_task_execution_role" {
  name = "msh-ecs-task-execution-role"

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

# resource "aws_accessanalyzer_analyzer" "main" {
#   analyzer_name = "main"
#   type          = "ACCOUNT"
#   tags = {
#     name        = "main_access_analyzer"
#     environment = "development"
#     project     = "multi_speciality_hospital"
#     owner       = "devops_team"
#     email       = "abhishek.srivastava@octobit8.com"
#     type        = "access_analyzer"
#   }
# }
