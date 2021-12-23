import React from 'react'
import { useContext } from 'react';
import { CardContext } from '../context/context';
import Card from "./Card";
import leaf from "../leaf.svg";

export default function Feature() {
    const { datas } = useContext(CardContext)

    const allCard = datas.map(data => (
        <Card icon={leaf} key={data.id} {...data} />
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
