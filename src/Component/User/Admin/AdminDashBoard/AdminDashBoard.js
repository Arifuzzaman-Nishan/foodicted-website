import React from 'react';
import AdminAccountCard from './AdminAccountCard/AdminAccountCard';
import FavouriteItem from './FavouriteItem/FavouriteItem';

export default function AdminDashBoard() {
    return (
        <div>
            <AdminAccountCard />
            <FavouriteItem />
        </div>
    );
}
