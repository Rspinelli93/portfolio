import React from 'react';
import "../styles/Header.css";

import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Header = () => {
    const createMailtoLink = () => {
        const email = "spinelli.rsr@gmail.com";
        const subject = "Portfolio Inquiry";
        const body = "Hi, I saw your portfolio and would like to connect with you about...";
        
        return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    return (
        <header>
            <a href={createMailtoLink()}>
                <img className="mail-logo" src="src\assets\icons\envelope.png" alt="mail-icon" />
            </a>
            <img className="logo" src="src\assets\logo.png" alt="logo" />
            <img className="menu-logo" src="src\assets\icons\menu-burger.png" alt="menu" />
        </header>
    );
}

export default Header;

{/* <ul>
<li><Link to="/about">About</Link></li>
<li><HashLink smooth to="/#bootcamp">Bootcamp</HashLink></li>
<li><HashLink smooth to="/#ecole42">Ecole 42</HashLink></li>
<li><HashLink smooth to="/#contact">Contact</HashLink></li>
</ul> */}