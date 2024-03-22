import React, { useContext, useEffect } from 'react'
import './css/Internship.css'
import { InternData } from '../Context/InternshipData'
import ICard from './Cards/ICard'
import internImg from '../Assets/internship.jpg'

function Internship() {
    useEffect(() => {
        document.title = "HeyRam Infrastructure Internship Program"
        window.scrollTo(0, 0)
    }, [])
    let Data = useContext(InternData)
    return <>
        <div className='container-fluid text-white internship-page'>
            <div className='backg-row row'>
                {/* banner-image */}
            </div>
            <div className='row row-intern ps-2 pe-2 pt-4 pb-4'>
                <div className='col-md-8' data-aos="fade-up" data-aos-duration="1500">
                    <h3>Mentorship and Internship Programs</h3><br />
                    <p className='titl-pc'> <h5>Are you a student or recent graduate looking to kickstart your career in software development or digital services?</h5> Our mentorship and internship programs offer valuable hands-on experience, mentorship from industry professionals, and opportunities to work on exciting projects that make a difference.</p>
                </div>
                <div className='col-md-4' data-aos="fade-down" data-aos-duration="1500">
                    <img src={internImg} style={{ borderRadius: "10px" }} className='w-100' alt="intern-imag" />
                </div>
            </div>

            <div className='row row-intern ps-2 pe-2 pt-4 pb-4'>
                <div className='col-md-12 ' data-aos="fade-up" data-aos-duration="1500">
                    <h3>Training and Development</h3><br />
                    <p className='titl-pc'>At Heyram Infrastructure, we believe in investing in our employees' growth and development. From personalized training programs to mentorship opportunities, we provide the resources and support needed for our team members to thrive and reach their full potential.</p>
                </div>
                {/* <div className='col-md-4'>
                    <img src={internImg} style={{ borderRadius: "10px" }} className='w-100' alt="intern-imag" />
                </div> */}
            </div>

            <div className='row internship-row'>
                {
                    Data.data.map((e, i) => {
                        return <div className='col-md-4 p-1' data-aos="fade-down" data-aos-duration="1500">
                            <ICard className='inter' input={e} key={i} />
                        </div>
                    })
                }
            </div>
        </div>
    </>
}

export default Internship