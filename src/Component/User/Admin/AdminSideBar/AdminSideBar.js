import { faBars, faThLarge } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Menu, MenuItem, ProSidebar, SidebarContent, SidebarHeader } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Link } from 'react-router-dom';
import AdminDashBoard from '../AdminDashBoard/AdminDashBoard';
import './AdminSideBar.css';

export default function AdminSideBar() {
    const [sideBar, setSideBar] = useState(false);

    return (
        <div>
            <ProSidebar collapsed={sideBar} width="200px" className="admin-sidebar">
                <SidebarHeader className="mx-auto mt-3">
                    <FontAwesomeIcon
                        style={{ fontSize: '1.5rem', cursor: 'pointer' }}
                        onClick={() => setSideBar(!sideBar)}
                        icon={faBars}
                    />
                </SidebarHeader>
                <SidebarContent>
                    <Menu iconShape="square">
                        <MenuItem icon={<FontAwesomeIcon icon={faThLarge} />}>
                            Dashboard
                            <Link to="/admin/dashboard" />
                        </MenuItem>
                    </Menu>
                </SidebarContent>
            </ProSidebar>
            <div className="main-width-change">
                <AdminDashBoard />
            </div>
        </div>
    );
}
