import React from 'react';
import PropTypes from 'prop-types';

const Header = ({title}) => (
    <header className=" rounded row my-2">
        <h1 className=" col text-center text-white py-4">{title}</h1>
    </header>
);

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header;