data "aws_region" "current" {}

data "aws_caller_identity" "current" {}

resource "aws_kms_key" "cw_logs" {
  description             = "KMS key for CloudWatch Logs encryption"
  deletion_window_in_days = 7
  enable_key_rotation     = true
  policy                  = <<EOF
{
  "Version": "2012-10-17",
  "Id": "key-default-1",
  "Statement": [
    {
      "Sid": "AllowCloudWatchLogs",
      "Effect": "Allow",
      "Principal": {"Service": "logs.${data.aws_region.current.name}.amazonaws.com"},
      "Action": [
        "kms:Encrypt",
        "kms:Decrypt",
        "kms:ReEncrypt*",
        "kms:GenerateDataKey*",
        "kms:DescribeKey"
      ],
      "Resource": "*"
    },
    {
      "Sid": "AllowAccountAdminReadOnly",
      "Effect": "Allow",
      "Principal": {"AWS": "arn:aws:iam::${data.aws_caller_identity.current.account_id}:root"},
      "Action": [
        "kms:Describe*",
        "kms:Get*",
        "kms:List*"
      ],
      "Resource": "*"
    }
  ]
}
EOF
  tags = {
    name        = "cw_logs_kms_key"
    environment = "development"
    project     = "multi_speciality_hospital"
    owner       = "devops_team"
    email       = "abhishek.srivastava@octobit8.com"
    type        = "kms_key"
  }
}
