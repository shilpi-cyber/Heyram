import React, {useEffect} from 'react';
import './css/Career.css'
import { Link } from 'react-router-dom';
import { Zoom } from 'react-reveal';
import Card from 'react-bootstrap/Card';

function Career(){
    useEffect(() => {
        document.title = "Career Services"
    }, []) 

    return <>
    <div className='container-fluid job '>
                <div className='row text-center job-card  '>
                    <div className='col-md-12 d-flex justify-content-center'>
                        <div className='card-home'>
                            <Zoom><div className=' text-white title pt-4 pb-4 '>Want to Join Us?</div></Zoom>
                            <Zoom><h1 className='text-white title-job display-1 pt-4 pb-4'>Careers</h1></Zoom>
                            <Zoom><p className='text-white titl-p p-3'> We are a Software Development based Startup and We are ready for new Talent to Join our Company</p></Zoom>
                            <Zoom><Link to='/jobs'><button className='btn bg-light dark text-black w-50  m2-6 p-3  ' >View Jobs</button></Link></Zoom>
                        </div>
                    </div>
                </div>
                <div className='row text-center serv-row p-4 '>
                    <div className='col-md-12 d-flex justify-content-center'>
                        <div className='card-serv'>
                            <Zoom><h1 className='text-black title-serv serv-2'>Why work with us?</h1></Zoom>
                            <Zoom><p className='text-black title titl-p p-3'>
                    <div className='work'>            
                            <Card.Body>

        <Card.Title><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-bar-chart-fill" viewBox="0 0 16 16">
  <path d="M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1z"/>
</svg> &nbsp;&nbsp;&nbsp;&nbsp;Flexible Environment</Card.Title>
        <Card.Text>
        We understand the importance of accommodating diverse work styles and personal needs. Our flexible work environment allows employees to manage their schedules effectively, promoting work-life balance and enhancing productivity.
        </Card.Text>
        
      </Card.Body>
      <Card.Body>
        <Card.Title><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-egg-fill" viewBox="0 0 16 16">
  <path d="M14 10a6 6 0 0 1-12 0C2 5.686 5 0 8 0s6 5.686 6 10"/>
</svg> &nbsp;&nbsp;&nbsp;&nbsp;Catered Meals</Card.Title>
        <Card.Text>
        We believe that providing catered meals is more than just sustenance; it's a way to foster community, encourage team bonding, and ensure that our employees are well-nourished and energized throughout the day.
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Title> <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-droplet-half" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M7.21.8C7.69.295 8 0 8 0q.164.544.371 1.038c.812 1.946 2.073 3.35 3.197 4.6C12.878 7.096 14 8.345 14 10a6 6 0 0 1-12 0C2 6.668 5.58 2.517 7.21.8m.413 1.021A31 31 0 0 0 5.794 3.99c-.726.95-1.436 2.008-1.96 3.07C3.304 8.133 3 9.138 3 10c0 0 2.5 1.5 5 .5s5-.5 5-.5c0-1.201-.796-2.157-2.181-3.7l-.03-.032C9.75 5.11 8.5 3.72 7.623 1.82z"/>
  <path fill-rule="evenodd" d="M4.553 7.776c.82-1.641 1.717-2.753 2.093-3.13l.708.708c-.29.29-1.128 1.311-1.907 2.87z"/>
</svg> &nbsp;&nbsp;&nbsp;&nbsp; Health Care</Card.Title>
        <Card.Text>
        We prioritize the health and well-being of our employees by offering comprehensive health care benefits. From medical insurance to wellness programs, we strive to provide the support and resources necessary for our team members to lead healthy and fulfilling lives.
        </Card.Text>
      </Card.Body>
      </div> 
                                
                                </p>
     

                                </Zoom>

                        </div>
                    </div>
                </div>




                </div>
    
    
    
    
    </>

}

export default Career;