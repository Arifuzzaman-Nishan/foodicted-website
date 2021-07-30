import React from 'react';
import { Container, Row } from 'react-bootstrap';
import connectWorld from '../../../images/connectWorld.svg';
import couriers from '../../../images/Couriers.svg';
import delivery from '../../../images/deliver.svg';
import order from '../../../images/order.svg';
import './HomeTakeCare.css';
import HomeTakeCareDetails from './HomeTakeCareDetails';

function HomeTakeCare() {
    const takeCarePic = [
        {
            title: `Fast Delivery in 1
                    <br />
                    hour with our
                    <br />
                    Team`,
            pic: delivery,
            description: 'Get the fastest delivery',
        },
        {
            title: `Easy to order by web <br /> Or Apps`,
            pic: order,
            description: 'Get the fastest delivery',
        },
        {
            title: `Wide Coverage Map <br /> Around The World`,
            pic: connectWorld,
            description: 'Get the fastest delivery',
        },
        {
            title: `More Than 150+ <br /> Couriers`,
            pic: couriers,
            description: 'Get the fastest delivery',
        },
    ];
    return (
        <Container className="mt-5">
            <div className="text-center">
                <h2 className="primary-font">Just Relax At Home,</h2>
                <h2 className="primary-font">We Will Take Care</h2>
                <p className="grey-color primary-font">
                    Just sit back and relax. We will take care of your needs and choice
                </p>
            </div>
            <Row className="mt-5">
                {takeCarePic.map((item) => (
                    <HomeTakeCareDetails item={item} />
                ))}
            </Row>
        </Container>
    );
}

export default HomeTakeCare;
