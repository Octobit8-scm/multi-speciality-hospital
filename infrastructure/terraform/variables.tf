variable "alb_domain_name" {
  description = "The domain name for the ALB ACM certificate."
  type        = string
}

variable "route53_zone_id" {
  description = "The Route53 Hosted Zone ID for the domain."
  type        = string
}

# Removed alb_certificate_arn variable, as we now use the data source for ACM cert
# variable "alb_certificate_arn" {
#   description = "The ARN of the ACM certificate for the ALB HTTPS listener."
#   type        = string
# }
