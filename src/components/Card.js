import React from 'react'

export default function card(props) {
  return (
    <div className="feature text-center is-revealing">
      <div className="feature-inner">
        <div className="feature-icon" style={{ background: props.color }}>
          <img src={props.icon} />
        </div>
        <h4 className="feature-title h3-mobile mb-8">{props.title}</h4>
        <p className="text-sm">{props.content}</p>
      </div>
    </div>
  )
}
