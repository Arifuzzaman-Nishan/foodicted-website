import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import AdminHeader from '../AdminHeader/AdminHeader';
import AdminAccountCard from './AdminAccountCard/AdminAccountCard';
import BarGraph from './AdminGraph/BarGraph/BarGraph';
import LineGraph from './AdminGraph/LineGraph/LineGraph';
import FavouriteItem from './FavouriteItem/FavouriteItem';

export default function AdminDashBoard() {
    // const [graphData, setgraphData] = useState({});

    const graphData = {
        yData: [200, 445, 351, 258, 359, 558, 461],
        categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        valueName: 'total',
        color: ['#E66430'],
        title: 'Order Overview',
    };

    // useEffect(() => {
    //     setgraphData({
    //         yData: [200, 445, 351, 258, 359, 558, 461],
    //         categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    //         valueName: 'total',
    //         color: ['#E66430'],
    //         title: 'Order Overview',
    //     });
    // }, []);

    return (
        <div className="dashboard-background">
            <AdminHeader />
            <AdminAccountCard />

            {/* for the admin Carousel */}
            <div className="mt-5">
                <Card style={{ maxWidth: '95%' }} className="bd-radius p-3 mx-auto">
                    <h4 className="text-center mb-4">Favourite Items</h4>
                    <FavouriteItem />
                </Card>
            </div>

            <Row style={{ marginRight: '0', marginLeft: '0' }} className="mt-5">
                <Col className="mb-3" lg={6}>
                    <BarGraph />
                </Col>
                <Col lg={6}>
                    <LineGraph graphData={graphData} />
                </Col>
            </Row>
        </div>
    );
}
