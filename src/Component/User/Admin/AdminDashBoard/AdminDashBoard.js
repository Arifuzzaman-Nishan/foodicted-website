import React from 'react';
import AdminAccountCard from './AdminAccountCard/AdminAccountCard';
import OrderReviewGraph from './AdminGraph/OrderReviewGraph/OrderReviewGraph';
import FavouriteItem from './FavouriteItem/FavouriteItem';

export default function AdminDashBoard() {
    return (
        <div>
            <AdminAccountCard />
            <FavouriteItem />
            <OrderReviewGraph />
        </div>
    );
}
