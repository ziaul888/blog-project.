import React, {Component, Fragment} from 'react';
import {Container,Row,Col,Button} from "react-bootstrap";



class PageTop extends Component {
render() {
return (
<>
    <Container fluid={true} className="topFixedPage p-0">
        <div className="topPageOverlay">
            <Container className="topPageContent">
                <Row>
                    <Col className="text-center">
                    <h4 className="pageTitle">{this.props.pageTitle}</h4>
                    </Col>
                </Row>
            </Container>
        </div>
    </Container>
</>
);
}
}

export default PageTop;