import React from 'react'
import { useEffect } from 'react';
import Card from 'react-bootstrap/Card';


function AI() {
    useEffect (() => {
        document.title = "Artificial Intelligence internship program"
        window.scrollTo(0, 0)
    }, [])
    return <>
        <div className='container-fluid'>
            <div className='row intership-card'>
                <div className='col-md-12 d-flex justify-content-center p-5'>
                    <Card className='w-75 '>
                        <Card.Body>
                            <Card.Title>Artificial Intelligence</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Modules</Card.Subtitle>
                            <div className='d-flex justify-content-center'>
                                <Card.Text className='w-75'>
                                <b>1.HTML & CSS Fundamentals:</b> Covers the basics of HTML for structuring web pages and CSS for styling them, including layout techniques, responsive design, and CSS frameworks like Bootstrap or Foundation. <br /> <br />
                                    <b>2.JavaScript Programming:</b> Teaches fundamental JavaScript concepts such as variables, functions, DOM manipulation, event handling, and asynchronous programming, as well as modern ES6+ features.<br /> <br />
                                    <b>3.Frontend Frameworks: </b>Introduces frontend frameworks like React.js, Angular, or Vue.js for building dynamic and interactive web applications, including component-based architecture and state management.<br /> <br />
                                    <b>4.Backend Development:</b>Teaches techniques for analyzing and generating human language, enabling machines to understand and generate text.<br /> <br />
                                    <b>5.Database Management:</b>Covers methods for processing, analyzing, and understanding digital images and videos, enabling machines to interpret visual information.<br /> <br />
                                    <b>6.Version Control with Git:</b>: Introduces algorithms for training agents to make sequences of decisions in complex environments through trial and error.<br /> <br />
                                    <b>7.Web Development Tools:</b> Explores the ethical considerations, societal impacts, and responsible development practices in AI.<br /> <br />
                                </Card.Text>
                            </div>

                            <Card.Subtitle className="mb-2 text-muted">Roles and Responsibilities</Card.Subtitle>
                            <div className='d-flex justify-content-center'>
                                <Card.Text className='w-75'>
                                    <b>1.Research Intern:</b> Conduct research on cutting-edge AI algorithms, techniques, or applications under the guidance of senior researchers.<br /> <br />
                                    <b>2.Software Development Intern:  </b>Develop AI-powered software applications or components, including data preprocessing, model training, and integration into existing systems.<br /> <br />
                                    <b>3.Data Science Intern:</b>Analyze large datasets, build predictive models, and extract actionable insights using AI and machine learning techniques.<br /> <br />
                                    <b>4.	Product Management Intern: </b>Assist in defining product requirements, prioritizing features, and validating product ideas based on AI technologies<br /> <br />
                                    <b>5.AI Engineering Intern:</b>Design, implement, and optimize AI algorithms and models for scalability, performance, and efficiency.<br /> <br />
                                    <b>6.AI Ethics Intern: </b>Research and analyze ethical implications of AI technologies, develop guidelines for responsible AI deployment, and assist in ethical AI auditing.<br /> <br />
                                </Card.Text>
                            </div>
                            <Card.Subtitle className="mb-2 text-muted">Eligibility Criteria:</Card.Subtitle>
                            <div className='d-flex justify-content-center'>
                                <Card.Text className='w-75'>
                                    <b>1.Educational Background:</b>Typically, interns pursuing AI roles have a background in computer science, engineering, mathematics, statistics, or a related field prepared<br /> <br />
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

export default AI