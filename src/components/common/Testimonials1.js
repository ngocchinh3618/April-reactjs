import React from 'react'

export default function Testimonials1(props) {
    return (
        <svg 
        width={props.width} 
        height={props.height} 
        viewBox={props.viewBox} 
        xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient 
                    x1={props.x1} 
                    y1={props.y1} 
                    x2={props.x2} 
                    y2={props.y2} 
                    id={props.id}>
                    <stop 
                        stopColor={props.stopColor1} 
                        offset="0%" 
                    />
                    <stop 
                        stopColor={props.stopColor2} 
                        offset="100%" 
                    />
                </linearGradient>
            </defs>
            <circle 
            cx={props.cx} 
            cy={props.cy} 
            r={props.r} 
            transform={props.transform} 
            fill={props.fill} 
            fillRule="evenodd" />
        </svg>
    )
}
