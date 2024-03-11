import React, { useState } from 'react'

export const serviceContextData = React.createContext()

function ServiceContext({children}) {
    let[data,setData] = useState(
        [
            {
                name:"CRYPTO MINING",
                description:"Unlock Greater Financial Freedom. Join the Revolution for a Sustainable and Inclusive Financial Future, Powered by Blockchain Technology.",
                path:"/crypto",
                img:"https://t3.ftcdn.net/jpg/01/96/96/86/360_F_196968684_zp8obttcJzlY4tWhFHzDGOTbPkdY0Q3p.jpg"
            },{
                name:"CLOUD SERVICES",
                description:"Cloud Services Provide on-demand Access to Computing Resources, including Storage, Processing Power, and Applications, Over the Internet.Experience the Power Of Next-Generation Cloud Solutions",
                path:"/aws",
                img:"https://c1.wallpaperflare.com/preview/668/480/948/network-server-system-infrastructure.jpg"
            },{
                name:"AGRICULTURE",
                description:"Agriculture is essential for providing food, fiber, and other resources for human sustenance and economic growth.",
                path:"/agriculture",
                img:"https://www.lintramax.com/wp-content/uploads/2022/05/24th_may_2022_spotlight.jpg"
            }
        ]
    )
    return <>
    <serviceContextData.Provider value={{data,setData}}>{children}</serviceContextData.Provider>
    </>
}

export default ServiceContext