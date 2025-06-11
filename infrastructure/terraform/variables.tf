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
