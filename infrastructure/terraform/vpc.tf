resource "aws_vpc" "msh" {
  cidr_block = "10.0.0.0/16"

  tags = {
    Name        = "msh-vpc"
    Environment = "development"
    project     = "multi-speciality-hospital"
    owner       = "devops-team"
    email       = "abhishek.srivastava@octobit8.com"
  }
  enable_dns_support   = true
  enable_dns_hostnames = true
  instance_tenancy     = "default"
}

resource "aws_subnet" "msh_public" {
  vpc_id            = aws_vpc.msh.id
  cidr_block        = "10.0.1.0/24" # Public subnet in 10.0.0.0/16
  availability_zone = "ap-south-1a"
  tags = {
    Name        = "msh-public-subnet"
    Environment = "development"
    project     = "multi-speciality-hospital"
    owner       = "devops-team"
    email       = "abhishek.srivastava@octobit8.com"
    Type        = "public"
  }
}

resource "aws_subnet" "msh_public_2" {
  vpc_id            = aws_vpc.msh.id
  cidr_block        = "10.0.3.0/24" # Second public subnet in 10.0.0.0/16
  availability_zone = "ap-south-1b"
  tags = {
    Name        = "msh-public-subnet-2"
    Environment = "development"
    project     = "multi-speciality-hospital"
    owner       = "devops-team"
    email       = "abhishek.srivastava@octobit8.com"
    Type        = "public"
  }
}

resource "aws_subnet" "msh_private" {
  vpc_id            = aws_vpc.msh.id
  cidr_block        = "10.0.2.0/24" # Private subnet in 10.0.0.0/16
  availability_zone = "ap-south-1a"
  tags = {
    Name        = "msh-private-subnet"
    Environment = "development"
    project     = "multi-speciality-hospital"
    owner       = "devops-team"
    email       = "abhishek.srivastava@octobit8.com"
    Type        = "private"
  }
}

resource "aws_internet_gateway" "msh_vpc_ig" {
  vpc_id = aws_vpc.msh.id

  tags = {
    Name        = "msh-vpc-ig"
    Environment = "development"
    project     = "multi-speciality-hospital"
    owner       = "devops-team"
    email       = "abhishek.srivastava@octobit8.com"
    Type        = "internet-gateway"

  }

  depends_on = [aws_vpc.msh]
}

resource "aws_route_table" "msh_public_rt" {
  vpc_id = aws_vpc.msh.id

  route {
    cidr_block = "0.0.0.0/0" # Route all outbound traffic to the internet
    gateway_id = aws_internet_gateway.msh_vpc_ig.id
  }
  tags = {
    Name        = "msh-public-rt"
    Environment = "development"
    project     = "multi-speciality-hospital"
    owner       = "devops-team"
    email       = "abhishek.srivastava@octobit8.com"
    Type        = "public-route-table"
  }
}

resource "aws_route_table_association" "msh_public_rt_assoc" {
  subnet_id      = aws_subnet.msh_public.id
  route_table_id = aws_route_table.msh_public_rt.id
  depends_on     = [aws_route_table.msh_public_rt]
}

resource "aws_route_table_association" "msh_public_rt_assoc_2" {
  subnet_id      = aws_subnet.msh_public_2.id
  route_table_id = aws_route_table.msh_public_rt.id
  depends_on     = [aws_route_table.msh_public_rt]
}

resource "aws_route_table" "msh_private_rt" {
  vpc_id = aws_vpc.msh.id

  tags = {
    Name        = "msh-private-rt"
    Environment = "development"
    project     = "multi-speciality-hospital"
    owner       = "devops-team"
    email       = "abhishek.srivastava@octobit8.com"
    Type        = "private-route-table"
  }
}
resource "aws_route_table_association" "msh_private_rt_assoc" {
  subnet_id      = aws_subnet.msh_private.id
  route_table_id = aws_route_table.msh_private_rt.id
  depends_on     = [aws_route_table.msh_private_rt]
}

resource "aws_security_group" "msh_public_sg" {
  vpc_id      = aws_vpc.msh.id
  name        = "msh-public-sg"
  description = "Security group for public subnet in MSH VPC"

  egress {
    description = "Allow all outbound traffic"
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
  tags = {
    Name        = "msh_public_sg"
    Environment = "development"
    project     = "multi_speciality_hospital"
    owner       = "devops_team"
    email       = "abhishek.srivastava@octobit8.com"
    Type        = "public_security_group"
  }
  depends_on = [aws_vpc.msh]
}

resource "aws_security_group" "msh_ecs_service_sg" {
  vpc_id      = aws_vpc.msh.id
  name        = "msh-ecs-service-sg"
  description = "Security group for ECS service in MSH VPC"

  egress {
    description = "Allow all outbound traffic"
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    description     = "Allow HTTP from ALB"
    from_port       = 3000
    to_port         = 3000
    protocol        = "tcp"
    security_groups = [aws_security_group.msh_alb_sg.id]
  }

  tags = {
    Name        = "msh_ecs_service_sg"
    Environment = "development"
    project     = "multi_speciality_hospital"
    owner       = "devops_team"
    email       = "abhishek.srivastava@octobit8.com"
    Type        = "ecs_service_security_group"
  }
  depends_on = [aws_vpc.msh]
}

resource "aws_security_group" "msh_alb_sg" {
  vpc_id      = aws_vpc.msh.id
  name        = "msh-alb-sg"
  description = "Security group for ALB in MSH VPC"

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
  ingress {
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
  tags = {
    Name        = "msh-alb-sg"
    Environment = "development"
    project     = "multi_speciality_hospital"
    owner       = "devops_team"
    email       = "abhishek.srivastava@octobit8.com"
    Type        = "alb_security_group"
  }
}

resource "aws_flow_log" "vpc_flow_log" {
  log_destination_type = "cloud-watch-logs"
  log_destination      = aws_cloudwatch_log_group.ecs_log_group.arn
  iam_role_arn         = aws_iam_role.vpc_flow_log_role.arn
  vpc_id               = aws_vpc.msh.id
  traffic_type         = "ALL"
  tags = {
    Name        = "vpc_flow_log"
    Environment = "development"
    project     = "multi_speciality_hospital"
    owner       = "devops_team"
    email       = "abhishek.srivastava@octobit8.com"
    Type        = "vpc_flow_log"
  }
}


resource "aws_networkfirewall_firewall_policy" "msh_nfw_policy" {
  name = "msh-nfw-policy"
  firewall_policy {
    stateless_default_actions          = ["aws:forward_to_sfe"]
    stateless_fragment_default_actions = ["aws:forward_to_sfe"]
    stateful_rule_group_reference {
      resource_arn = aws_networkfirewall_rule_group.msh_nfw_rule_group.arn
    }
  }
  tags = {
    Name        = "msh_nfw_policy"
    Environment = "development"
    project     = "multi_speciality_hospital"
    owner       = "devops_team"
    email       = "abhishek.srivastava@octobit8.com"
    Type        = "network_firewall_policy"
  }
}

resource "aws_networkfirewall_rule_group" "msh_nfw_rule_group" {
  capacity = 100
  name     = "msh-nfw-rule-group"
  type     = "STATEFUL"
  rule_group {
    rules_source {
      rules_string = <<EOF
pass tcp any any -> any any (sid:1; rev:1;)
EOF
    }
  }
  tags = {
    Name        = "msh-nfw-rule-group"
    Environment = "development"
    project     = "multi_speciality_hospital"
    owner       = "devops_team"
    email       = "abhishek.srivastava@octobit8.com"
    Type        = "network_firewall_rule_group"
  }
}

resource "aws_networkfirewall_firewall" "msh_nfw" {
  name                = "msh-nfw"
  firewall_policy_arn = aws_networkfirewall_firewall_policy.msh_nfw_policy.arn
  vpc_id              = aws_vpc.msh.id
  subnet_mapping {
    subnet_id = aws_subnet.msh_public.id
  }
  subnet_mapping {
    subnet_id = aws_subnet.msh_public_2.id
  }
  tags = {
    Name        = "msh_nfw"
    Environment = "development"
    project     = "multi_speciality_hospital"
    owner       = "devops_team"
    email       = "abhishek.srivastava@octobit8.com"
    Type        = "network_firewall"
  }
}

