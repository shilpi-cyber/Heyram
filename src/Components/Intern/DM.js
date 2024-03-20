import React from 'react'
import { useEffect } from 'react';
import './Interns.css'
import wbI from '../../Assets/dm1.png'
import RR from '../../Assets/dm2.jpg'
import EC from '../../Assets/dm3.jpg'

function DM() {
    useEffect(() => {
        document.title = "Digital Marketing internship program"
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
                    Digital Marketing
                    </div>
                </div>
            </div>
            <div className='row pt-2 pb-2'>
                <div className='col-md-8'>
                    <div className='h2 pt-3 pb-3'>
                        Modules
                    </div>
                    <div className='dm-contents ps-2 pb-4 pe-2'>
                    <b>1.Digital Marketing Fundamentals: </b> Covers the basics of digital marketing channels, strategies, and techniques, including SEO, SEM, email marketing, content marketing, and social media marketing. <br /> <br />
                                    <b>2.Search Engine Optimization (SEO): </b> Teaches techniques for optimizing website content and structure to improve search engine rankings and drive organic traffic.<br /> <br />
                                    <b>3.Search Engine Marketing (SEM) and Pay-Per-Click (PPC) Advertising:</b>Focuses on creating and managing paid advertising campaigns on search engines like Google and Bing, including keyword research, ad creation, and bid management.<br /> <br />
                                    <b>4.Social Media Marketing:</b>Explores strategies for building and engaging audiences on popular social media platforms such as Facebook, Instagram, Twitter, LinkedIn, and TikTok.<br /> <br />
                                    <b>5.Content Marketing: </b>Covers content creation, distribution, and promotion strategies to attract and retain customers through valuable and relevant content.<br /> <br />
                                    <b>6.Email Marketing: </b> Teaches best practices for designing, executing, and analyzing email campaigns to nurture leads and drive conversions.<br /> <br />
                                    <b>7.Web Analytics:</b> Introduces tools like Google Analytics for tracking website traffic, user behavior, and campaign performance, and using data to optimize marketing strategies.<br /> <br />
                    </div>
                </div>
                <div className='col-md-4'>
                    <img src={wbI} className='w-100' alt="dm-developer" />
                </div>
            </div>
            <div className='row pt-2 pb-2'>
                <div className='col-md-4'>
                    <img src={RR} className='w-100' alt="dm-developer" />
                </div>
                <div className='col-md-8'>
                    <div className='h2 pt-3 pb-3'>
                        Roles and Responsibilities
                    </div>
                    <div className='dm-contents ps-2 pb-4 pe-2'>
                    <b>1.Digital Marketing Coordinator:</b>Assist in planning, executing, and analyzing digital marketing campaigns across various channels, including social media, email, and paid advertising.<br /> <br />
                                    <b>2.Content Creator:</b>Develop engaging and relevant content for blogs, social media posts, emails, and other digital marketing assets.<br /> <br />
                                    <b>3.SEO Specialist: </b>Optimize website content, structure, and metadata to improve organic search visibility and drive targeted traffic.<br /> <br />
                                    <b>4.Social Media Manager: </b>Manage and grow social media accounts, create and schedule content, engage with followers, and analyze performance metrics.<br /> <br />
                                    <b>5.Email Marketing Specialist: </b>Design, execute, and analyze email campaigns to nurture leads, retain customers, and drive conversions.<br /> <br />
                                    <b>6.PPC Campaign Manager: </b>Create and manage paid advertising campaigns on platforms like Google Ads and Facebook Ads, including keyword research, ad creation, and performance tracking.<br /> <br />
                                    <b>7.Digital Marketing Analyst: </b><b>6.AI Ethics Intern: </b>Create and manage paid advertising campaigns on platforms like Google Ads and Facebook Ads, including keyword research, ad creation, and performance tracking.<br /> <br /><br /> <br />


                    </div>
                </div>
            </div>
            <div className='row pt-2 pb-2'>
                <div className='col-md-8'>
                    <div className='h2 pt-3 pb-3'>
                        Eligibility Criteria
                    </div>
                    <div className='dm-contents ps-2 pb-4 pe-2'>
                    <b>1.Educational Background:</b>Typically, interns pursuing digital marketing roles have a background in marketing, communications, business, or a related field.<br /> <br />
                                    <b>2.Must Complete:</b> You have must completed HSC.<br /> <br />
                    </div>
                    <div className='text-center'>
                        <a className='apply-link' target='_blank' style={{ textDecoration: "none", fontSize: "2rem",fontWeight:"500" }} href="https://forms.gle/TqrjJLCvM5uzCTmc7">Apply</a>
                    </div>
                </div>
                <div className='col-md-4'>
                    <img src={EC} style={{borderRadius:"10px"}} className='w-100' alt="dm-developer" />
                </div>
            </div>
        </div>
    </>
}

export default DM