import React, { Component } from 'react';
import { Container,Col,Card,Row,Button } from 'react-bootstrap'
import Projectlogo from '../../asset/image/training-and-furlough-1.jpg'
class AllProject extends Component {
    render() {
        return (
            <>
    <Container className="text-center">
    <h1 className="text-center serviceMainTitle">Recent Project</h1>
        <Row>
            <Col lg={4} md={6} sm={12}>
            <Card className="projectCard">
                <Card.Img variant="top" src={Projectlogo}  alt="img"/>
                <Card.Body>
                    <Card.Title className="projectCardTitle">Card Title</Card.Title>
                    <Card.Text projectCardDes>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="primary">Details</Button>
                </Card.Body>
            </Card>
            </Col>
            <Col lg={4} md={6} sm={12}>
            <Card  className="projectCard">
                <Card.Img variant="top" src={Projectlogo} />
                <Card.Body >
                    <Card.Title className="projectCardTitle">Card Title</Card.Title>
                    <Card.Text projectCardDes>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="primary">Details</Button>
                </Card.Body>
            </Card>
            </Col>
            <Col lg={4} md={6} sm={12}>
            <Card className="projectCard">
                <Card.Img variant="top" src={Projectlogo} />
                <Card.Body>
                    <Card.Title className="projectCardTitle">Card Title</Card.Title>
                    <Card.Text projectCardDes>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="primary">Details</Button>
                </Card.Body>
            </Card>
            </Col>
        </Row>
    </Container>
</>
        );
    }
}

export default AllProject;