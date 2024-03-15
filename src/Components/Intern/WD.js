import React from 'react'
import { useEffect } from 'react';
import Card from 'react-bootstrap/Card';


function WD() {
    useEffect (() => {
        document.title = "Web Development internship program"
        window.scrollTo(0, 0)
    }, [])
    return <>
        <div className='container-fluid'>
            <div className='row intership-card'>
                <div className='col-md-12 d-flex justify-content-center p-5'>
                    <Card className='w-75 '>
                        <Card.Body>
                            <Card.Title>Web Developer</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Modules</Card.Subtitle>
                            <div className='d-flex justify-content-center'>
                                <Card.Text className='w-75'>
                                    <b>1.HTML & CSS Fundamentals:</b> Covers the basics of HTML for structuring web pages and CSS for styling them, including layout techniques, responsive design, and CSS frameworks like Bootstrap or Foundation. <br /> <br />
                                    <b>2.JavaScript Programming:</b> Teaches fundamental JavaScript concepts such as variables, functions, DOM manipulation, event handling, and asynchronous programming, as well as modern ES6+ features.<br /> <br />
                                    <b>3.Frontend Frameworks: </b>Introduces frontend frameworks like React.js, Angular, or Vue.js for building dynamic and interactive web applications, including component-based architecture and state management.<br /> <br />
                                    <b>4.Backend Development:</b> Covers server-side programming languages and frameworks like Node.js, Express.js, Django, or Flask for building RESTful APIs and server-side logic.<br /> <br />
                                    <b>5.Database Management:</b> Introduces database concepts and SQL for querying and manipulating data, as well as NoSQL databases like MongoDB or Firebase for storing and retrieving structured data.<br /> <br />
                                    <b>6.Version Control with Git:</b>  Teaches version control concepts and practices using Git and GitHub for managing code repositories, collaborating with teams, and tracking changes.<br /> <br />
                                    <b>7.Web Development Tools: Explores</b> development tools and workflows, including text editors/IDEs, package managers like npm or yarn, build tools like Webpack or Gulp, and debugging tools.<br /> <br />
                                </Card.Text>
                            </div>

                            <Card.Subtitle className="mb-2 text-muted">Roles and Responsibilities</Card.Subtitle>
                            <div className='d-flex justify-content-center'>
                                <Card.Text className='w-75'>
                                    <b>1.Frontend Developer Intern:</b> Assist in developing and maintaining frontend components of web applications, including UI design, user interaction, and frontend logic implementation.<br /> <br />
                                    <b> 2.Backend Developer Intern:</b> Contribute to building and optimizing server-side components, including RESTful APIs, database integration, and business logic implementation.<br /> <br />
                                    <b>3.UI/UX Designer Intern: </b>Collaborate with developers to design intuitive and visually appealing user interfaces, conduct user research, create wireframes and prototypes, and ensure a seamless user experience.<br /> <br />
                                    <b>4.Quality Assurance (QA) Intern: </b>Test web applications for bugs, usability issues, and compatibility across different browsers and devices, and assist in writing test cases and automated tests.<br /> <br />
                                    <b> 5.Project Management Intern:</b> Assist in project planning, scheduling, and coordination, including task assignment, progress tracking, and communication with stakeholders.<br /> <br />
                                    <b>6.Technical Support Intern:</b>  Provide technical support to users and clients, troubleshoot issues, and assist in documenting solutions and best practices.<br /> <br />
                                </Card.Text>
                            </div>
                            <Card.Subtitle className="mb-2 text-muted">Eligibility Criteria:</Card.Subtitle>
                            <div className='d-flex justify-content-center'>
                                <Card.Text className='w-75'>
                                    <b>1.Educational Background:</b> Typically, interns pursuing web development roles have a background in computer science, software engineering, information technology, or a related field.<br /> <br />
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

export default WD