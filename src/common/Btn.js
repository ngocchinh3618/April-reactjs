import React from 'react'

export default function Btn(props) {
    const click = () => {
        props.click("Hi")
      }
    return (    
        <>
            <div className="button button-primary button-block button-shadow" onClick={click} >{props.content}</div>
        </>
    )
}
