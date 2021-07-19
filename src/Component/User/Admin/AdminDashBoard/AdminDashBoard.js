import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import AdminHeader from '../AdminHeader/AdminHeader';
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
            title: 'Order Overview',
        });
    }, []);
    // style={{ margin: '0' }}
    return (
        <div className="dashboard-background">
            <AdminHeader />
            <AdminAccountCard />
            <FavouriteItem />
            <Row style={{ marginRight: '0', marginLeft: '0' }} className="mt-5">
                <Col className="mb-4" lg={6}>
                    <LineGraph graphData={graphData} />
                </Col>
                <Col lg={6}>
                    <BarGraph />
                </Col>
            </Row>
        </div>
    );
}
