// This is the side bar for mobile device

/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Drawer } from 'antd';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar({ mobileSideBarData, isAdmin }) {
    // console.log(mobileSideBarData, isAdmin);
    console.log(mobileSideBarData);

    // const mobileSideBarData = [
    //     {
    //         title: 'Dashboard',
    //         link: '/admin/dashboard',
    //         position: 'left',
    //         icon: faThLarge,
    //         background: '#4C95DD',
    //     },
    // ];

    // to store the webpage width the state
    const [width, setWidth] = useState(document.documentElement.clientWidth);

    // conditionally call the onClose function
    const [count, setCount] = useState(0);

    // this state for to open the drawer and close the drawer
    const [visible, setVisible] = useState(false);

    // this function set the current width of my browser
    const updateDimensions = () => {
        setWidth(document.documentElement.clientWidth);
    };

    // const navData = [
    //     { title: 'HOME', link: '/' },
    //     { title: 'CART', link: '/' },
    //     { title: 'SIGN IN', link: '/' },
    //     { title: 'ADMIN', link: '/admin/dashboard' },
    // ];

    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = (value = 'web') => {
        setVisible(false);
        value === 'mobile' && setCount((prevstate) => prevstate + 1);
    };

    // this useEffect is call when the browser width is change
    useEffect(() => {
        window.addEventListener('resize', updateDimensions);
        return () => window.removeEventListener('resize', updateDimensions);
    }, [width]);

    // this is works when the page width is greater then 767 and onClose call for one time
    useEffect(() => {
        if (count === 0) {
            width > 767 && onClose('mobile');
        }
    }, [count, width]);

    return (
        <div>
            <FontAwesomeIcon icon={faBars} className="header-bar" onClick={showDrawer} />
            <Drawer
                // title="Basic Drawer"
                placement={isAdmin ? 'left' : 'right'}
                closable={false}
                onClose={onClose}
                visible={visible}
            >
                <FontAwesomeIcon
                    style={{ fontSize: '25px', cursor: 'pointer' }}
                    icon={faTimes}
                    onClick={onClose}
                />
                <div className="mt-4">
                    {mobileSideBarData.map((items) => (
                        <div
                            className="d-flex align-items-center"
                            style={{ borderBottom: '1px solid lightGrey', paddingBottom: '9px' }}
                        >
                            <FontAwesomeIcon
                                style={{ background: items.background, color: 'white' }}
                                className="sidebar-icon mr-3"
                                icon={items.icon}
                            />
                            <Link to={items.link}>{items.title}</Link>
                        </div>
                    ))}
                </div>
            </Drawer>
        </div>
    );
}
