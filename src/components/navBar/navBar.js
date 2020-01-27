import React from 'react';

import '../navBar/navBar.css';

import logo from '../../images/icons/logo.png';

export default function NavBar() {
    return (
        <nav className='navbar'>
            <div className='nav-center'>
                <div className='nav-header'>
                    <img src={logo} alt='logo' className='logo' />
                </div>
            </div>
        </nav>
    )
}