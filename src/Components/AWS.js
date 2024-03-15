import React, { useEffect } from 'react'
import './css/Aws.css'
import Fade from 'react-reveal/Fade';
import { Zoom } from 'react-reveal';
import Card from 'react-bootstrap/Card';
import myImage from '../Assets/cloud.jpg';
import Image1 from '../Assets/inno.jpg'
import Image2 from '../Assets/mana.jpg'
import Image3 from '../Assets/dcd.jpg'
import Image4 from '../Assets/rty.jpg'
import Image5 from '../Assets/h6yu.jpg'
import Image6 from '../Assets/yab.jpg'
import Image7 from '../Assets/yun.jpg'

function AWS() {

    useEffect(() => {
        document.title = "Cloud Services"
    }, [])

    return <>
        <div className='container-fluid aws'>
            <div className="row aws-row">
                <div className='col-md-12 text-white text-center p-4 '>
               <Zoom> <div><b className='display-4'>Cloud Services</b></div></Zoom>
                    <Fade>
                    <img src={myImage} alt="Description of the image" style={{width:"24rem" }}/>
                        <div className='title display-5 p-3'>Secure and managed cloud solutions that drive the outcomebased modernization you need</div>
                    </Fade>
                    <div className='aws-content'>
                    <div className='title display-6 p-3 text-white'>
                            Here's what makes us stand out
                        </div>
                    </div>
                </div>
                <div className='col-md-12'>
                    <Fade>
       <div className='cards'>                
                    <Card className='c1' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Image1} />
      <Card.Body>
        <Card.Title>Unlock innovation with the right cloud solutions : </Card.Title>
        <Card.Text>
        Although the cloud has
become a transformation enabler, there are still many obstacles standing in the way of cloud
growth, and many businesses are finding it difficult to demonstrate the value of cloud
computing or to connect IT to business results. HeyramInfrastructure Cloud Services offer a
comprehensive strategy to recognizing and resolving issues while advancing change.
        </Card.Text>
       
      </Card.Body>
    </Card>
    <Card className='c1' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Image2}/>
      <Card.Body>
        <Card.Title>Managed Cloud Services</Card.Title>
        <Card.Text>
        HeyramInfrastructure offers businesses a range of managed services that cover the entire IT stack in addition to a suite of unmatched capabilities across public, private, and hybrid cloud, empowering them to optimize and modernize their infrastructure and applications and fully leverage the cloud. Utilize HeyramInfrastructure Managed Services to get the most out of your IT infrastructure.
        </Card.Text>
        
      </Card.Body>
    </Card>
    <Card className='c1' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Image3}/>
      <Card.Body>
        <Card.Title>Cloud Migration Services</Card.Title>
        <Card.Text>
        With HeyramInfrastructure Cloud Migration Services, start
your cloud adoption journey. Create and implement the best migration plan possible for your
company. With our professional evaluation and smooth workload migration capabilities, you
can reduce the complexity of cloud migration and expedite your journey.
HeyramInfrastructure creates cloud environments for you on the cloud provider of your
choosing that are safe, dependable, and scalable.
        </Card.Text>
        
      </Card.Body>
    </Card>

    <Card className='c1' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Image4}/>
      <Card.Body>
        <Card.Title>Modern Operations</Card.Title>
        <Card.Text>
        HeyramInfrastructure offers unmatched value that iterates on your
present status, projected future needs, and the specific steps necessary to enhance efficiency and
optimize your operational processes. HeyramInfrastructure does this by seamlessly integrating
people, processes, and cutting-edge technology.
        </Card.Text>
        
      </Card.Body>
    </Card>
    </div>
<div className='cards1'>
    <Card className='c2' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Image5}/>
      <Card.Body>
        <Card.Title>Cloud Consulting</Card.Title>
        <Card.Text>
        To develop your ideal cloud strategy, simplify your IT
infrastructure, and accomplish the desired business outcomes, take advantage of our decades
of experience working with some of the most complex IT systems on the planet.
        </Card.Text>
       
      </Card.Body>
    </Card>

    <Card className='c2'style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Image6}/>
      <Card.Body>
        <Card.Title>Private Cloud Services</Card.Title>
        <Card.Text>
        Discover the ideal fusion of private infrastructure
performance, security, compliance, and cloud efficiency, which gives you the ability to
manage and modernize your business. With our dedicated on-premise resources and our
smooth connection with workloads from public clouds, we provide a single, uniform strategy
throughout the whole cloud landscape.
        </Card.Text>
        
      </Card.Body>
    </Card>

    <Card className='c2' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Image7} />
      <Card.Body>
        <Card.Title>Public Cloud Services</Card.Title>
        <Card.Text>
        Our services are tried-and-true, repeatable, and standardized,
enabling you to easily develop and launch workloads and apps on the best public cloud
platform for your business. Hello, Ram Public cloud services focus security and
manageability while providing flexible deployment choices that can be customized to meet
your unique requirements. Our Public Cloud Services offer comprehensive, integrated, and
full-lifecycle assistance for cloud environments, from initial design to ongoing maintenance.
        </Card.Text>
      </Card.Body>
    </Card>
    </div> 
                    </Fade>
                </div>
            </div>
        </div>
    </>
}

export default AWS