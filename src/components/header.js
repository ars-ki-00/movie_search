import React from 'react';

import './header.css';

const Header = (props) => {
    return (
        <header className="page-header">
            {props.title}
        </header>
    );
}

export default Header;