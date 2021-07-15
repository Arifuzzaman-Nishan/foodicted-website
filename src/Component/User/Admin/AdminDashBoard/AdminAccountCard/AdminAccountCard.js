import React from 'react';
import { Col, Row } from 'react-bootstrap';
import 'react-circular-progressbar/dist/styles.css';
import AdminAccountCardDetails from '../AdminAccountCardDetails/AdminAccountCardDetails';
import AdminGraph from '../AdminGraph/AdminGraph';

export default function AdminAccountCard() {
    const adminAccountCardData = [
        {
            title: 'Total Menu',
            number: 325,
            percentage: 30,
        },
        {
            title: 'Total Revenue',
            number: '$425K',
            percentage: 40,
        },
        {
            title: 'Total Orders',
            number: 415,
            percentage: 50,
        },
        {
            title: 'Total Customers',
            number: 985,
            percentage: 60,
        },
    ];
    return (
        <div className="mt-5 ml-3">
            <Row className="border border-danger">
                <Col md={6}>
                    <Row>
                        {adminAccountCardData.map((item) => (
                            <AdminAccountCardDetails item={item} />
                        ))}
                    </Row>
                </Col>
                <Col md={6}>
                    <AdminGraph />
                </Col>
            </Row>
        </div>
    );
}
