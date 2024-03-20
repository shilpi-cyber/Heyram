import React from 'react'
import { useEffect } from 'react';
import './Interns.css'
import wbI from '../../Assets/cs1.jpg'
import RR from '../../Assets/cs2.jpg'
import EC from '../../Assets/cs3.jpg'

function CS() {
    useEffect(() => {
        document.title = "Cloud Services internship program"
        window.scrollTo(0, 0)
    }, [])
    return <>
        <div className='container-fluid'>
            <div className='row intership-card'>
                <div className='col-md-12 ai-banner d-flex justify-content-center'>
                </div>
            </div>
            <div className='row pt-2 pb-2'>
                <div className='col-md-12 '>
                    <div className='h1 pt-5 text-center pb-5'>
                    Cloud Services
                    </div>
                </div>
            </div>
            <div className='row pt-2 pb-2'>
                <div className='col-md-8'>
                    <div className='h2 pt-3 pb-3'>
                        Modules
                    </div>
                    <div className='cs-contents ps-2 pb-4 pe-2'>
                    <b>1.AWS Fundamentals: </b>Covers the basics of AWS cloud computing, including services such as EC2, S3, RDS, Lambda, and IAM, as well as fundamental concepts like regions, availability zones, and security.<br /> <br />
	<b>2.Compute Services: </b>Deep dive into AWS compute services such as EC2 (Elastic Compute Cloud), ECS (Elastic Container Service), Lambda, and Elastic Beanstalk for deploying and managing applications.<br /> <br />
	<b>3.Storage Services: </b>Explores AWS storage services like S3 (Simple Storage Service), EBS (Elastic Block Store), Glacier, and Storage Gateway for scalable and durable storage solutions.<br /> <br />
<b>4.Networking Services: </b>Covers AWS networking services like VPC (Virtual Private Cloud), Route 53 (DNS service), CloudFront (Content Delivery Network), and Direct Connect for secure and scalable network infrastructure.<br /> <br />
<b>5.Database Services: </b>Introduces AWS database services such as RDS (Relational Database Service), DynamoDB (NoSQL database), Aurora, and Redshift for managing and scaling databases in the cloud.<br /> <br />
<b>6.Security and Identity Services: </b>Focuses on AWS security services like IAM (Identity and Access Management), KMS (Key Management Service), Security Hub, and Inspector for securing AWS resources and data.<br /> <br />
<b>7.Monitoring and Management Services:</b> Explores AWS monitoring and management services like CloudWatch, CloudTrail, AWS Config, and Systems Manager for monitoring, logging, and managing AWS resources.<br /> <br />
                    </div>
                </div>
                <div className='col-md-4'>
                    <img src={wbI} className='w-100' alt="cs-developer" />
                </div>
            </div>
            <div className='row pt-2 pb-2'>
                <div className='col-md-4'>
                    <img src={RR} className='w-100' alt="cs-developer" />
                </div>
                <div className='col-md-8'>
                    <div className='h2 pt-3 pb-3'>
                        Roles and Responsibilities
                    </div>
                    <div className='cs-contents ps-2 pb-4 pe-2'>
                    <b>1.Cloud Engineer Intern: </b>Assist in designing, deploying, and managing AWS infrastructure and services, including provisioning resources, configuring security, and optimizing performance.<br /> <br />
<b>2.DevOps Engineer Intern: </b>Contribute to building and automating CI/CD pipelines, infrastructure as code (IaC) using tools like AWS CloudFormation, and implementing monitoring and alerting solutions.<br /> <br />
<b>3.Cloud Solutions Architect </b>Intern: Collaborate with teams to design and architect scalable, reliable, and cost-effective solutions using AWS services, and assist in creating architecture diagrams and documentation.<br /> <br />
<b>4.Security Engineer Intern: </b>Assist in implementing security best practices, conducting security assessments and audits, and configuring security controls for AWS resources and applications.<br /> <br />
<b>5.Data Engineer Intern:</b> Work on designing and implementing data pipelines, data lakes, and analytics solutions using AWS data services like S3, Glue, Athena, and Redshift.<br /> <br />
<b>6.Machine Learning Engineer</b> Intern: Collaborate with data scientists and engineers to build and deploy machine learning models using AWS services like SageMaker, Comprehend, and Rekognition.<br /> <br />
<b>7.Technical Support Intern: </b>Provide technical support to users and clients, troubleshoot issues, and assist in documentation and knowledge sharing related to AWS services and solutions.<br /> <br />

                    </div>
                </div>
            </div>
            <div className='row pt-2 pb-2'>
                <div className='col-md-8'>
                    <div className='h2 pt-3 pb-3'>
                        Eligibility Criteria
                    </div>
                    <div className='cs-contents ps-2 pb-4 pe-2'>
                    <b>1.Educational Background:</b>Typically, interns pursuing AWS cloud services roles have a background in computer science, information technology, engineering, or a related field.<br /> <br />
                                    <b>2.Must Complete:</b> You have must completed HSC.<br /> <br />
                    </div>
                    <div className='text-center'>
                        <a className='apply-link' target='_blank' style={{ textDecoration: "none", fontSize: "2rem",fontWeight:"500" }} href="https://forms.gle/TqrjJLCvM5uzCTmc7">Apply</a>
                    </div>
                </div>
                <div className='col-md-4'>
                    <img src={EC} style={{borderRadius:"10px"}} className='w-100' alt="cs-developer" />
                </div>
            </div>
        </div>
    </>
}

export default CS