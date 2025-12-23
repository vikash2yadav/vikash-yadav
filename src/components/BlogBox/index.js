import React from 'react'
import "./blog.css"

const BlogBox = (props) => {
  return (
    <>
      <div className='blog-box mx-5 h-30 hover:shadow-md' style={styles.maindiv} >
        <div style={styles.imageMainDiv}>
          <div style={{ width: "100%", height: "150px" }}
            className='mb-5 bg-red-100 flex '
          >
               <img style={styles.img} className='w-full h-full' src={props?.image} alt="" />
          </div>
          <p className='px-2 text-xs text-gray-400 mb-5'>{props.date} | {props.feild}</p>
          <h1 className='text-m mb-5 px-2'>{props.title}</h1>
          <p className='px-2 mb-5 text-gray-500'>{props.description}</p>
        </div>
      </div>
    </>
  )
}


const styles = {
  maindiv: {
    border: '1px solid white',
    marginBottom: "30px",
    paddingBottom: "30px",
    textAlign: "center",
    width: "300px",
    height: "auto",
    transition: 'all 0.5s',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Add box shadow here
  },
  imageMainDiv: {
    display: "flex",
    // justifyContent: "center",
    flexDirection: "column",
    textAlign: "left"
  }
}

export default BlogBox