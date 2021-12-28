import React from 'react'

export default function Input(props) {
  const handleChange = e => {
    props.inputChange(e.target.value)
  }
  return (
    <>
      <input className="input" type="email" name="email" placeholder="Your best email…" onChange={handleChange} />
    </>
  )
}
