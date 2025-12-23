import React from 'react'
import { Link } from 'react-router-dom'

const Box = (props) => {
  return (
    <>
      <div className='mx-5 h-30 hover:shadow-md' style={styles.maindiv} >
        <div style={styles.imageMainDiv}>
          <div style={{ width: "100px", height: "100px", borderRadius: "50%" }}
            className='mb-5 bg-red-600 flex justify-center items-center'
          >
            <div className='text-white' >
              {props.logo}
            </div>
          </div>

        </div>
        <h1 className='text-black text-xl font-semibold mb-5'>{props.title}</h1>

        <p className='text-m text-gray-500'>
          {props.add ? (props.add)
            : (<Link to={props?.to} className='text-m text-blue-500' target='_blank'>
              {props.description}
            </Link>
            )
          }
        </p>
      </div>
    </>
  )
}


const styles = {
  maindiv: {
    border: '1px solid white',
    borderRadius: "5px",
    padding: "20px 10px",
    marginBottom: "30px",
    paddingBottom:"30px",
    textAlign: "center",
    width: "250px",
    height: "auto",
    transition: 'all 0.5s',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)', // Add box shadow here
  },
  imageMainDiv: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }
}

export default Box