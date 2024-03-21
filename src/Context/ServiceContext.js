import React, { useState } from 'react'

export const serviceContextData = React.createContext()

function ServiceContext({children}) {
    let[data,setData] = useState(
        [
            {
                name:"CRYPTO MINING",
                description:"Unlock Greater Financial Freedom. Join the Revolution for a Sustainable and Inclusive Financial Future, Powered by Blockchain Technology.",
                path:"/crypto",
                img:"https://i.pinimg.com/736x/24/9c/74/249c74d19f7ca86bd77503ed1eefcd99.jpg"
            },{
                name:"CLOUD SERVICES",
                description:"Cloud Services Provide on-demand Access to Computing Resources, including Storage, Processing Power, and Applications, Over the Internet.Experience the Power Of Next-Generation Cloud Solutions",
                path:"/aws",
                img:"https://i.pinimg.com/564x/d6/ae/d4/d6aed43aa34a19e8e37eb6e6c0cbf204.jpg"
            },{
                name:"AGRICULTURE",
                description:"Agriculture is essential for providing food, fiber, and other resources for human sustenance and economic growth.This section provides the information on agriculture products we sell in our organisation",
                path:"/agriculture",
                img:"https://i.pinimg.com/564x/d0/e1/c0/d0e1c096805c29de644f0a9abc9759cf.jpg"
            }
        ]
    )
    return <>
    <serviceContextData.Provider value={{data,setData}}>{children}</serviceContextData.Provider>
    </>
}

export default ServiceContext