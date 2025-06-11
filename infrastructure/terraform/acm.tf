# kics-scan ignore-block

# Comment out or remove the ACM certificate resource to avoid creating a new certificate for the same domain
# resource "aws_acm_certificate" "msh_alb_cert" {
#   domain_name       = var.alb_domain_name
#   validation_method = "DNS"
#
#   tags = {
#     Name        = "msh-alb-cert"
#     Environment = "development"
#     project     = "multi-speciality-hospital"
#     owner       = "devops-team"
#     email       = "abhishek.srivastava@octobit8.com"
#     Type        = "acm-certificate"
#   }
# }

# data "aws_acm_certificate" "msh_alb_cert" {
#   domain      = var.alb_domain_name
#   most_recent = true
# }
