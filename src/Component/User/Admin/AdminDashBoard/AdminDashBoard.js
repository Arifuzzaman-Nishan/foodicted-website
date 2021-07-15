import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import AdminAccountCard from './AdminAccountCard/AdminAccountCard';
import BarGraph from './AdminGraph/BarGraph/BarGraph';
import LineGraph from './AdminGraph/LineGraph/LineGraph';
import FavouriteItem from './FavouriteItem/FavouriteItem';

export default function AdminDashBoard() {
    const [graphData, setgraphData] = useState({});

    useEffect(() => {
        setgraphData({
            yData: [200, 445, 351, 258, 359, 558, 461],
            categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            valueName: 'total',
            color: ['#E66430'],
        });
    }, []);

    return (
        <div>
            <AdminAccountCard />
            <FavouriteItem />
            <Row className="border border-danger mt-5">
                <Col md={6}>
                    <BarGraph />
                </Col>
                <Col md={6}>
                    <LineGraph graphData={graphData} />
                </Col>
            </Row>
        </div>
    );
}
