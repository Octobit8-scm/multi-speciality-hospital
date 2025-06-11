terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = "us-east-1"
}

# Configure S3 bucket for terraform state
terraform {
  backend "s3" {
    bucket         = "msh-terraform-state-dev"
    key            = "terraform.tfstate"
    region         = "us-east-1"
    dynamodb_table = "msh-terraform-lock"
  }
}
