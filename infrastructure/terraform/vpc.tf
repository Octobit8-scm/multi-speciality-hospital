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
