import parse from 'html-react-parser';
import React from 'react';
import { Col } from 'react-bootstrap';
import './HomeTakeCare.css';

function HomeTakeCareDetails({ item }) {
    const { title, pic, description } = item;
    return (
        <Col className="text-center" md={3}>
            <img style={{ height: '15rem', width: '13rem' }} src={pic} alt="" />
            <h5 className="secondary-font">{parse(title)}</h5>
            <p className="grey-color secondary-font">{description}</p>
        </Col>
    );
}

export default HomeTakeCareDetails;
