## Overview

  This project is a personal website hosted on AWS, utilizing a serverless architecture with a continuous integration and deployment (CI/CD) pipeline.  
  Key services include S3 for static website hosting, CloudFront for content delivery, DynamoDB for tracking views, and AWS Lambda for serverless functions.  
  GitHub Actions handle the CI/CD process to ensure seamless deployment.  

## Architecture  
![Architecture](/architecture.png)
  S3: Stores the static website files (HTML, CSS, JS).  
  CloudFront: Distributes the content globally, ensuring low-latency access.  
  Lambda: Runs a function that increments a view count whenever the website is accessed.  
  DynamoDB: Stores the view count in a highly available and scalable NoSQL database.  
  GitHub Actions: Automates testing, building, and deployment processes via CI/CD.  
