import React from 'react'
import { useEffect } from 'react';
import './Interns.css'
import wbI from '../../Assets/ad1.png'
import SK from '../../Assets/ad2.jpg'
import EC from '../../Assets/ad3.jpeg'

function AD() {
    useEffect(() => {
        document.title = "App Development internship program"
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
                    App Development
                    </div>
                </div>
            </div>
            <div className='row pt-2 pb-2'>
                <div className='col-md-8'>
                    <div className='h2 pt-3 pb-3'>
                        Modules
                    </div>
                    <div className='ad-contents ps-2 pb-4 pe-2'>
                    <b>1.Programming Fundamentals: </b>: Covers basic programming concepts and principles using languages like Python, Java, or C++, including variables, data types, control structures, functions, and object-oriented programming.<br /> <br />
                                    <b>2.Web Development: </b> Teaches HTML, CSS, and JavaScript for building interactive and responsive web applications, as well as frameworks like React, Angular, or Vue.js for front-end development.<br /> <br />
                                    <b>3.Database Management:</b>Introduces database concepts, SQL for querying databases, and tools like MySQL, PostgreSQL, or MongoDB for database management and integration into applications.<br /> <br />
                                    <b>4.Backend Development:</b>Focuses on server-side programming languages and frameworks like Node.js, Flask, Django, or Spring Boot for building robust and scalable backend systems.<br /> <br />
                                    <b>5.Mobile App Development:</b>Covers native app development for iOS and Android platforms using languages like Swift, Kotlin, or React Native, as well as design patterns and best practices for mobile app UI/UX.<br /> <br />
                                    <b>6.Software Engineering Principles: </b>Introduces software engineering concepts such as version control, testing, debugging, and software architecture patterns like MVC, MVVM, or microservices.<br /> <br />
                                    <b>7.Agile Methodologies: </b>Explores agile development methodologies like Scrum or Kanban for iterative and collaborative software development.<br /><br />
                    </div>
                </div>
                <div className='col-md-4'>
                    <img src={wbI} className='w-100' alt="ad-developer" />
                </div>
            </div>
            <div className='row pt-2 pb-2'>
                <div className='col-md-4'>
                    <img src={SK} className='w-100' alt="ad-developer" />
                </div>
                <div className='col-md-8'>
                    <div className='h2 pt-3 pb-3'>
                        Roles and Responsibilities
                    </div>
                    <div className='ad-contents ps-2 pb-4 pe-2'>
                    <b>1.Software Development Intern: </b> Assist in designing, developing, and testing software applications, including front-end and back-end components, under the guidance of senior developers.<br /> <br />
                                    <b> 2.Web Developer Intern: </b> Work on developing and maintaining web applications, including designing user interfaces, implementing features, and optimizing performance.<br /> <br />
                                    <b>3.Mobile App Developer Intern:</b>Contribute to the development of mobile applications for iOS and Android platforms, including coding, debugging, and testing.<br /> <br />
                                    <b>4.Database Developer Intern:  </b>Assist in designing and optimizing database schemas, writing SQL queries, and integrating databases into software applications.<br /> <br />
                                    <b> 5.Quality Assurance (QA) Intern:</b> Test software applications for bugs, usability issues, and performance bottlenecks, and assist in writing test cases and automating testing processes.<br /> <br />
                                    <b>6.UI/UX Designer Intern: </b>Collaborate with developers to design intuitive and visually appealing user interfaces for web and mobile applications, and conduct user research and usability testing.<br /> <br />
                                    <b>7.Project Management Intern: </b>Assist in project planning, scheduling, and coordination, and collaborate with cross-functional teams to ensure timely delivery of software projects.<br /> <br />
                    </div>
                </div>
            </div>
            <div className='row pt-2 pb-2'>
                <div className='col-md-8'>
                    <div className='h2 pt-3 pb-3'>
                        Eligibility Criteria
                    </div>
                    <div className='ad-contents ps-2 pb-4 pe-2'>
                    <b>1.Educational Background:</b>Assist in designing and optimizing database schemas, writing SQL queries, and integrating databases into software applications.<br /> <br />
                                    <b>2.Must Complete:</b> You have must completed HSC.<br /> <br />
                    </div>
                    <div className='text-center'>
                        <a className='apply-link' target='_blank' style={{ textDecoration: "none", fontSize: "2rem",fontWeight:"500" }} href="https://forms.gle/TqrjJLCvM5uzCTmc7">Apply</a>
                    </div>
                </div>
                <div className='col-md-4'>
                    <img src={EC} style={{borderRadius:"10px"}} className='w-100' alt="ad-developer" />
                </div>
            </div>
        </div>
    </>
}

export default AD