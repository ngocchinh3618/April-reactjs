import React from 'react';
import { Link } from 'react-router-dom';

export default function Logo(props) {
    return (
        <div className="brand footer-brand">
            <Link to="/">
                <img src={props.logo} alt="logo" />
            </Link>
        </div>
    )
}
