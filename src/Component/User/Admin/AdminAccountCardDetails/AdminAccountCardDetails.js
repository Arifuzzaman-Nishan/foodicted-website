import { Progress } from 'antd';
import React from 'react';
import { Card, Col } from 'react-bootstrap';

export default function AdminAccountCardDetails({ item }) {
    const { title, number, percentage } = item;
    return (
        <Col className="mb-3" md={6}>
            <Card style={{ width: '216px', height: '140px' }}>
                <Card.Body className="d-flex align-items-center justify-content-between">
                    <div className="text-start">
                        <h5>{title}</h5>
                        <h3 className="font-weight-bold">{number}</h3>
                    </div>
                    <div className="circular-bar">
                        <Progress type="circle" percent={percentage} width={80} />
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
}
