import React from 'react';
import './Admin.css';
import AdminDashBoard from './AdminDashBoard/AdminDashBoard';
// import AdminAccountCard from './AdminAccountCard/AdminAccountCard';
import SideBar from './SideBar/SideBar';

function Admin() {
    return (
        <div>
            <div className="d-none d-md-block">
                <SideBar />
            </div>
            <div className="border border-danger width-change">
                <AdminDashBoard />
            </div>
            {/* <AdminDashBoard /> */}
            {/* <AdminAccountCard /> */}
        </div>
    );
}

export default Admin;
