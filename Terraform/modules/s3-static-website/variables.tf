variable "aws_region" {
       description = "the AWS region to deploy resources in"
       type = string
       default = "sa-east-1"
}

variable "s3_bucket_name" {
       description = "this is s3 bucket name"
       type = string
       # default = "abhi-demo-bucket-12345" # eta hardcoded chilo. amra chaichi je random name hobe
      # default = "abhi-demo-${random_id.random_bucket_id.hex}"
}
