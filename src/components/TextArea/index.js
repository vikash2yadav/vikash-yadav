import React from 'react'

const TeaxtArea = (props) => {
  return (
    <>
    <textarea name={props.name}
     id={props.name} 
     cols={props.cols} 
     rows={props.rows} 
     className={props.className}
     style={props.style}
     placeholder={props.placeholder}
     >

    </textarea>
    </>
  )
}

export default TeaxtArea