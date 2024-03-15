import React, { useState } from 'react'


export const JobData = React.createContext()
function JobContext({ children }) {
    let [data, setData] = useState([
        {
            name: "Full Stack Developer",
            img:"https://cdn-icons-png.flaticon.com/128/3494/3494244.png",
            description: "With our focused, cost-effective, and outcome-driven scientific SEO strategy, you can outrank your rival and maintain your #1 spot on Google."
        },
        {
            name: "Analyst",
            img:"https://cdn-icons-png.flaticon.com/128/1968/1968666.png",
            description: "Use social media to transform your brand tales into commercial success. Laser targeting, closing sales, clicks to conversions, and much more."
        },
        {
            name: "Software Developer",
            img:"https://cdn-icons-png.flaticon.com/128/8164/8164154.png",
            description: "Create content that helps people relate to your brand. There are emotional triggers in every piece of content that drive people to take driving decisions."
        },
        {
            name: "Digital Marketer",
            img:"https://cdn-icons-png.flaticon.com/128/5203/5203961.png",
            description: "Unlock the power of every click. Our expert team crafts high-performing ads and optimizes campaigns to their full potential, driving maximum conversions"
        },
        {
            name: "Intern Junior Full Stack Developer",
            img:"https://cdn-icons-png.flaticon.com/128/944/944948.png",
            description: "Want to see your brand and revenue take off? Let our marketing experts help. We'll build you a loyal fan base, craft emails that resonate, and get you to your ROI goals faster"
        },
        {
            name: "Data Scientist",
            img:"https://cdn-icons-png.flaticon.com/128/9431/9431856.png",
            description: "Unlock your business potential with our WhatsApp Marketing solutions. Reach your audience directly, engage seamlessly, and drive conversions effortlessly. Elevate your marketing strategy today!"
        },
        {
            name: "Consultant",
            img:"https://cdn-icons-png.flaticon.com/128/7991/7991055.png",
            description: "Cutting-edge web and mobile development services. We create responsive, user-friendly applications tailored to your needs. Get in touch for seamless digital experiences."
        },
        {
            name: "Support Engineer",
            img:"https://cdn-icons-png.flaticon.com/128/7991/7991055.png",
            description: "Cutting-edge web and mobile development services. We create responsive, user-friendly applications tailored to your needs. Get in touch for seamless digital experiences."
        }
    ])
    return <>
        <JobData.Provider value={{data,setData}}>{children}</JobData.Provider>
    </>
}

export default JobContext