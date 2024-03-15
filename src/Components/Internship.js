import React, { useContext, useEffect } from 'react'
import './css/Internship.css'
import { InternData } from '../Context/IntershipData'
import ICard from './Cards/ICard'

function Intership() {
    useEffect (() => {
        document.title = "HeyRam Infrastructure Internship Program"
        window.scrollTo(0, 0)
    }, [])
    let Data = useContext(InternData)
    return <>
    <div className='container-fluid internship-page'>
        <div className='backg-row row'>

        </div>
        <div className='row internship-row'>
            {
                Data.data.map((e,i)=>{
                    return <div className='col-md-4 p-2'>
                        <ICard input={e} key={i} />
                    </div>
                })
            }
        </div>
    </div>
    </>
}

export default Intership