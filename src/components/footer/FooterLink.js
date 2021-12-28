import React from 'react';
import { Link } from "react-router-dom";


export default function FooterLink(props) {
  return (
      <>
      <li>
          <Link to={props.link}>
            {props.title}
          </Link>
        </li>
      </>
        
      
  )
}
