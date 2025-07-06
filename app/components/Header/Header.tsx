import React from 'react';
import variables from '../../styles/variables.module.scss';

const Header: React.FC = () => {
    return (
        <header>
            <h1 className={`${variables.title} ${variables.titlebg}`}>My Blog</h1>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;