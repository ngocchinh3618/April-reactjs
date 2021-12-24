import React from 'react'

export default function Btn(props) {
    return (
        <>
        <a className="button button-primary button-block button-shadow" href="#">{props.content}</a>
        </>
    )
}
