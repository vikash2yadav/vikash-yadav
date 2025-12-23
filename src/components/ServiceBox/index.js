import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ServiceBox = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link>
      <div
        className='mx-5 h-30 hover:shadow-md hover:-translate-y-2'
        style={{
          ...styles.maindiv,
          backgroundColor: isHovered ? 'red' : 'white', // Change background color on hover
          color: isHovered ? 'white' : 'black', // Change text color on hover
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div style={styles.imageMainDiv}>
          <img
            style={{ width: "100px", height: "100px", borderRadius: "50%" }}
            className='mb-8'
            src={props.logo}
            alt=""
          />
        </div>
        <h1 className='text-m mb-1'>{props.title}</h1>
        <div className='w-full h-0.5 mb-8 flex justify-center'>
          <div
            className='bar w-8 h-0.5 rounded-lg'
            style={{
              backgroundColor: isHovered ? 'white' : '#b91c1c', // Change bar color on hover
              transition: 'background-color 0.5s', // Smooth transition
            }}
          ></div>
        </div>
        <p className='text-xl'>{props.description}</p>
      </div>
    </Link>
  );
};

const styles = {
  maindiv: {
    border: '1px solid white',
    padding: "20px",
    marginBottom: "30px",
    textAlign: "center",
    width: "300px",
    fontFamily: "Arial",
    height: "350px",
    transition: 'all 0.5s',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
  },
  imageMainDiv: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }
};

export default ServiceBox;
