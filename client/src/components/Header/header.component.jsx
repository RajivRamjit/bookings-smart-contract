import React from 'react';
import { Link } from 'react-router-dom';

import './header.styles.scss';
// import logo from '../../assets/aitNoEarth.png';
const Header = () => (
    <div className='header'>
        <Link className='logo-container' to="/">
            <h2>LOGO</h2>
        </Link>
        <div className='options'>
            <Link className='option' to='/'>
                HOME
            </Link>
            <Link className='option' to='/services'>
                SERVICES
            </Link>
            <Link className='option' to='/remote-support'>
                REMOTE SUPPORT
            </Link>
            <Link className='option' to='/request'>
                SUBMIT REQUEST
            </Link>
            <Link className='option' to='/contact'>
                CONTACT
            </Link>
        </div>
    </div>
);
export default Header;