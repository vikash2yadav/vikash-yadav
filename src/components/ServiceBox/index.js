import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ServiceBox = (props) => {
 const [isHovered, setIsHovered] = useState(false);

 return (
   <Link to={props.link} target='_blank'>
     <div
       className={`mx-5 transition-all duration-300 ease-in-out transform ${isHovered ? 'shadow-xl' : 'shadow-md'}`}
       style={{
         ...styles.maindiv,
         backgroundColor: isHovered ? '#b91c1c' : 'white',
         color: isHovered ? 'white' : '#333',
         transform: isHovered ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
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

       <h3 className='text-xl font-semibold mb-3' style={{ transition: 'color 0.3s' }}>
         {props.title}
       </h3>

       <div className='w-full h-px mb-6 flex justify-center'>
         <div
           className='bar w-12 h-px rounded-full'
           style={{
             backgroundColor: isHovered ? 'rgba(255,255,255,0.5)' : 'rgba(185, 28, 28, 0.5)',
             transition: 'all 0.3s ease-in-out',
           }}
         ></div>
       </div>

       <p className='text-base opacity-80' style={{
         transition: 'all 0.3s',
         opacity: isHovered ? 0.9 : 0.8
       }}>
         {props.description}
       </p>

       {isHovered && (
         <div className="mt-6">
           <span className="inline-flex items-center text-sm font-medium transition-all duration-300">
             Learn more
             <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
             </svg>
           </span>
         </div>
       )}
     </div>
   </Link>
 );
};

const styles = {
 maindiv: {
   border: '1px solid rgba(0, 0, 0, 0.05)',
   padding: "20px",
   marginBottom: "30px",
   textAlign: "center",
   width: "300px",
   fontFamily: "'Inter', sans-serif",
   height: "400px" ,
   borderRadius: '8px',
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   justifyContent: 'center',
   cursor: 'pointer',
 },
 imageMainDiv: {
   display: "flex",
   justifyContent: "center",
   alignItems: "center",
   marginBottom: '20px'
 },
 iconWrapper: {
   width: '100px',
   height: '100px',
   borderRadius: '50%',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
   border: '1px solid',
   transition: 'all 0.3s ease-in-out'
 }
};

export default ServiceBox;
