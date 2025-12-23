import React from 'react'

const TeaxtArea = (props) => {
 return (
   <>
     <textarea name={props.name}
       value={props.value}
       id={props.name}
       cols={props.cols}
       rows={props.rows}
       className={props.className}
       style={props.style}
       placeholder={props.placeholder}
       onChange={props.onChange}
     >

     </textarea>
   </>
 )
}

export default TeaxtArea
