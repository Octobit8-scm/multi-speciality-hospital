# kics-scan ignore-block
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

resource "aws_subnet" "msh-public" {
  vpc_id                  = aws_vpc.msh.id
  cidr_block              = "10.0.1.0/24" # Public subnet in 10.0.0.0/16
  availability_zone       = "us-east-1a"
  map_public_ip_on_launch = true
  tags = {
    Name        = "msh-public-subnet"
    Environment = "development"
    project     = "multi-speciality-hospital"
    owner       = "devops-team"
    email       = "abhishek.srivastava@octobit8.com"
    Type        = "public"
  }
}

resource "aws_subnet" "msh-public-2" {
  vpc_id                  = aws_vpc.msh.id
  cidr_block              = "10.0.3.0/24" # Second public subnet in 10.0.0.0/16
  availability_zone       = "us-east-1b"
  map_public_ip_on_launch = true
  tags = {
    Name        = "msh-public-subnet-2"
    Environment = "development"
    project     = "multi-speciality-hospital"
    owner       = "devops-team"
    email       = "abhishek.srivastava@octobit8.com"
    Type        = "public"
  }
}

resource "aws_subnet" "msh-private" {
  vpc_id            = aws_vpc.msh.id
  cidr_block        = "10.0.2.0/24" # Private subnet in 10.0.0.0/16
  availability_zone = "us-east-1a"
  tags = {
    Name        = "msh-private-subnet"
    Environment = "development"
    project     = "multi-speciality-hospital"
    owner       = "devops-team"
    email       = "abhishek.srivastava@octobit8.com"
    Type        = "private"
  }
}

resource "aws_internet_gateway" "msh-vpc-ig" {
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

resource "aws_route_table" "msh-public-rt" {
  vpc_id = aws_vpc.msh.id

  route {
    cidr_block = "0.0.0.0/0" # Route all outbound traffic to the internet
    gateway_id = aws_internet_gateway.msh-vpc-ig.id
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

resource "aws_route_table_association" "msh-public-rt-assoc" {
  subnet_id      = aws_subnet.msh-public.id
  route_table_id = aws_route_table.msh-public-rt.id
  depends_on     = [aws_route_table.msh-public-rt]
}

resource "aws_route_table_association" "msh-public-rt-assoc-2" {
  subnet_id      = aws_subnet.msh-public-2.id
  route_table_id = aws_route_table.msh-public-rt.id
  depends_on     = [aws_route_table.msh-public-rt]
}

resource "aws_route_table" "msh-private-rt" {
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
resource "aws_route_table_association" "msh-private-rt-assoc" {
  subnet_id      = aws_subnet.msh-private.id
  route_table_id = aws_route_table.msh-private-rt.id
  depends_on     = [aws_route_table.msh-private-rt]
}

resource "aws_security_group" "msh_public_sg" {
  vpc_id = aws_vpc.msh.id

  ingress {
    description = "Allow HTTP from anywhere"
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
  ingress {
    description = "Allow HTTPS from anywhere"
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
  ingress {
    description = "Allow SSH from public subnet"
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["10.0.1.0/24"]
  }
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
}

resource "aws_iam_role_policy_attachment" "vpc_flow_log_role_attachment" {
  role       = aws_iam_role.vpc_flow_log_role.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AmazonAPIGatewayPushToCloudWatchLogs"
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
    subnet_id = aws_subnet.msh-public.id
  }
  subnet_mapping {
    subnet_id = aws_subnet.msh-public-2.id
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

