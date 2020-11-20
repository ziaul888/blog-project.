import React, { Component } from 'react';
import {Container, Col, Row} from 'react-bootstrap'
import graphicslogo from '../../asset/image/graphics.svg'
import weblogo from '../../asset/image/web.svg'
import mobilelogo from '../../asset/image/mobile.svg'
class Services extends Component {
    render() {
        return (
            <>
                <Container>
                   <h1 className="text-center serviceMainTitle"> MY SERVICES </h1>
                    <Row>
                        
                        <Col lg={4} md={6} sm={12} >
                        <div className="serviceCard text-center">
                            <img src= {graphicslogo} alt="img"/>
                            <h2 className="serviceName">Graphices Design</h2>
                            <p className="serviceDescription">I design and develop static and dynamic web sites as per your requirements as we believe, “web is world’s next home”.</p>
                        </div>
                        </Col>
         
                        <Col lg={4} md={6} sm={12}>
                        <div className="serviceCard text-center">
                            <img src= {weblogo} alt="img"/>
                            <h2 className="serviceName">Web Development</h2>
                            <p className="serviceDescription">I design and develop static and dynamic web sites as per your requirements as we believe, “web is world’s next home”.</p>
                        </div>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                        <div className="serviceCard text-center">
                            <img src= {mobilelogo} alt="img"/>
                            <h2 className="serviceName">App Development</h2>
                            <p className="serviceDescription">I design and develop static and dynamic web sites as per your requirements as we believe, “web is world’s next home”.</p>
                        </div>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}

export default Services;
