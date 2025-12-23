import React from 'react'
import { Link } from 'react-router-dom'

const SkillBox = (props) => {
  return (
    <>
  <Link>
  <div className={props.className} style={styles.maindiv} >
  <div style={styles.imageMainDiv} className='text-xl'>
    {props.title}
    <img style={styles.image} src={props.logo} alt="" className='h-5 w-5 mx-2'/>
    </div>
  </div>
  </Link> 
    </>
  )
}

const styles = {
    maindiv:{
        border: '1px solid',
        padding: "20px",
        marginBottom:"30px",
        minWidth: "250px",
        transition: "0.5s"
    },
    imageMainDiv: {
      display: "flex",
      justifyContent: "center",
      alignItems:"center",
      fontFamily: 'Roboto'
    },
    image:{
        borderRadius: "50%"
    }
}


export default SkillBox