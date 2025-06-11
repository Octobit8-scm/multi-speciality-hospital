data "aws_region" "current" {}

resource "aws_kms_key" "cw_logs" {
  description             = "KMS key for CloudWatch Logs encryption"
  deletion_window_in_days = 7
  enable_key_rotation     = true
  tags = {
    Name        = "cw_logs_kms_key"
    Environment = "development"
    project     = "multi_speciality_hospital"
    owner       = "devops_team"
    email       = "abhishek.srivastava@octobit8.com"
    Type        = "kms_key"
  }
}
