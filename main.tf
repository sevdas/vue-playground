terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.16"
    }
  }

}

provider "aws" {
  region = "eu-west-1"
}

resource "aws_budgets_budget" "like-and-subscribe" {
  name              = "monthly-budget"
  budget_type       = "COST"
  limit_amount      = "50.0"
  limit_unit        = "POUND"
  time_unit         = "MONTHLY"
  time_period_start = "2024-01-02_00:01"

}

# Create an RDS instance
# resource "aws_db_instance" "database" {
#   engine         = "mysql"
#   engine_version = "5.7"
#   instance_class = "db.t2.micro"
#   # Additional configurations...
# }

# resource "aws_instance" "example_app_server_instance" {
#   ami           = "ami-0b7e25141ae1bd90c"
#   instance_type = "t2.micro"

#   tags = {
#     Name = "ExampleAppServerInstance"
#   }
# }