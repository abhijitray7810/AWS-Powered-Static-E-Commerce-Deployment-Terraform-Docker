resource "random_id" "random_bucket_id" {
  byte_length = 8
}

resource "aws_s3_bucket" "demo_bucket" {
  bucket = "e-commerce-site-${random_id.random_bucket_id.hex}"
}

resource "aws_s3_bucket_public_access_block" "public_settings" {
  bucket = aws_s3_bucket.demo_bucket.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}
resource "aws_s3_bucket_policy" "bucket_policy" {
  bucket = aws_s3_bucket.demo_bucket.id
  policy = jsonencode(
    {
      Version = "2012-10-17"
      Statement = [
        {
          Effect    = "Allow"
          Principal = "*"
          Action = [
            "s3:GetObject"
          ]
          Resource = "${aws_s3_bucket.demo_bucket.arn}/*"
        }
      ]
    }
  )
}

resource "aws_s3_bucket_website_configuration" "e-commerce-website" {
  bucket = aws_s3_bucket.demo_bucket.id

  index_document {
    suffix = "index.html"
  }
}


resource "aws_s3_object" "bucket_data" {
  bucket = aws_s3_bucket.demo_bucket.bucket
  source = "./index.html"
  key    = "index.html"
  content_type = "text/html"
}

