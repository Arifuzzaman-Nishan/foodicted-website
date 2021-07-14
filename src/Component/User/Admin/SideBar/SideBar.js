import { faBars, faThLarge } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AdminAccountCard from '../AdminAccountCard/AdminAccountCard';
import './SideBar.css';

export default function SideBar() {
    const adminSideBarData = [
        {
            icon: faThLarge,
            title: 'Dashboard',
            link: '/admin/dashboard',
        },
    ];

    const [sideBar, setSideBar] = useState(true);

    return (
        <>
            <div className={sideBar ? 'sidebar' : 'sidebar half-sidebar'}>
                <div className="logo-content mb-5">
                    <FontAwesomeIcon
                        style={{ cursor: 'pointer' }}
                        onClick={() => setSideBar(!sideBar)}
                        id="admin-icon"
                        className="icon"
                        icon={faBars}
                    />
                </div>
                <ul className="nav_list">
                    {adminSideBarData.map((item) => (
                        <li>
                            <Link className="link" to={item.link}>
                                <FontAwesomeIcon className="li-icon" icon={item.icon} />
                                {sideBar && <span className="links-name ml-4">{item.title}</span>}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div style={{ width: '100%' }} className="home-content">
                <AdminAccountCard />
            </div>
        </>
    );
}
