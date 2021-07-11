import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Navigationbar from '../Navigationbar/Navigationbar';
import './Home.css';

function Home() {
    return (
        <div className="banner">
            <Navigationbar />
            <Container>
                <Row style={{ height: '400px' }} className="d-flex align-items-center">
                    <Col className="banner-font" md={6}>
                        <h2>Hungry? You are</h2>
                        <h2>In The Right Place</h2>
                        <h6>The best restaurants at the best price</h6>
                        <div className="">
                            <input className="form-control form-control-lg mb-2" type="text" />
                            <Button variant="danger">Search</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Home;
