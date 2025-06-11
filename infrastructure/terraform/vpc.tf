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

resource "aws_security_group" "msh-public-sg" {
  vpc_id = aws_vpc.msh.id

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"] # Allow HTTP traffic from anywhere
  }
  ingress {
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"] # Allow HTTPS traffic from anywhere
  }
  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["10.0.1.0/24"] # Allow SSH traffic from the public subnet
  }
  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"          # Allow all outbound traffic
    cidr_blocks = ["0.0.0.0/0"] # Allow all outbound traffic
  }
  tags = {
    Name        = "msh-public-sg"
    Environment = "development"
    project     = "multi-speciality-hospital"
    owner       = "devops-team"
    email       = "abhishek.srivastava@octobit8.com"
    Type        = "public-security-group"
  }
  depends_on = [aws_vpc.msh]
}

