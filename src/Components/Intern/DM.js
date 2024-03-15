import React from 'react'
import { useEffect } from 'react';
import Card from 'react-bootstrap/Card';


function DM() {
    useEffect (() => {
        document.title = "Digital Marketing internship program"
        window.scrollTo(0, 0)
    }, [])
    return <>
        <div className='container-fluid'>
            <div className='row intership-card'>
                <div className='col-md-12 d-flex justify-content-center p-5'>
                    <Card className='w-75 '>
                        <Card.Body>
                            <Card.Title>Digital Marketing</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Modules</Card.Subtitle>
                            <div className='d-flex justify-content-center'>
                                <Card.Text className='w-75'>
                                <b>1.Digital Marketing Fundamentals: </b> Covers the basics of digital marketing channels, strategies, and techniques, including SEO, SEM, email marketing, content marketing, and social media marketing. <br /> <br />
                                    <b>2.Search Engine Optimization (SEO): </b> Teaches techniques for optimizing website content and structure to improve search engine rankings and drive organic traffic.<br /> <br />
                                    <b>3.Search Engine Marketing (SEM) and Pay-Per-Click (PPC) Advertising:</b>Focuses on creating and managing paid advertising campaigns on search engines like Google and Bing, including keyword research, ad creation, and bid management.<br /> <br />
                                    <b>4.Social Media Marketing:</b>Explores strategies for building and engaging audiences on popular social media platforms such as Facebook, Instagram, Twitter, LinkedIn, and TikTok.<br /> <br />
                                    <b>5.Content Marketing: </b>Covers content creation, distribution, and promotion strategies to attract and retain customers through valuable and relevant content.<br /> <br />
                                    <b>6.Email Marketing: </b> Teaches best practices for designing, executing, and analyzing email campaigns to nurture leads and drive conversions.<br /> <br />
                                    <b>7.Web Analytics:</b> Introduces tools like Google Analytics for tracking website traffic, user behavior, and campaign performance, and using data to optimize marketing strategies.<br /> <br />
                                </Card.Text>
                            </div>

                            <Card.Subtitle className="mb-2 text-muted">Roles and Responsibilities</Card.Subtitle>
                            <div className='d-flex justify-content-center'>
                                <Card.Text className='w-75'>
                                    <b>1.Digital Marketing Coordinator:</b>Assist in planning, executing, and analyzing digital marketing campaigns across various channels, including social media, email, and paid advertising.<br /> <br />
                                    <b>2.Content Creator:</b>Develop engaging and relevant content for blogs, social media posts, emails, and other digital marketing assets.<br /> <br />
                                    <b>3.SEO Specialist: </b>Optimize website content, structure, and metadata to improve organic search visibility and drive targeted traffic.<br /> <br />
                                    <b>4.Social Media Manager: </b>Manage and grow social media accounts, create and schedule content, engage with followers, and analyze performance metrics.<br /> <br />
                                    <b>5.Email Marketing Specialist: </b>Design, execute, and analyze email campaigns to nurture leads, retain customers, and drive conversions.<br /> <br />
                                    <b>6.PPC Campaign Manager: </b>Create and manage paid advertising campaigns on platforms like Google Ads and Facebook Ads, including keyword research, ad creation, and performance tracking.<br /> <br />
                                    <b>7.Digital Marketing Analyst: </b><b>6.AI Ethics Intern: </b>Create and manage paid advertising campaigns on platforms like Google Ads and Facebook Ads, including keyword research, ad creation, and performance tracking.<br /> <br /><br /> <br />
                                </Card.Text>
                            </div>
                            <Card.Subtitle className="mb-2 text-muted">Eligibility Criteria:</Card.Subtitle>
                            <div className='d-flex justify-content-center'>
                                <Card.Text className='w-75'>
                                    <b>1.Educational Background:</b>Typically, interns pursuing digital marketing roles have a background in marketing, communications, business, or a related field.<br /> <br />
                                    <b>2.Must Complete:</b> You have must completed HSC.<br /> <br />
                                </Card.Text>
                            </div>
                            <Card.Link className='apply-link' target='_blank' style={{textDecoration:"none",fontSize:"1rem"}} href="https://forms.gle/TqrjJLCvM5uzCTmc7">Apply</Card.Link>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    </>
}

export default DM