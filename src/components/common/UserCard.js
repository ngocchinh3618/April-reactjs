import React from 'react';
import { Link } from 'react-router-dom';

export default function UserCard(props) {
    return (
        <div className="testimonial text-xs is-revealing">
            <div className="testimonial-inner">
                <div className="testimonial-main">
                    <div className="testimonial-header">
                        <img className="mb-16" src={props.url} alt="Testimonial" />
                    </div>
                    <div className="testimonial-body">
                        <p className="mb-0">{props.content}</p>
                    </div>
                </div>
                <div className="testimonial-footer">
                    <div className="testimonial-link">
                        <Link to="/">{props.title}</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
