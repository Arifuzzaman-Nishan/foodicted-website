import { faBars, faThLarge } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css';

export default function SideBar() {
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
                    <li>
                        <Link className="link" href="/">
                            <FontAwesomeIcon className="li-icon" icon={faThLarge} />
                            {sideBar && <span className="links-name ml-4">Dahsboard</span>}
                        </Link>
                    </li>
                    <li>
                        <Link className="link" href="/">
                            <FontAwesomeIcon className="li-icon" icon={faThLarge} />
                            {sideBar && <span className="links-name ml-4">Dahsboard</span>}
                        </Link>
                    </li>
                </ul>
            </div>
            <div style={{ width: '100%' }} className="home-content">
                <div className="text">Home Content</div>
            </div>
        </>
    );
}
