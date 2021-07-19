/* eslint-disable prettier/prettier */
import {
    faBell,
    faChevronCircleDown,
    faEnvelope,
    faSearch,
    faThLarge
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import boyicon from '../../../../images/icon/boyicon.jpg';
import Sidebar from '../../../Navigationbar/Sidebar';
import './AdminHeader.css';

export default function AdminHeader() {

    const mobileSideBarData = [
        {
            title: 'Dashboard',
            link: '/admin/dashboard',
            position: 'left',
            icon: faThLarge,
            background: '#4C95DD',
        },
    ];
    // this useState use for to change the navbar background when someone scroll
    const [scroll, setScroll] = useState(false);

    // This is the data for the mobile view sidebar
   
    // console.log(mobileSideBarData);
    
    // This fuction gives the width and height when someone scroll the page
    window.onscroll = () => {
        if (window.scrollY > 100) {
            setScroll(true);
        } else {
            setScroll(false);
        }
    };
    // console.log(scroll);
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
                    <div className=" d-block d-md-none">
                        <Sidebar mobileSideBarData={mobileSideBarData} isAdmin="admin"/>
                    </div>
                    <div className="">
                        <FontAwesomeIcon className="header-icon notification-color" icon={faBell} />
                    </div>
                    <div className="">
                        <FontAwesomeIcon
                            className="header-icon notification-color"
                            icon={faEnvelope}
                        />
                    </div>
                    <div >
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
