import React, { useEffect, useState } from 'react';

import './Nav.css';

function Nav() {
    const [show, handleShow] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) handleShow(true);
            else handleShow(false);
        });
        return () => {
            window.removeEventListener('scroll');
        };
    }, []);
    return (
        <div className={`nav ${show && 'nav_black'}`}>
            <img
                className="nav_logo"
                src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                alt="Netflix"
            />
            <img
                className="nav_avatar"
                src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
                alt="Profile"
            />
        </div>
    );
}

export default Nav;
