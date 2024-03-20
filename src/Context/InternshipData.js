import React, { useState } from 'react'

export const InternData = React.createContext()
function InternshipData({children}) {
    let [data,setData] = useState(
        [
            {
                name:"Artificial Intelligence ",
                description:"Unlock the future of artificial intelligence through our dynamic internship program. ",
                path:"/internship/ai-developer-intern"
            },
            {
                name:"Digital Marketing",
                description:"Seize the future of digital marketing through our forward-thinking internship program, where you'll shape strategies at the forefront of the digital landscape.",
                path:"/internship/digital-marketing-intern"
            },
            {
                name:"App Development",
                description:"Craft the future of technology with our app development internship, where you'll innovate, code, and contribute to groundbreaking projects shaping the app landscape.",
                path:"/internship/app-developer-intern"

            },
            {
                name:"Web Development",
                description:"Step into the future of web development through our internship program, where you'll code, design, and shape the digital experiences of tomorrow. ",
                path:"/internship/web-developer-intern"
            },
            {
                name:"Finance Analysis",
                description:"Navigate the future of finance analysis with our internship program, where you'll analyze trends, leverage data-driven insights, and pioneer strategies in the evolving financial landscape.",
                path:"/internship/financial-analyst-intern"
            },
            {
                name:"AWS Cloud Services",
                description:"Unleash the power of AWS cloud services in our internship program, where you'll sculpt the future of scalable, innovative, and resilient cloud solutions.",
                path:"/internship/cloud-intern"

            }
        ]
    )
    return <>
        <InternData.Provider value={{data,setData}}>{children}</InternData.Provider>
    </>
}

export default InternshipData