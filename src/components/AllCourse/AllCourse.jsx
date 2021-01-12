import React, { Component } from 'react';
import {Container, Row,Col} from 'react-bootstrap'
import Courselogo from '../../asset/image/Course-after-MBA.png'

class AllCourse extends Component {
    render() {
        return (
            <>
            <Container className="text-center mt-5">
                     
                     <Row>
                         <Col lg={6} md={12} sm={12}>
                             <Row>
                                 <Col lg={6} md={6} sm={12}>
                                     <img className="courseImg" src={Courselogo} alt="img"/>
                                 </Col>
                                 <Col lg={6} md={6} sm={12}>
                                     <h5 className="text-justify courseTitle">Web Development</h5>
                                     <p className="text-justify courseDes">I build native and cross platfrom mobile app for your business app for your business</p>
                                     <a  href="#details" className="courseDetails float-left" >Details</a>
                                 </Col>
                             </Row>
                         </Col>
                         <Col lg={6} md={12} sm={12}>
                             <Row>
                                 <Col lg={6} md={6} sm={12}>
                                     <img className="courseImg"  src={Courselogo} alt="img"/>
                                 </Col>
                                 <Col lg={6} md={6} sm={12}>
                                     <h5 className="text-justify courseTitle">Web Development</h5>
                                     <p className="text-justify courseDes" >I build native and cross platfrom mobile app for your business app for your business</p>
                                     <a  href="#details" className="courseDetails float-left" >Details</a>
                                 </Col>
                             </Row>
                         </Col>


                         <Col lg={6} md={12} sm={12}>
                             <Row>
                                 <Col lg={6} md={6} sm={12}>
                                     <img className="courseImg"  src={Courselogo} alt="img"/>
                                 </Col>
                                 <Col lg={6} md={6} sm={12}>
                                     <h5 className="text-justify courseTitle">Web Development</h5>
                                     <p className="text-justify courseDes" >I build native and cross platfrom mobile app for your business app for your business</p>
                                     <a href="#details" className="courseDetails float-left" >Details</a>
                                 </Col>
                             </Row>
                         </Col>


                         <Col lg={6} md={12} sm={12}>
                             <Row>
                                 <Col lg={6} md={6} sm={12}>
                                     <img className="courseImg"  src={Courselogo} alt="img"/>
                                 </Col>
                                 <Col lg={6} md={6} sm={12}>
                                     <h5 className="text-justify courseTitle">Web Development</h5>
                                     <p className="text-justify courseDes" >I build native and cross platfrom mobile app for your business app for your business</p>
                                     <a href="#details" className="courseDetails float-left" >Details</a>
                                 </Col>
                             </Row>
                         </Col>

                            
                     </Row>
                 </Container>
         </>
        );
    }
}

export default AllCourse;