import React from 'react'

const Input = (props) => {
   return (
       <>
           <input type={props.text}
               name={props.name}
               value={props.value}
               placeholder={props.placeholder}
               style={props.style}
               className={props.className}
               onChange={props.onChange} />
       </>
   )
}

export default Input
