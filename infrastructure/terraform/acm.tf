resource "aws_acm_certificate" "msh_alb_cert" {
  domain_name       = var.alb_domain_name
  validation_method = "DNS"

  tags = {
    Name        = "msh-alb-cert"
    Environment = "development"
    project     = "multi-speciality-hospital"
    owner       = "devops-team"
    email       = "abhishek.srivastava@octobit8.com"
    Type        = "acm-certificate"
  }
}

resource "aws_route53_record" "msh_alb_cert_validation" {
  for_each = {
    for dvo in aws_acm_certificate.msh_alb_cert.domain_validation_options : dvo.domain_name => {
      name   = dvo.resource_record_name
      type   = dvo.resource_record_type
      record = dvo.resource_record_value
    }
  }
  zone_id = var.route53_zone_id
  name    = each.value.name
  type    = each.value.type
  records = [each.value.record]
  ttl     = 60
}

resource "aws_acm_certificate_validation" "msh_alb_cert_validation" {
  certificate_arn         = aws_acm_certificate.msh_alb_cert.arn
  validation_record_fqdns = [for record in aws_route53_record.msh_alb_cert_validation : record.fqdn]
  depends_on              = [aws_route53_record.msh_alb_cert_validation]
  lifecycle {
    create_before_destroy = true
    ignore_changes        = [validation_record_fqdns]
  }
}
