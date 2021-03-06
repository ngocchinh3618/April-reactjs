import React from 'react'

export default function HeaderShape2() {
    return (
        <svg
            width={128}
            height={128}
            viewBox="0 0 128 128"
            xmlns="http://www.w3.org/2000/svg"
            style={{ overflow: 'visible' }}>
            <defs>
                <linearGradient
                    x1="93.05%"
                    y1="19.767%"
                    x2="15.034%"
                    y2="85.765%"
                    id="header-shape-2">
                    <stop
                        stopColor="#FF3058"
                        offset="0%" />
                    <stop
                        stopColor="#FF6381"
                        offset="100%" />
                </linearGradient>
            </defs>
            <circle
                className="anime-element fadeup-animation"
                cx={64}
                cy={64}
                r={64}
                fill="url(#header-shape-2)"
                fillRule="evenodd" />
        </svg>
    )
}
