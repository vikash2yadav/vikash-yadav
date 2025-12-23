import React from 'react'
import Button from '@mui/material/Button';

const ButtonC = (props) => {
  return (
    <>
    <Button 
    variant={props.variant}
    style={props.style}
    className={props.className}
    color={props.color}
    >{props.label}
    </Button>
    </>
  )
}

export default ButtonC