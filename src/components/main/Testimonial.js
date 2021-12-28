import React from 'react';
import { USER_DATA } from '../../data';
import UserCard from '../common/UserCard';
import Testimonials1 from '../common/Testimonials1';
import Testimonials2 from '../common/Testimonials2';

export default function Testimonial() {
    const allUser = USER_DATA.map(data => (
        <UserCard key={data.id} {...data} />
    ))

    return (
        <>
            <div className="testimonials-shape testimonials-shape-1">
                <Testimonials1
                    width={280}
                    height={280}
                    viewBox="0 0 280 280"
                    x1="100%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                    id="testimonials-shape-1"
                    stopColor1="#261FB6"
                    stopColor2="#4950F6"
                    cx={140}
                    cy={685}
                    r={140}
                    transform="translate(0 -545)"
                    fill="url(#testimonials-shape-1)"
                />
            </div>
            <div className="testimonials-shape testimonials-shape-2">
                <Testimonials2 />
            </div>
            <div className="testimonials-shape testimonials-shape-3">
                <Testimonials1
                    width={48}
                    height={48}
                    viewBox="0 0 48 48"
                    x1="93.05%"
                    y1="19.767%"
                    x2="15.034%"
                    y2="85.765%"
                    id="testimonials-shape-3"
                    stopColor1="#FF3058"
                    stopColor2="#FF6381"
                    cx={24}
                    cy={434}
                    r={24}
                    transform="translate(0 -410)"
                    fill="url(#testimonials-shape-3)"
                />
            </div>
            <div className="container">
                <div className="testimonials-inner section-inner">
                    <h2 className="section-title mt-0 text-center">Testimonials</h2>
                    <div className="testimonials-wrap">
                        {allUser}
                    </div>
                </div>
            </div>
        </>
    )
}
