import React from 'react'

const Input = (props) => {
    return (
        <>
            <input type={props.text}
                placeholder={props.placeholder}
                style={props.style}
                className={props.className} />
        </>
    )
}

export default Input