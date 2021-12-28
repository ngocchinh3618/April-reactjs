import React from 'react';
import { Link } from 'react-router-dom';

export default function FooterSocialLink(props) {
    return (
        <>
            <li>
              <Link to="/">
                <span className="screen-reader-text">{props.name}</span>
                <img src={props.icon}/>
              </Link>
            </li>
          
        </>
    )
}
