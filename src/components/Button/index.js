import React from 'react'

const Button = (props) => {
  return (
    <>
      <button
        name={props.name}
        className={props.className}
        type={props.type}
        style={props.style}
        onClick={props.onClick}
      >
      {props.label} 
      </button>
    </>
  )
}

export default Button