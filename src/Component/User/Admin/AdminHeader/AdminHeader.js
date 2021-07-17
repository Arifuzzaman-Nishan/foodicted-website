import {
    faBell,
    faChevronCircleDown,
    faEnvelope,
    // eslint-disable-next-line prettier/prettier
    faSearch
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import boyicon from '../../../../images/icon/boyicon.jpg';
import './AdminHeader.css';

export default function AdminHeader() {
    return (
        <div className="pt-4">
            <nav className="header d-flex">
                <ul className="d-none d-xl-block">
                    <li>
                        {/* <form action=""> */}

                        <div className="input-group">
                            <input
                                placeholder="Search"
                                className="form-control shadow-none search-box"
                                type="search"
                            />

                            <button type="submit" className="btn search-btn shadow-none">
                                <FontAwesomeIcon icon={faSearch} />
                            </button>
                        </div>

                        {/* </form> */}
                    </li>
                </ul>
                <div className="ml-auto">
                    {/* <li className="list-inline-item">settings</li> */}
                </div>
                <ul className="ml-auto">
                    <li className="list-inline-item">
                        <FontAwesomeIcon className="header-icon notification-color" icon={faBell} />
                    </li>
                    <li className="list-inline-item">
                        <FontAwesomeIcon
                            className="header-icon notification-color"
                            icon={faEnvelope}
                        />
                    </li>
                    <li className="list-inline-item">
                        <FontAwesomeIcon
                            className="header-icon"
                            id="sidebar-color"
                            icon={faChevronCircleDown}
                        />
                    </li>
                    <li className="list-inline-item">
                        {/* <span>Hello, Nishan </span> */}
                        <img
                            className="mb-4 mr-5"
                            style={{ width: '2.5rem', borderRadius: '50%' }}
                            src={boyicon}
                            alt="boyicon"
                        />
                    </li>
                </ul>
            </nav>
        </div>
    );
}
