import React from 'react'
import Card from "../common/Card";
import {CARD_DATA} from '../../data/index';
// import leaf from "../leaf.svg";
export default function Feature() {
const allCard = CARD_DATA.map(data => (
        <Card icon={data.icon} key={data.id} {...data} />
    ))
    return (
        <div className="container">
            <div className="features-inner section-inner">
                <div className="features-header text-center">
                    <div className="container-sm">
                        <h2 className="section-title mt-0">Meet April</h2>
                        <p className="section-paragraph">Lorem ipsum is common placeholder text used to demonstrate the graphic elements of a document or visual presentation.</p>
                    </div>
                </div>
                <div className="features-wrap">
                    {allCard}
                </div>
            </div>
        </div>
    )
}
