import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import HomeTakeCare from '../HomeTakeCare/HomeTakeCare';
import Navigationbar from '../Navigationbar/Navigationbar';
import './Home.css';

function Home() {
    return (
        <div>
            <div className="banner">
                <Navigationbar />
                <Container>
                    <Row style={{ height: '400px' }} className="d-flex align-items-center">
                        <Col className="primary-font" md={6}>
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
            <HomeTakeCare />
        </div>
    );
}

export default Home;
