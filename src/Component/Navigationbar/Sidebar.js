import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Drawer } from 'antd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
    const navData = [
        { title: 'HOME', link: '/' },
        { title: 'CART', link: '/' },
        { title: 'SIGN IN', link: '/' },
        { title: 'ADMIN', link: '/admin/dashboard' },
        // { title: 'Weekend Trips' },
        // { title: 'Workcations' },
        // { title: 'Blogs' },
    ];
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };

    return (
        <div>
            <FontAwesomeIcon
                icon={faBars}
                style={{ fontSize: '25px', cursor: 'pointer' }}
                onClick={showDrawer}
            />
            <Drawer
                // title="Basic Drawer"
                placement="right"
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
                    {navData.map((items) => (
                        <h6 style={{ borderBottom: '1px solid lightGrey', paddingBottom: '9px' }}>
                            <Link to={items.link}>{items.title}</Link>
                        </h6>
                    ))}
                </div>
            </Drawer>
        </div>
    );
}

export default Sidebar;
