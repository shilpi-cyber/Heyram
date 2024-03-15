import React, { useState } from 'react'


export const JobData = React.createContext()
function JobContext({ children }) {
    let [data, setData] = useState([
        {
            name: "Full Stack Developer",
            description: "Design, develop, and maintain both front-end and back-end components of web applications. Collaborate with cross-functional teams to understand project..."
        },
        {
            name: "Data Analyst",
            description: "Analyze large datasets to extract meaningful insights and trends. Collaborate with cross-functional teams to identify business needs and translate them into..."
        },
        {
            name: "Software Developer",
            description: "We are looking for experienced software developers to join our team and help us build innovative software solutions for our clients. If you have a passion for coding and a strong background in software development, we want to hear from you!..."
        },
        {
            name: "Digital Marketer",
            description: "Manage Google Adwords Campaigns to improve Return on Investment and generate reports Develop performance metrics to provide recommendations and contin..."
        },
        {
            name: "Intern Junior Full Stack Developer",
            description: "Assist in designing, coding, and debugging web applications in a team environment. Collaborate with front-end developers to integrate user-facing elements using server-side logic...."
        },
        {
            name: "Data Scientist",
            description: "We are seeking talented data scientists to help us unlock the power of data and drive actionable insights for our clients. If you have a knack for analyzing complex data sets and a passion for data-driven decision-making, we'd love to talk to you!..."
        },
        {
            name: "Consultant",
            description: "Revolves around providing expert advice, guidance, and solutions to clients in various domains. Depending on your specialization, you may offer consultancy services..."
        },
        {
            name: "Support Engineer",
            description: "Provide voice-based support to international/domestic customers over the phone (Inbound and Outbound). Build a rapport with customers with clear and..."
        },
        {
            name: "UI/UX Designer",
            description: "We are searching for creative UI/UX designers to help us create intuitive and user-friendly interfaces for our software applications. If you have a keen eye for design and a passion for creating exceptional user experiences, we want to see your portfolio!..."
        }
    ])
    return <>
        <JobData.Provider value={{data,setData}}>{children}</JobData.Provider>
    </>
}

export default JobContext