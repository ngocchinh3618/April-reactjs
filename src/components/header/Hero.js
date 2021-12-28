import React from 'react'
import Btn from '../../common/Btn';
import Input from '../../common/Input';
import HeroShape from '../common/HeroShape'
import HeroMainShape from '../common/HeroMainShape'

export default function Hero() {
    const inputChange = text => {
        console.log(text)
    };
    const click = e => {
        alert(e)
    }
    return (
        <div className="container">
            <div className="hero-inner">
                <div className="hero-copy">
                    <h1 className="hero-title mt-0">Landing template for startups</h1>
                    <p className="hero-paragraph">Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.</p>
                    <div className="hero-form field field-grouped">
                        <div className="control control-expanded">
                            <Input inputChange={inputChange}/>
                        </div>
                        <div className="control">
                            <Btn content="Early access" click={click} />
                        </div>
                    </div>
                </div>
                <div className="hero-illustration">
                    <div className="hero-shape hero-shape-1">
                        <HeroShape width={40} height={40} cx={20} cy={20} r={20} fill="#FFD8CD" />
                    </div>
                    <div className="hero-shape hero-shape-2">
                        <HeroShape width={88} height={88} cx={44} cy={44} r={44} fill="#FFD2DA" />
                    </div>
                    <div className="hero-main-shape">
                        <HeroMainShape />
                    </div>
                </div>
            </div>
        </div>
    )
}
