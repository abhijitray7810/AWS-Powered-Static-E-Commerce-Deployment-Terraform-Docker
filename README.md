# 🛍️ Static E-Commerce Website - AWS Cloud Deployment

[![AWS](https://img.shields.io/badge/AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white)](https://aws.amazon.com/)
[![Terraform](https://img.shields.io/badge/Terraform-7B42BC?style=for-the-badge&logo=terraform&logoColor=white)](https://www.terraform.io/)
[![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)
[![S3](https://img.shields.io/badge/Amazon_S3-569A31?style=for-the-badge&logo=amazons3&logoColor=white)](https://aws.amazon.com/s3/)
[![CloudFront](https://img.shields.io/badge/CloudFront-FF4F8B?style=for-the-badge&logo=amazonaws&logoColor=white)](https://aws.amazon.com/cloudfront/)

A production-ready, scalable static e-commerce website deployed on AWS using Infrastructure as Code (Terraform) and containerization (Docker). This project demonstrates modern DevOps practices and cloud architecture patterns.

---

## 📋 Table of Contents

- [Overview](#-overview) 
- [Architecture](#-architecture)
- [Features](#-features)
- [Prerequisites](#-prerequisites)
- [Project Structure](#-project-structure)
- [Quick Start](#-quick-start)
- [Detailed Setup](#-detailed-setup)
- [Deployment](#-deployment)
- [Configuration](#-configuration)
- [Monitoring & Maintenance](#-monitoring--maintenance)
- [Cost Analysis](#-cost-analysis)
- [Security](#-security)
- [Troubleshooting](#-troubleshooting)
- [CI/CD Integration](#-cicd-integration)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🌟 Overview

This project provides a complete solution for hosting a static e-commerce website on AWS with:

- **Global Content Delivery** via CloudFront CDN
- **Secure HTTPS** with AWS Certificate Manager (ACM)
- **Automated Infrastructure** provisioning using Terraform
- **Containerized Deployment** pipeline with Docker
- **Production-Grade Security** with encryption and access controls
- **Cost-Optimized** architecture for small to medium traffic

### Live Demo
```
https://e-commerce-site-441ce407d1938ff7.s3-website-sa-east-1.amazonaws.com
```

---

## 🏗️ Architecture

### High-Level Architecture Diagram

![image](https://github.com/abhijitray7810/AWS-Powered-Static-E-Commerce-Deployment-Terraform-Docker-/blob/88ba67261b08bf556da2780439449322b8ab075b/Architecture/diagram.png)

### Component Details

| Component | Purpose | Key Features |
|-----------|---------|--------------|
| **Route 53** | DNS Management | Domain routing, health checks, failover |
| **CloudFront** | CDN | Global edge caching, DDoS protection, SSL/TLS |
| **ACM** | SSL Certificates | Free SSL/TLS, auto-renewal, wildcard support |
| **S3** | Static Hosting | Object storage, versioning, encryption |
| **Terraform** | Infrastructure | Version control, automation, reproducibility |
| **Docker** | Deployment | Containerization, consistency, portability |

### Request Flow

1. **User Request** → User accesses `https://your-domain.com`
2. **DNS Resolution** → Route 53 resolves domain to CloudFront distribution
3. **Edge Cache Check** → CloudFront checks nearest edge location for cached content
4. **Origin Fetch** → If cache miss, CloudFront fetches from S3 origin
5. **SSL/TLS** → ACM certificate encrypts the connection
6. **Content Delivery** → Compressed, cached content delivered to user

---

## ✨ Features

### 🚀 Performance
- ⚡ **Global CDN** with 200+ edge locations worldwide
- ⚡ **Gzip Compression** for faster downloads
- ⚡ **Browser Caching** headers optimized
- ⚡ **HTTP/2** support for multiplexing
- ⚡ **Edge Computing** capabilities ready

### 🔐 Security
- 🔒 **HTTPS Enforcement** with automatic HTTP to HTTPS redirect
- 🔒 **S3 Encryption** at rest (AES-256)
- 🔒 **Origin Access Control** (OAC) prevents direct S3 access
- 🔒 **Private Bucket** policy with CloudFront-only access
- 🔒 **DDoS Protection** via AWS Shield Standard
- 🔒 **Web Application Firewall** (WAF) ready

### 🛠️ DevOps
- 📦 **Infrastructure as Code** with Terraform
- 📦 **Version Control** for infrastructure changes
- 📦 **Modular Design** with reusable Terraform modules
- 📦 **Containerized Deployment** with Docker
- 📦 **Automated Provisioning** and updates
- 📦 **State Management** with S3 backend

### 💰 Cost Optimization
- 💵 **Pay-as-you-go** pricing model
- 💵 **S3 Lifecycle Policies** for old versions
- 💵 **CloudFront Caching** reduces origin requests
- 💵 **Free Tier** eligible for new AWS accounts
- 💵 **Estimated Cost**: $5-15/month for low-medium traffic

### 📊 Observability
- 📈 **CloudWatch Metrics** integration
- 📈 **Access Logs** to S3
- 📈 **Real-time Monitoring** dashboard
- 📈 **Alerting** capabilities
- 📈 **Performance Analytics**

---

## 📋 Prerequisites

### Required Tools

| Tool | Version | Purpose | Installation |
|------|---------|---------|--------------|
| **AWS Account** | - | Cloud provider | [Sign up](https://aws.amazon.com/) |
| **AWS CLI** | >= 2.0 | AWS command line | [Install](https://aws.amazon.com/cli/) |
| **Terraform** | >= 1.0 | Infrastructure automation | [Install](https://www.terraform.io/downloads) |
| **Docker** | >= 20.10 | Containerization | [Install](https://docs.docker.com/get-docker/) |
| **Git** | >= 2.0 | Version control | [Install](https://git-scm.com/) |

### AWS Permissions Required

Your IAM user/role needs these permissions:
- `s3:*` - S3 bucket operations
- `cloudfront:*` - CloudFront distribution management
- `route53:*` - DNS record management
- `acm:*` - Certificate management
- `iam:*` - IAM role/policy management

### Optional
- **Domain Name** - For custom domain (can use Route 53 to register)
- **Text Editor** - VS Code, Sublime, etc.

---

## 📁 Project Structure

```
.
├── Dockerfile                          # Container build instructions
├── deploy.sh                          # Automated deployment script
├── README.md                          # This file
│
├── website/                           # Static website files
│   ├── index.html                    # Main HTML page
│   ├── style.css                     # Styling (modern gradients)
│   └── app.js                        # JavaScript (cart, products)
│
└── terraform/                         # Infrastructure as Code
    ├── main.tf                       # Root module configuration
    ├── terraform.tfvars              # Variable values (create this)
    ├── README.md                     # Terraform documentation
    │
    └── modules/                      # Reusable modules
        └── s3-static-website/        # S3 bucket module
            ├── main.tf               # S3 resource definitions
            ├── variables.tf          # Module input variables
            └── outputs.tf            # Module outputs
```

### File Descriptions

#### Root Level
- **Dockerfile** - Multi-stage Docker build for deployment container
- **deploy.sh** - Bash script to sync files to S3 and invalidate CloudFront
- **README.md** - Project documentation

#### Website Directory
- **index.html** - Responsive e-commerce site with hero, products, contact
- **style.css** - Modern CSS with gradients, animations, responsive design
- **app.js** - Shopping cart, product grid, form handling, notifications

#### Terraform Directory
- **main.tf** - AWS provider config, S3, CloudFront, Route 53, ACM
- **terraform.tfvars** - Environment-specific variable values
- **modules/** - Reusable infrastructure components

---

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/static-ecommerce-aws.git
cd static-ecommerce-aws
```

### 2. Configure AWS Credentials

```bash
aws configure
# AWS Access Key ID: YOUR_ACCESS_KEY
# AWS Secret Access Key: YOUR_SECRET_KEY
# Default region: us-east-1
# Default output format: json
```

**Verify configuration:**
```bash
aws sts get-caller-identity
```

### 3. Create Terraform Variables

Create `terraform/terraform.tfvars`:

```hcl
aws_region  = "us-east-1"
environment = "production"
domain_name = "your-domain.com"        # Change this
bucket_name = "your-unique-bucket"     # Must be globally unique
```

### 4. Initialize and Deploy Infrastructure

```bash
cd terraform

# Initialize Terraform
terraform init

# Preview changes
terraform plan

# Deploy infrastructure
terraform apply
# Type 'yes' when prompted
```

⏱️ **Deployment time**: 5-10 minutes

### 5. Upload Website Files

```bash
# Make deploy script executable
chmod +x ../deploy.sh

# Get S3 bucket name from Terraform
export S3_BUCKET=$(terraform output -raw s3_bucket_name)

# Get CloudFront distribution ID
export CLOUDFRONT_DISTRIBUTION_ID=$(terraform output -raw cloudfront_distribution_id)

# Run deployment
cd ..
./deploy.sh
```

### 6. Configure DNS (for Custom Domain)

```bash
cd terraform

# Get Route 53 nameservers
terraform output nameservers
```

Update your domain registrar's DNS settings with these nameservers.

🎉 **Your website is now live!**

---

## 📖 Detailed Setup

### Step 1: AWS Account Setup

1. **Create AWS Account** at [aws.amazon.com](https://e-commerce-site-441ce407d1938ff7.s3-website-sa-east-1.amazonaws.com)
2. **Enable MFA** on root account (Security → Multi-factor authentication)
3. **Create IAM User** with programmatic access
4. **Attach Policies**: AdministratorAccess or custom policy
5. **Download Credentials** (Access Key ID + Secret)

### Step 2: Install Required Tools

#### macOS
```bash
# Homebrew
brew install awscli terraform docker

# Verify installations
aws --version
terraform --version
docker --version
```

#### Linux (Ubuntu/Debian)
```bash
# AWS CLI
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
sudo ./aws/install

# Terraform
wget https://releases.hashicorp.com/terraform/1.6.0/terraform_1.6.0_linux_amd64.zip
unzip terraform_1.6.0_linux_amd64.zip
sudo mv terraform /usr/local/bin/

# Docker
sudo apt-get update
sudo apt-get install docker.io
```

#### Windows
```powershell
# Using Chocolatey
choco install awscli terraform docker-desktop

# Or download installers from official websites
```

### Step 3: Configure Terraform Backend (Optional)

For team collaboration, use S3 backend for state storage:

```hcl
# Create backend bucket first
aws s3 mb s3://terraform-state-ecommerce --region us-east-1

# Enable versioning
aws s3api put-bucket-versioning \
  --bucket terraform-state-ecommerce \
  --versioning-configuration Status=Enabled
```

### Step 4: Customize Website

Edit `website/index.html`, `style.css`, and `app.js` to match your brand:

```javascript
// website/app.js - Update products
const products = [
    {
        id: 1,
        name: "Your Product Name",
        description: "Product description",
        price: 99.99,
        emoji: "🎧"
    },
    // Add more products...
];
```

### Step 5: Test Locally

```bash
cd website

# Python 3
python3 -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js
npx http-server

# Open browser: http://localhost:8000
```

---

## 🚢 Deployment

### Method 1: Manual Deployment (Recommended for First Time)

```bash
# 1. Deploy infrastructure
cd terraform
terraform apply

# 2. Get outputs
export S3_BUCKET=$(terraform output -raw s3_bucket_name)
export CLOUDFRONT_ID=$(terraform output -raw cloudfront_distribution_id)

# 3. Upload website
aws s3 sync ../website/ s3://$S3_BUCKET/ --delete

# 4. Invalidate CloudFront cache
aws cloudfront create-invalidation \
  --distribution-id $CLOUDFRONT_ID \
  --paths "/*"
```

### Method 2: Using Deploy Script

```bash
# Set environment variables
export S3_BUCKET="your-bucket-name"
export CLOUDFRONT_DISTRIBUTION_ID="your-distribution-id"
export AWS_REGION="us-east-1"

# Run deployment
chmod +x deploy.sh
./deploy.sh
```

### Method 3: Docker Deployment

```bash
# Build Docker image
docker build -t ecommerce-deployer .

# Run deployment container
docker run \
  -e AWS_ACCESS_KEY_ID=$AWS_ACCESS_KEY_ID \
  -e AWS_SECRET_ACCESS_KEY=$AWS_SECRET_ACCESS_KEY \
  -e S3_BUCKET=your-bucket-name \
  -e CLOUDFRONT_DISTRIBUTION_ID=your-distribution-id \
  ecommerce-deployer
```

### Update Workflow

```bash
# 1. Make changes to website files
vim website/index.html

# 2. Test locally
cd website && python3 -m http.server 8000

# 3. Deploy changes
cd ..
./deploy.sh

# 4. Verify deployment
https://e-commerce-site-441ce407d1938ff7.s3-website-sa-east-1.amazonaws.com
```

---

## ⚙️ Configuration

### Terraform Variables

Create `terraform/terraform.tfvars`:

```hcl
# AWS Configuration
aws_region = "us-east-1"              # AWS region
environment = "production"             # Environment name

# Domain Configuration
domain_name = "example.com"           # Your domain
bucket_name = "example-static-site"   # Unique S3 bucket name

# Optional: CloudFront Price Class
# price_class = "PriceClass_100"      # Use only US, Canada, Europe
# price_class = "PriceClass_200"      # Add Asia, Africa, Oceania
# price_class = "PriceClass_All"      # All edge locations (default)
```

### Environment-Specific Configurations

#### Production (production.tfvars)
```hcl
aws_region  = "us-east-1"
environment = "production"
domain_name = "example.com"
bucket_name = "example-prod"
```

#### Staging (staging.tfvars)
```hcl
aws_region  = "us-west-2"
environment = "staging"
domain_name = "staging.example.com"
bucket_name = "example-staging"
```

#### Development (development.tfvars)
```hcl
aws_region  = "us-east-1"
environment = "development"
domain_name = "dev.example.com"
bucket_name = "example-dev"
```

**Deploy to specific environment:**
```bash
terraform apply -var-file="staging.tfvars"
```

### Advanced Configuration

#### Custom Cache Behaviors

Edit `terraform/main.tf`:

```hcl
# Add to CloudFront distribution
ordered_cache_behavior {
  path_pattern     = "/images/*"
  target_origin_id = "S3-${var.bucket_name}"
  
  default_ttl = 86400      # 1 day
  max_ttl     = 31536000   # 1 year
  
  forwarded_values {
    query_string = false
    cookies { forward = "none" }
  }
  
  viewer_protocol_policy = "redirect-to-https"
  compress               = true
}
```

#### Custom Error Pages

```hcl
custom_error_response {
  error_code         = 404
  response_code      = 200
  response_page_path = "/404.html"
}

custom_error_response {
  error_code         = 403
  response_code      = 200
  response_page_path = "/index.html"
}
```

---

## 📊 Monitoring & Maintenance

### CloudWatch Dashboards

View metrics in AWS Console:
- **CloudFront**: Requests, bytes transferred, error rates
- **S3**: Bucket size, object count, request metrics
- **Route 53**: Query count, health check status

### Important Metrics

```bash
# CloudFront request count
aws cloudwatch get-metric-statistics \
  --namespace AWS/CloudFront \
  --metric-name Requests \
  --dimensions Name=DistributionId,Value=YOUR_DIST_ID \
  --start-time 2024-01-01T00:00:00Z \
  --end-time 2024-01-02T00:00:00Z \
  --period 3600 \
  --statistics Sum

# S3 bucket size
aws s3 ls s3://your-bucket-name --recursive --summarize
```

### Cache Invalidation

After updating content:

```bash
# Invalidate all files
aws cloudfront create-invalidation \
  --distribution-id YOUR_DIST_ID \
  --paths "/*"

# Invalidate specific files
aws cloudfront create-invalidation \
  --distribution-id YOUR_DIST_ID \
  --paths "/index.html" "/style.css" "/app.js"

# Check invalidation status
aws cloudfront get-invalidation \
  --distribution-id YOUR_DIST_ID \
  --id INVALIDATION_ID
```

### Backup Strategy

```bash
# Backup S3 bucket
aws s3 sync s3://source-bucket s3://backup-bucket

# Backup Terraform state
aws s3 cp s3://terraform-state-bucket/terraform.tfstate \
          s3://backup-bucket/terraform.tfstate.$(date +%Y%m%d)

# Restore from backup
aws s3 sync s3://backup-bucket s3://source-bucket
```

### Terraform State Management

```bash
# View current state
terraform show

# List resources
terraform state list

# View specific resource
terraform state show aws_s3_bucket.website

# Import existing resource
terraform import aws_s3_bucket.website bucket-name

# Remove resource from state (doesn't delete)
terraform state rm aws_s3_bucket.website
```

### Health Checks

```bash
# Check website availability
curl -I https://your-domain.com

# Check S3 bucket
aws s3 ls s3://your-bucket-name/

# Check CloudFront distribution
aws cloudfront get-distribution --id YOUR_DIST_ID

# DNS resolution test
nslookup your-domain.com
dig your-domain.com
```

---

## 💰 Cost Analysis

### Monthly Cost Breakdown (Estimated)

#### Low Traffic (10K visitors/month)
| Service | Usage | Monthly Cost |
|---------|-------|--------------|
| S3 Storage | 1 GB | $0.023 |
| S3 Requests | 10K GET | $0.004 |
| CloudFront | 5 GB transfer | $0.425 |
| Route 53 | 1 hosted zone | $0.50 |
| Route 53 | 100K queries | $0.40 |
| ACM Certificate | Free | $0.00 |
| **Total** | | **~$1.35** |

#### Medium Traffic (100K visitors/month)
| Service | Usage | Monthly Cost |
|---------|-------|--------------|
| S3 Storage | 5 GB | $0.115 |
| S3 Requests | 100K GET | $0.04 |
| CloudFront | 50 GB transfer | $4.25 |
| Route 53 | 1 hosted zone | $0.50 |
| Route 53 | 1M queries | $0.40 |
| ACM Certificate | Free | $0.00 |
| **Total** | | **~$5.30** |

#### High Traffic (1M visitors/month)
| Service | Usage | Monthly Cost |
|---------|-------|--------------|
| S3 Storage | 10 GB | $0.23 |
| S3 Requests | 1M GET | $0.40 |
| CloudFront | 500 GB transfer | $42.50 |
| Route 53 | 1 hosted zone | $0.50 |
| Route 53 | 10M queries | $4.00 |
| ACM Certificate | Free | $0.00 |
| **Total** | | **~$47.63** |

### Cost Optimization Tips

1. **Enable CloudFront Caching** - Reduce S3 requests by 90%
2. **Use S3 Lifecycle Policies** - Delete old file versions
3. **Compress Assets** - Reduce CloudFront data transfer costs
4. **Choose Right Price Class** - PriceClass_100 for US/EU only
5. **Monitor Usage** - Set up billing alerts in CloudWatch

### Set Billing Alerts

```bash
# Create SNS topic for alerts
aws sns create-topic --name billing-alerts

# Subscribe to topic
aws sns subscribe \
  --topic-arn arn:aws:sns:us-east-1:123456789012:billing-alerts \
  --protocol email \
  --notification-endpoint your-email@example.com

# Create billing alarm
aws cloudwatch put-metric-alarm \
  --alarm-name "Billing Alert - $50" \
  --alarm-description "Alert when charges exceed $50" \
  --metric-name EstimatedCharges \
  --namespace AWS/Billing \
  --statistic Maximum \
  --period 21600 \
  --evaluation-periods 1 \
  --threshold 50 \
  --comparison-operator GreaterThanThreshold \
  --alarm-actions arn:aws:sns:us-east-1:123456789012:billing-alerts
```

---

## 🔐 Security

### Security Checklist

- [x] **HTTPS Enforced** - All traffic uses SSL/TLS
- [x] **S3 Bucket Private** - No public access
- [x] **Encryption at Rest** - AES-256 encryption
- [x] **Origin Access Control** - CloudFront-only S3 access
- [x] **IAM Least Privilege** - Minimal required permissions
- [x] **MFA Enabled** - Multi-factor authentication on root
- [x] **CloudTrail Logging** - API call auditing
- [x] **Versioning Enabled** - File version history
- [x] **DDoS Protection** - AWS Shield Standard

### Enable Additional Security

#### 1. AWS CloudTrail (Audit Logging)

```bash
# Create CloudTrail trail
aws cloudtrail create-trail \
  --name ecommerce-trail \
  --s3-bucket-name cloudtrail-logs-bucket

# Start logging
aws cloudtrail start-logging --name ecommerce-trail
```

#### 2. AWS Config (Compliance)

```bash
# Enable AWS Config
aws configservice put-configuration-recorder \
  --configuration-recorder name=default,roleARN=arn:aws:iam::123456789012:role/config-role \
  --recording-group allSupported=true,includeGlobalResourceTypes=true
```

#### 3. S3 Access Logging

Add to `terraform/modules/s3-static-website/main.tf`:

```hcl
resource "aws_s3_bucket_logging" "website" {
  bucket = aws_s3_bucket.website.id
  
  target_bucket = aws_s3_bucket.logs.id
  target_prefix = "s3-access-logs/"
}
```

#### 4. Web Application Firewall (WAF)

```hcl
resource "aws_wafv2_web_acl" "cloudfront" {
  name  = "cloudfront-waf"
  scope = "CLOUDFRONT"
  
  default_action {
    allow {}
  }
  
  rule {
    name     = "RateLimitRule"
    priority = 1
    
    statement {
      rate_based_statement {
        limit              = 2000
        aggregate_key_type = "IP"
      }
    }
    
    action {
      block {}
    }
    
    visibility_config {
      cloudwatch_metrics_enabled = true
      metric_name                = "RateLimitRule"
      sampled_requests_enabled   = true
    }
  }
  
  visibility_config {
    cloudwatch_metrics_enabled = true
    metric_name                = "CloudFrontWAF"
    sampled_requests_enabled   = true
  }
}
```

### Security Best Practices

1. **Rotate AWS Access Keys** every 90 days
2. **Use IAM Roles** instead of access keys where possible
3. **Enable MFA Delete** on S3 bucket
4. **Regular Security Audits** using AWS Trusted Advisor
5. **Patch Management** - Keep infrastructure code updated
6. **Incident Response Plan** - Document procedures
7. **Regular Backups** - Automated backup schedule
8. **Principle of Least Privilege** - Minimal permissions

---

## 🔧 Troubleshooting

### Common Issues & Solutions

#### 1. Certificate Validation Stuck

**Problem**: ACM certificate stuck in "Pending Validation"

**Solution**:
```bash
# Check DNS records
aws route53 list-resource-record-sets \
  --hosted-zone-id YOUR_ZONE_ID

# Verify CNAME records created
# Wait 5-30 minutes for DNS propagation
```

#### 2. CloudFront Returns 403 Forbidden

**Problem**: CloudFront distribution shows "Access Denied"

**Solution**:
```bash
# Check S3 bucket policy
aws s3api get-bucket-policy --bucket your-bucket-name

# Verify OAC is attached to CloudFront
aws cloudfront get-distribution-config --id YOUR_DIST_ID

# Ensure files exist in S3
aws s3 ls s3://your-bucket-name/
```

#### 3. Website Not Loading After Deployment

**Problem**: Changes not visible on website

**Solution**:
```bash
# Invalidate CloudFront cache
aws cloudfront create-invalidation \
  --distribution-id YOUR_DIST_ID \
  --paths "/*"

# Check if files uploaded correctly
aws s3 ls s3://your-bucket-name/ --recursive

# Test S3 website endpoint directly
curl http://your-bucket-name.s3-website-us-east-1.amazonaws.com
```

#### 4. DNS Not Resolving

**Problem**: Domain doesn't resolve to website

**Solution**:
```bash
# Check nameservers at registrar
nslookup -type=NS your-domain.com

# Compare with Route 53 nameservers
aws route53 get-hosted-zone --id YOUR_ZONE_ID

# Test DNS propagation
dig your-domain.com @8.8.8.8
```

#### 5. Terraform State Lock

**Problem**: "Error locking state: Error acquiring the state lock"

**Solution**:
```bash
# Force unlock (use carefully!)
terraform force-unlock LOCK_ID

# Or delete lock manually from DynamoDB if using DynamoDB state locking
```

#### 6. S3 Bucket Already Exists Error

**Problem**: "BucketAlreadyExists" error during terraform apply

**Solution**:
```bash
# S3 bucket names are globally unique
# Change bucket_name in terraform.tfvars to something unique

# Example:
bucket_name = "your-company-ecommerce-prod-12345"
```

### Debug Commands

```bash
# Terraform debug mode
TF_LOG=DEBUG terraform apply

# AWS CLI debug
aws s3 ls --debug

# Test website connectivity
curl -v https://your-domain.com

# Check SSL certificate
openssl s_client -connect your-domain.com:443 -servername your-domain.com

# CloudFront cache headers
curl -I https://your-domain.com
```

### Getting Help

1. **AWS Support** - Create support case in AWS Console
2. **Terraform GitHub Issues** - [terraform-aws-provider issues](https://github.com/hashicorp/terraform-provider-aws/issues)
3. **Stack Overflow** - Tag questions with `aws`, `terraform`, `cloudfront`
4. **AWS Forums** - [AWS Discussion Forums](https://forums.aws.amazon.com/)

---

## 🔄 CI/CD Integration

### GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to AWS

on:
  push:
    branches: [main]
  workflow_dispatch:

env:
  AWS_REGION: us-east-1
  S3_BUCKET: ${{ secrets.S3_BUCKET }}
  CLOUDFRONT_DISTRIBUTION_ID: ${{ secrets.CLOUDFRONT_DISTRIBUTION_ID }}

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout code
        uses: actions/checkout@v3
      
      - name: Configure AWS credentials
        uses: aws-actions/configure-aws-credentials@v2
        with:
          aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
          aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          aws-region: ${{ env.AWS_REGION }}
      
      - name: Setup Terraform
        uses: hashicorp/setup-terraform@v2
        with:
          terraform_version: 1.6.0
      
      - name: Terraform Init
        working-directory: ./terraform
        run: terraform init
      
      - name: Terraform Plan
        working-directory: ./terraform
        run: terraform plan -out=tfplan
      
      - name: Terraform Apply
        working-directory: ./terraform
        run: terraform apply -auto-approve tfplan
      
      - name: Deploy Website to S3
        run: |
          aws s3 sync website/ s3://${{ env.S3_BUCKET }}/ \
            --delete \
            --cache-control "max-age=31536000" \
            --exclude "*.html"
          
          # HTML files with no-cache
          aws s3 cp website/index.html s3://${{ env.S3_BUCKET }}/index.html \
            --cache-control "no-cache"
      
      - name: Invalidate CloudFront Cache
        run: |
          aws cloudfront create-invalidation \
            --distribution-id ${{ env.CLOUDFRONT_DISTRIBUTION_ID }} \
            --paths "/*"
      
      - name: Notify Success
        if: success()
        run: echo "✅ Deployment successful!"
      
      - name: Notify Failure
        if: failure()
        run: echo "❌ Deployment failed!"
```

**Required GitHub Secrets:**
- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `S3_BUCKET`
- `CLOUDFRONT_DISTRIBUTION_ID`

### GitLab CI

Create `.gitlab-ci.yml`:

```yaml
image: hashicorp/terraform:1.6

stages:
  - validate
  - plan
  - deploy

variables:
  AWS_DEFAULT_REGION: us-east-1
  TF_ROOT: ${CI_PROJECT_DIR}/terraform

before_script:
  - apk add --no-cache python3 py3-pip
  - pip3 install awscli
  - export AWS_ACCESS_KEY_ID=${AWS_ACCESS_KEY_ID}
  - export AWS_SECRET_ACCESS_KEY=${AWS_SECRET_ACCESS_KEY}

validate:
  stage: validate
  script:
    - cd ${TF_ROOT}
    - terraform init -backend=false
    - terraform validate
    - terraform fmt -check

plan:
  stage: plan
  script:
    - cd ${TF_ROOT}
    - terraform init
    - terraform plan -out=tfplan
  artifacts:
    paths:
      - ${TF_ROOT}/tfplan

deploy:
  stage: deploy
  script:
    - cd ${TF_ROOT}
    - terraform init
    - terraform apply -auto-approve tfplan
    
    # Deploy website
    - cd ${CI_PROJECT_DIR}
    - aws s3 sync website/ s3://${S3_BUCKET}/ --delete
    
    # Invalidate cache
    - aws cloudfront create-invalidation --distribution-id ${CLOUDFRONT_DISTRIBUTION_ID} --paths "/*"
  only:
    - main
  when: manual
```

### Jenkins Pipeline

Create `Jenkinsfile`:

```groovy
pipeline {
    agent any
    
    environment {
        AWS_REGION = 'us-east-1'
        S3_BUCKET = credentials('s3-bucket-name')
        CLOUDFRONT_DIST_ID = credentials('cloudfront-distribution-id')
    }
    
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('Terraform Init') {
            steps {
                dir('terraform') {
                    sh 'terraform init'
                }
            }
        }
        
        stage('Terraform Plan') {
            steps {
                dir('terraform') {
                    sh 'terraform plan -out=tfplan'
                }
            }
        }
        
        stage('Terraform Apply') {
            when {
                branch 'main'
            }
            steps {
                dir('terraform') {
                    sh 'terraform apply -auto-approve tfplan'
                }
            }
        }
        
        stage('Deploy Website') {
            steps {
                withAWS(credentials: 'aws-credentials', region: env.AWS_REGION) {
                    sh """
                        aws s3 sync website/ s3://${S3_BUCKET}/ --delete
                        aws cloudfront create-invalidation \
                            --distribution-id ${CLOUDFRONT_DIST_ID} \
                            --paths "/*"
                    """
                }
            }
        }
    }
    
    post {
        success {
            echo '✅ Deployment successful!'
        }
        failure {
            echo '❌ Deployment failed!'
        }
    }
}
```

### CircleCI

Create `.circleci/config.yml`:

```yaml
version: 2.1

orbs:
  aws-cli: circleci/aws-cli@3.1
  terraform: circleci/terraform@3.2

jobs:
  deploy:
    docker:
      - image: cimg/base:stable
    
    steps:
      - checkout
      
      - aws-cli/setup:
          aws-access-key-id: AWS_ACCESS_KEY_ID
          aws-secret-access-key: AWS_SECRET_ACCESS_KEY
          aws-region: AWS_REGION
      
      - terraform/install:
          terraform_version: 1.6.0
      
      - terraform/init:
          path: ./terraform
      
      - terraform/plan:
          path: ./terraform
      
      - terraform/apply:
          path: ./terraform
      
      - run:
          name: Deploy to S3
          command: |
            aws s3 sync website/ s3://$S3_BUCKET/ --delete
      
      - run:
          name: Invalidate CloudFront
          command: |
            aws cloudfront create-invalidation \
              --distribution-id $CLOUDFRONT_DISTRIBUTION_ID \
              --paths "/*"

workflows:
  deploy-workflow:
    jobs:
      - deploy:
          filters:
            branches:
              only: main
```

### Bitbucket Pipelines

Create `bitbucket-pipelines.yml`:

```yaml
image: hashicorp/terraform:1.6

pipelines:
  default:
    - step:
        name: Validate
        script:
          - cd terraform
          - terraform init -backend=false
          - terraform validate
  
  branches:
    main:
      - step:
          name: Deploy Infrastructure
          deployment: production
          script:
            - apk add --no-cache aws-cli
            - cd terraform
            - terraform init
            - terraform plan -out=tfplan
            - terraform apply -auto-approve tfplan
      
      - step:
          name: Deploy Website
          script:
            - apk add --no-cache aws-cli
            - aws s3 sync website/ s3://$S3_BUCKET/ --delete
            - |
              aws cloudfront create-invalidation \
                --distribution-id $CLOUDFRONT_DISTRIBUTION_ID \
                --paths "/*"
```

---

## 🤝 Contributing

We welcome contributions! Please follow these guidelines:

### How to Contribute

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Test thoroughly**
5. **Commit with clear messages**
   ```bash
   git commit -m "Add amazing feature"
   ```
6. **Push to your fork**
   ```bash
   git push origin feature/amazing-feature
   ```
7. **Open a Pull Request**

### Contribution Guidelines

- Follow existing code style and conventions
- Add tests for new features
- Update documentation as needed
- Ensure all tests pass before submitting PR
- Write clear, descriptive commit messages
- Reference issues in PR descriptions

### Code Style

**Terraform:**
```bash
# Format code
terraform fmt -recursive

# Validate syntax
terraform validate
```

**JavaScript:**
```javascript
// Use ES6+ features
// Clear variable names
// Add comments for complex logic
```

**Shell Scripts:**
```bash
#!/bin/bash
# Use set -e for error handling
# Add descriptive comments
# Follow ShellCheck recommendations
```

### Testing

Before submitting:

```bash
# Test Terraform
cd terraform
terraform init
terraform validate
terraform plan

# Test website locally
cd website
python3 -m http.server 8000

# Test deploy script
./deploy.sh --dry-run
```

### Reporting Issues

When reporting bugs, include:

- **Description** - Clear description of the issue
- **Steps to Reproduce** - Detailed steps
- **Expected Behavior** - What should happen
- **Actual Behavior** - What actually happened
- **Environment** - OS, tool versions, AWS region
- **Screenshots** - If applicable
- **Logs** - Relevant error messages

### Feature Requests

Use the following template:

```markdown
## Feature Request

**Is your feature request related to a problem?**
A clear description of the problem.

**Describe the solution you'd like**
A clear description of what you want to happen.

**Describe alternatives you've considered**
Alternative solutions or features you've considered.

**Additional context**
Any other context or screenshots about the feature request.
```

---

## 📄 License

This project is licensed under the **MIT License** - see below for details:

```
MIT License

Copyright (c) 2025 [Your Name/Organization]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 🎓 Learning Resources

### AWS Documentation
- [S3 Static Website Hosting](https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html)
- [CloudFront Developer Guide](https://docs.aws.amazon.com/cloudfront/)
- [Route 53 Documentation](https://docs.aws.amazon.com/route53/)
- [ACM User Guide](https://docs.aws.amazon.com/acm/)

### Terraform Resources
- [Terraform AWS Provider](https://registry.terraform.io/providers/hashicorp/aws/latest/docs)
- [Terraform Best Practices](https://www.terraform-best-practices.com/)
- [Learn Terraform](https://learn.hashicorp.com/terraform)

### DevOps & CI/CD
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Docker Documentation](https://docs.docker.com/)
- [AWS Well-Architected Framework](https://aws.amazon.com/architecture/well-architected/)

### Web Development
- [MDN Web Docs](https://developer.mozilla.org/)
- [Can I Use](https://caniuse.com/) - Browser compatibility
- [Web.dev](https://web.dev/) - Best practices

---

## 📞 Support & Community

### Get Help

- **GitHub Issues** - [Open an issue](https://github.com/yourusername/repo/issues)
- **Discussions** - [Join discussions](https://github.com/yourusername/repo/discussions)
- **Email** - support@example.com
- **Stack Overflow** - Tag: `aws-static-website`

### Community

- **Discord** - [Join our server](https://discord.gg/example)
- **Slack** - [Join workspace](https://example.slack.com)
- **Twitter** - [@YourHandle](https://twitter.com/yourhandle)

---

## 🗺️ Roadmap

### Current Version: v1.0.0

### Upcoming Features

#### v1.1.0 (Q1 2025)
- [ ] Multi-region deployment support
- [ ] AWS WAF integration
- [ ] Enhanced monitoring dashboard
- [ ] Cost optimization recommendations

#### v1.2.0 (Q2 2025)
- [ ] Lambda@Edge for dynamic content
- [ ] API Gateway integration
- [ ] DynamoDB for dynamic data
- [ ] User authentication (Cognito)

#### v2.0.0 (Q3 2025)
- [ ] Complete serverless backend
- [ ] Real-time inventory management
- [ ] Payment processing integration
- [ ] Advanced analytics

### Completed Features
- [x] S3 static website hosting
- [x] CloudFront CDN integration
- [x] Route 53 DNS management
- [x] SSL/TLS certificates
- [x] Terraform automation
- [x] Docker containerization
- [x] CI/CD pipeline examples

---

## 🌟 Acknowledgments

### Built With

- **AWS** - Cloud infrastructure provider
- **Terraform** - Infrastructure as Code tool
- **Docker** - Containerization platform
- **GitHub Actions** - CI/CD automation

### Special Thanks

- AWS for excellent cloud services
- HashiCorp for Terraform
- The open-source community
- All contributors to this project

### Inspired By

- [AWS Static Website Hosting Guide](https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html)
- [Terraform Best Practices](https://www.terraform-best-practices.com/)
- [12 Factor App Methodology](https://12factor.net/)

---

## 📊 Project Stats

![GitHub stars](https://img.shields.io/github/stars/yourusername/repo?style=social)
![GitHub forks](https://img.shields.io/github/forks/yourusername/repo?style=social)
![GitHub issues](https://img.shields.io/github/issues/yourusername/repo)
![GitHub pull requests](https://img.shields.io/github/issues-pr/yourusername/repo)
![License](https://img.shields.io/github/license/yourusername/repo)

---

## 🎯 Quick Reference

### Essential Commands

```bash
# Infrastructure
terraform init              # Initialize Terraform
terraform plan             # Preview changes
terraform apply            # Deploy infrastructure
terraform destroy          # Destroy all resources

# Deployment
./deploy.sh                # Deploy website
aws s3 sync website/ s3://bucket/  # Upload files
aws cloudfront create-invalidation  # Clear cache

# Monitoring
aws s3 ls s3://bucket/                    # List files
aws cloudfront list-distributions         # List distributions
terraform output                          # View outputs
aws cloudwatch get-metric-statistics      # View metrics

# Troubleshooting
terraform state list                      # List resources
aws logs tail /aws/lambda/function        # View logs
curl -I https://domain.com                # Test website
```

### Important URLs

- **AWS Console**: https://e-commerce-site-441ce407d1938ff7.s3-website-sa-east-1.amazonaws.com
- **Terraform Registry**: https://github.com/abhijitray7810/AWS-Powered-Static-E-Commerce-Deployment-Terraform-Docker
- **GitHub Repo**: https://github.com/abhijitray7810/AWS-Powered-Static-E-Commerce-Deployment-Terraform-Docker
- **Documentation**: https://github.com/abhijitray7810/AWS-Powered-Static-E-Commerce-Deployment-Terraform-Docker

---

## 💡 Tips & Tricks

### Performance Optimization

1. **Enable Compression**
   ```hcl
   compress = true  # In CloudFront settings
   ```

2. **Optimize Images**
   ```bash
   # Use ImageOptim, TinyPNG, or similar
   # Convert to WebP format for better compression
   ```

3. **Minify Assets**
   ```bash
   # Minify CSS/JS before deployment
   npm install -g clean-css-cli uglify-js
   cleancss style.css -o style.min.css
   uglifyjs app.js -o app.min.js
   ```

4. **Set Cache Headers**
   ```bash
   aws s3 cp file.jpg s3://bucket/ \
     --cache-control "max-age=31536000, public"
   ```

### Cost Savings

1. **Use S3 Intelligent-Tiering**
2. **Set appropriate CloudFront TTL values**
3. **Enable CloudFront compression**
4. **Delete old versions with lifecycle policies**
5. **Use Reserved Capacity if traffic is predictable**

### Security Hardening

1. **Enable MFA Delete**
   ```bash
   aws s3api put-bucket-versioning \
     --bucket bucket-name \
     --versioning-configuration Status=Enabled,MFADelete=Enabled \
     --mfa "device-serial-number mfa-code"
   ```

2. **Restrict IAM Permissions**
3. **Enable CloudTrail**
4. **Use AWS Secrets Manager for credentials**
5. **Regular security audits**

---

## 📝 Changelog

### [1.0.0] - 2025-01-15

#### Added
- Initial release
- S3 static website hosting
- CloudFront CDN integration
- Route 53 DNS management
- ACM SSL certificates
- Terraform infrastructure modules
- Docker deployment support
- CI/CD pipeline examples
- Comprehensive documentation

#### Security
- Implemented Origin Access Control
- Enabled S3 encryption at rest
- HTTPS-only enforcement
- Private bucket configuration

---

## ✅ Final Checklist

Before going to production:

- [ ] Domain registered and DNS configured
- [ ] AWS account secured with MFA
- [ ] Terraform state backend configured
- [ ] All sensitive data in environment variables
- [ ] CloudWatch alarms configured
- [ ] Backup strategy implemented
- [ ] Cost alerts enabled
- [ ] Documentation reviewed
- [ ] CI/CD pipeline tested
- [ ] Security audit completed
- [ ] Performance tested
- [ ] Monitoring dashboard setup

---

## 🚀 Get Started Now!

```bash
# Clone and deploy in 5 minutes
git clone https://github.com/yourusername/static-ecommerce-aws.git
cd static-ecommerce-aws
cd terraform
terraform init
terraform apply
```

---

<div align="center">

**⭐ Star this repo if you find it helpful!**

**Made with ❤️ by [Your Name]**

**[Website](https://e-commerce-site-441ce407d1938ff7.s3-website-sa-east-1.amazonaws.com)** • 
**[Documentation](https://github.com/abhijitray7810/AWS-Powered-Static-E-Commerce-Deployment-Terraform-Docker)** • 
**[Report Bug](https://github.com/abhijitray7810/AWS-Powered-Static-E-Commerce-Deployment-Terraform-Docker)** • 
**[Request Feature](https://github.com/abhijitray7810/AWS-Powered-Static-E-Commerce-Deployment-Terraform-Docker)**

---

*Last Updated: January 2025*

</div>
