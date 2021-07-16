import { faBars, faThLarge } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import './SideBar.css';

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
        <div className={sideBar ? 'sidebar' : 'sidebar half-sidebar'}>
            <div
                className={`d-flex ${
                    sideBar ? 'justify-content-end' : 'justify-content-center'
                } my-3`}
            >
                <FontAwesomeIcon
                    style={{ cursor: 'pointer', fontSize: '1.5rem' }}
                    onClick={() => setSideBar(!sideBar)}
                    id="admin-icon"
                    className="icon text-white"
                    icon={faBars}
                />
            </div>
            <ul className="nav_list">
                {adminSideBarData.map((item) => (
                    <li className="mt-4">
                        <Link className="link" to={item.link}>
                            <FontAwesomeIcon className="li-icon" icon={item.icon} />
                            {sideBar && <span className="links-name ml-4">{item.title}</span>}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
