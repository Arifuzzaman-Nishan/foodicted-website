import {
    faBell,
    faChevronCircleDown,
    faEnvelope,
    // eslint-disable-next-line prettier/prettier
    faSearch
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import boyicon from '../../../../images/icon/boyicon.jpg';
import './AdminHeader.css';

export default function AdminHeader() {
    const [scroll, setScroll] = useState(false);
    window.onscroll = () => {
        if (window.scrollY > 100) {
            setScroll(true);
        } else {
            setScroll(false);
        }
    };
    console.log(scroll);
    return (
        <div className={`${scroll && 'active-navbar'} px-4 nav-bar`}>
            <nav className="header d-flex justify-content-xl-between justify-content-center align-items-center">
                <div className="d-none d-xl-block">
                    <div className="input-group d-flex border">
                        <input
                            placeholder="Search"
                            className="form-control shadow-none search-box"
                            type="search"
                        />

                        <button type="submit" className="btn search-btn shadow-none">
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </div>
                </div>
                <div className="d-flex">
                    <div className="mr-2">
                        <FontAwesomeIcon className="header-icon notification-color" icon={faBell} />
                    </div>
                    <div className="mr-2">
                        <FontAwesomeIcon
                            className="header-icon notification-color"
                            icon={faEnvelope}
                        />
                    </div>
                    <div className="mr-5">
                        <FontAwesomeIcon
                            className="header-icon"
                            id="sidebar-color"
                            icon={faChevronCircleDown}
                        />
                    </div>
                    <div className="mr-5">
                        <img
                            className=""
                            style={{ width: '2.5rem', borderRadius: '50%' }}
                            src={boyicon}
                            alt="boyicon"
                        />
                    </div>
                </div>
            </nav>
        </div>
    );
}
