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

  tags = {
    Name        = "msh-ecs-service"
    Environment = "development"
    project     = "multi-speciality-hospital"
    owner       = "devops-team"
    email       = "abhishek.srivastava@octobit8.com"
    Type        = "ecs-service"
  }
  # The ECS service is dependent on the ECS cluster and task definition being created
  depends_on = [aws_ecs_cluster.msh-ecs-cluster, aws_ecs_task_definition.msh-ecs-task]
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




