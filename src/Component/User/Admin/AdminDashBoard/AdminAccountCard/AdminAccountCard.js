import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import 'react-circular-progressbar/dist/styles.css';
import AdminAccountCardDetails from '../AdminAccountCardDetails/AdminAccountCardDetails';
import LineGraph from '../AdminGraph/LineGraph/LineGraph';

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

    const [graphData, setgraphData] = useState({});

    useEffect(() => {
        setgraphData({
            yData: [31, 50, 28, 70, 45, 90, 140],
            categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            valueName: 'thousands',
            color: ['#4C95DD'],
            title: 'Daily Revenue',
        });
    }, []);

    return (
        <div className="mt-5">
            <Row style={{ margin: '0' }}>
                <Col md={6}>
                    <Row>
                        {adminAccountCardData.map((item) => (
                            <AdminAccountCardDetails item={item} />
                        ))}
                    </Row>
                </Col>
                <Col md={6}>
                    <LineGraph graphData={graphData} />
                </Col>
            </Row>
        </div>
    );
}
