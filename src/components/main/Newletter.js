import React from 'react'
import Btn from '../../common/Btn'
import Input from '../../common/Input'

export default function Newletter() {
    const inputChange = text => {
        console.log(text)
    };
    const click = e => {
        alert(e)
    }
    return (
        <div className="container-sm">
            <div className="newsletter-inner section-inner">
                <div className="newsletter-header text-center">
                    <h2 className="section-title mt-0">Stay in the know</h2>
                    <p className="section-paragraph">Lorem ipsum is common placeholder text used to demonstrate the graphic elements of a document or visual presentation.</p>
                </div>
                <div className="footer-form newsletter-form field field-grouped">
                    <div className="control control-expanded">
                        <Input inputChange={inputChange}/>
                    </div>
                    <div className="control">
                        <Btn content="Early access" click={click}/>
                    </div>
                </div>
            </div>  
        </div>
    )
}
