import React, { useState } from 'react'


export const JobData = React.createContext()
function JobContext({ children }) {
    let [data, setData] = useState([
        {
            name: "Full Stack Developer",
            description: "Design, develop, and maintain both front-end and back-end components of web applications. Collaborate with cross-functional teams to understand project...",
            path:"/jobs/fsd"

        },
        {
            name: "Data Analyst",
            description: "Analyze large datasets to extract meaningful insights and trends. Collaborate with cross-functional teams to identify business needs and translate them into...",
            path:"/jobs/da"
        },
        {
            name: "Digital Marketer",
            description: "Manage Google Adwords Campaigns to improve Return on Investment and generate reports Develop performance metrics to provide recommendations and contin...",
            path:"/jobs/dmj"
        },
        {
            name: "Data Scientist",
            description: "We are seeking talented data scientists to help us unlock the power of data and drive actionable insights for our clients. If you have a knack for analyzing complex data sets and a passion for data-driven decision-making, we'd love to talk to you!...",
            path:"/jobs/cj"
        },
        {
            name: "UI/UX Designer",
            description: "We are searching for creative UI/UX designers to help us create intuitive and user-friendly interfaces for our software applications. If you have a keen eye for design and a passion for creating exceptional user experiences, we want to see your portfolio!...",
            path:"/jobs/uiux"
        }
    ])
    return <>
        <JobData.Provider value={{data,setData}}>{children}</JobData.Provider>
    </>
}

export default JobContext