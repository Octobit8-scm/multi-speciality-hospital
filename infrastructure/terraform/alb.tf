resource "aws_lb" "msh_alb" {
  name                       = "msh-alb"
  internal                   = false
  load_balancer_type         = "application"
  security_groups            = [aws_security_group.msh_public_sg.id]
  subnets                    = [aws_subnet.msh_public.id, aws_subnet.msh_public_2.id]
  enable_deletion_protection = true
  drop_invalid_header_fields = true
  tags = {
    Name        = "msh-alb"
    Environment = "development"
    project     = "multi-speciality-hospital"
    owner       = "devops-team"
    email       = "abhishek.srivastava@octobit8.com"
    Type        = "application-load-balancer"
  }
}

resource "aws_lb_target_group" "msh_alb_tg" {
  name        = "msh-alb-tg"
  port        = 3000
  protocol    = "HTTP"
  vpc_id      = aws_vpc.msh.id
  target_type = "ip"

  health_check {
    path                = "/"
    protocol            = "HTTP"
    matcher             = "200-399"
    interval            = 30
    timeout             = 5
    healthy_threshold   = 2
    unhealthy_threshold = 2
  }

  tags = {
    Name        = "msh-alb-tg"
    Environment = "development"
    project     = "multi-speciality-hospital"
    owner       = "devops-team"
    email       = "abhishek.srivastava@octobit8.com"
    Type        = "alb-target-group"
  }
}

resource "aws_lb_listener" "msh_alb_listener" {
  load_balancer_arn = aws_lb.msh_alb.arn
  port              = 443 # or 443 for HTTPS
  protocol          = "HTTPS"
  ssl_policy        = "ELBSecurityPolicy-2016-08"
  certificate_arn   = var.alb_certificate_arn

  default_action {
    type             = "forward"
    target_group_arn = aws_lb_target_group.msh_alb_tg.arn
  }
}
