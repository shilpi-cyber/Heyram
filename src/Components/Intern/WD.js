import React from 'react'
import { useEffect } from 'react';
import './Interns.css'
import wbI from '../../Assets/wd4.jpg'
import RR from '../../Assets/wd2.jpg'
import EC from '../../Assets/wd3.jpg'

function WD() {
    useEffect(() => {
        document.title = "Web development internship program"
        window.scrollTo(0, 0)
    }, [])
    return <>
        <div className='container-fluid'>
            <div className='row intership-card'>
                <div className='col-md-12 wd-banner d-flex justify-content-center'>
                </div>
            </div>
            <div className='row pt-2 pb-2'>
                <div className='col-md-12 '>
                    <div className='h1 pt-5 text-center pb-5'>
                    Web Developer
                    </div>
                </div>
            </div>
            <div className='row pt-2 pb-2'>
                <div className='col-md-8'>
                    <div className='h2 pt-3 pb-3'>
                        Modules
                    </div>
                    <div className='wd-contents ps-2 pb-4 pe-2'>
                    <b>1.HTML & CSS Fundamentals:</b> Covers the basics of HTML for structuring web pages and CSS for styling them, including layout techniques, responsive design, and CSS frameworks like Bootstrap or Foundation. <br /> <br />
                                    <b>2.JavaScript Programming:</b> Teaches fundamental JavaScript concepts such as variables, functions, DOM manipulation, event handling, and asynchronous programming, as well as modern ES6+ features.<br /> <br />
                                    <b>3.Frontend Frameworks: </b>Introduces frontend frameworks like React.js, Angular, or Vue.js for building dynamic and interactive web applications, including component-based architecture and state management.<br /> <br />
                                    <b>4.Backend Development:</b> Covers server-side programming languages and frameworks like Node.js, Express.js, Django, or Flask for building RESTful APIs and server-side logic.<br /> <br />
                                    <b>5.Database Management:</b> Introduces database concepts and SQL for querying and manipulating data, as well as NoSQL databases like MongoDB or Firebase for storing and retrieving structured data.<br /> <br />
                                    <b>6.Version Control with Git:</b>  Teaches version control concepts and practices using Git and GitHub for managing code repositories, collaborating with teams, and tracking changes.<br /> <br />
                                    <b>7.Web Development Tools: Explores</b> development tools and workflows, including text editors/IDEs, package managers like npm or yarn, build tools like Webpack or Gulp, and debugging tools.<br /> <br />
                    </div>
                </div>
                <div className='col-md-4'>
                    <img src={wbI} className='w-100' alt="wd-developer" />
                </div>
            </div>
            <div className='row pt-2 pb-2'>
                <div className='col-md-4'>
                    <img src={RR} className='w-100' alt="wd-developer" />
                </div>
                <div className='col-md-8'>
                    <div className='h2 pt-3 pb-3'>
                        Roles and Responsibilities
                    </div>
                    <div className='wd-contents ps-2 pb-4 pe-2'>
                    <b>1.Frontend Developer Intern:</b> Assist in developing and maintaining frontend components of web applications, including UI design, user interaction, and frontend logic implementation.<br /> <br />
                                    <b> 2.Backend Developer Intern:</b> Contribute to building and optimizing server-side components, including RESTful APIs, database integration, and business logic implementation.<br /> <br />
                                    <b>3.UI/UX Designer Intern: </b>Collaborate with developers to design intuitive and visually appealing user interfaces, conduct user research, create wireframes and prototypes, and ensure a seamless user experience.<br /> <br />
                                    <b>4.Quality Assurance (QA) Intern: </b>Test web applications for bugs, usability issues, and compatibility across different browsers and devices, and assist in writing test cases and automated tests.<br /> <br />
                                    <b> 5.Project Management Intern:</b> Assist in project planning, scheduling, and coordination, including task assignment, progress tracking, and communication with stakeholders.<br /> <br />
                                    <b>6.Technical Support Intern:</b>  Provide technical support to users and clients, troubleshoot issues, and assist in documenting solutions and best practices.<br /> <br />
                    </div>
                </div>
            </div>
            <div className='row pt-2 pb-2'>
                <div className='col-md-8'>
                    <div className='h2 pt-3 pb-3'>
                        Eligibility Criteria
                    </div>
                    <div className='wd-contents ps-2 pb-4 pe-2'>
                    <b>1.Educational Background:</b> Typically, interns pursuing web development roles have a background in computer science, software engineering, information technology, or a related field.<br /> <br />
                    <b>2.Must Complete:</b> You have must completed HSC.<br /> <br />
                    </div>
                    <div className='text-center'>
                        <a className='apply-link' target='_blank' style={{ textDecoration: "none", fontSize: "2rem",fontWeight:"500" }} href="https://forms.gle/TqrjJLCvM5uzCTmc7">Apply</a>
                    </div>
                </div>
                <div className='col-md-4'>
                    <img src={EC} style={{borderRadius:"10px"}} className='w-100' alt="wd-developer" />
                </div>
            </div>
        </div>
    </>
}

export default WD