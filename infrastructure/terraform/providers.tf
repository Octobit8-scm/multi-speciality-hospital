terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = "ap-south-1"
}

#Configure S3 bucket for terraform state management
terraform {
  backend "s3" {
    bucket         = "msh-terraform-state-dev"
    key            = "terraform.tfstate"
    region         = "ap-south-1"
    dynamodb_table = "msh-terraform-state-lock-table-dev"
  }
}
