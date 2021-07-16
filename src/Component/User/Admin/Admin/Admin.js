import React from 'react';
import AdminDashBoard from '../AdminDashBoard/AdminDashBoard';
// import AdminAccountCard from './AdminAccountCard/AdminAccountCard';
// import SideBar from '../SideBar/SideBar';
import './Admin.css';

export default function Admin() {
    return (
        <div>
            {/* <div className="d-none d-md-block">
                <SideBar />
            </div> */}
            <div style={{ width: '100%' }} className="border border-dark dashboard-background">
                <AdminDashBoard />
            </div>
        </div>
    );
}
