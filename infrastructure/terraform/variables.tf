# kics-scan ignore-block

variable "alb_domain_name" {
  description = "The domain name for the ALB ACM certificate."
  type        = string
}

variable "route53_zone_id" {
  description = "The Route53 Hosted Zone ID for the domain."
  type        = string
}

variable "alb_certificate_arn" {
  description = "The ARN of the ACM certificate for the ALB HTTPS listener."
  type        = string
}

variable "ecr_kms_key_arn" {
  description = "ARN of the KMS key used to encrypt the ECR repository."
  type        = string
}
