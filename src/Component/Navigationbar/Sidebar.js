import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Drawer } from 'antd';
import React, { useState } from 'react';

function Sidebar() {
    const navData = [
        { title: 'HOME' },
        { title: 'CART' },
        { title: 'SIGN IN' },
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
                            {items.title}
                        </h6>
                    ))}
                </div>
            </Drawer>
        </div>
    );
}

export default Sidebar;
