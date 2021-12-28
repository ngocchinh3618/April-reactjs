import React from 'react'

export default function HeroShape(props) {
    return (
        <svg 
        width={props.width} 
        height={props.height} 
        xmlns="http://www.w3.org/2000/svg" 
        style={{ overflow: 'visible' }}>
            <circle 
            className="anime-element fadeup-animation" 
            cx={props.cx} 
            cy={props.cy} 
            r={props.r} 
            fill={props.fill} 
            fillRule="evenodd" />
        </svg>
    )
}
