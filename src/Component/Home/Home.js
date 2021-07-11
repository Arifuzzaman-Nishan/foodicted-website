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
                        <Col md={6}>
                            <h2 className="primary-font">Hungry? You are</h2>
                            <h2 className="primary-font">In The Right Place</h2>
                            <h6 className="primary-font">The best restaurants at the best price</h6>
                            <div className="">
                                <input
                                    placeholder="search the restaurants"
                                    className="form-control form-control-lg mb-2"
                                    type="text"
                                />
                                <Button className="secondary-font" variant="danger">
                                    Search
                                </Button>
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
