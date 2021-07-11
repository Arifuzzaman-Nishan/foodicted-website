import React from 'react';
import logo from '../../images/logo.png';
import './Navigationbar.css';
import Sidebar from './Sidebar';

function Navigationbar() {
    return (
        <div className="nav-font">
            <ul className="list-unstyled d-flex align-items-center">
                <li className="list-inline-item ml-3">
                    <img style={{ width: '10rem' }} src={logo} alt="" />
                </li>
                {/* <li className="m-auto">+091-9870301533</li> */}
                <div className="ml-auto">
                    <li className="list-inline-item mr-5 d-none d-md-inline">HOME</li>
                    <li className="list-inline-item mr-5 d-none d-md-inline">CART</li>
                    <li className="list-inline-item mr-5 d-none d-md-inline">SIGN IN</li>
                    <li className="list-inline-item mr-3 pr-2 d-md-none d-block">
                        <Sidebar />
                    </li>
                </div>
            </ul>
        </div>
    );
}

export default Navigationbar;
