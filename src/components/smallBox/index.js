import React, { useState, useEffect, useRef } from 'react';

const SmallBox = ({ title, description }) => {
 const [count, setCount] = useState(0);
 const [hasAnimated, setHasAnimated] = useState(false);
 const boxRef = useRef(null);

 useEffect(() => {
   const observer = new IntersectionObserver(
     ([entry]) => {
       if (entry.isIntersecting && !hasAnimated) {
         startCounting();
         setHasAnimated(true);
       }
     },
     { threshold: 0.3 }
   );

   if (boxRef.current) observer.observe(boxRef.current);

   return () => {
     if (boxRef.current) observer.unobserve(boxRef.current);
   };
 }, [hasAnimated]);

 const startCounting = () => {
   let start = 0;
   const end = parseInt(title, 10) || 0;
   const duration = 2000; // fixed 2 seconds
   const frameRate = 16; // ~60fps
   const totalFrames = Math.round(duration / frameRate);
   const increment = end / totalFrames;

   const timer = setInterval(() => {
     start += increment;
     if (start >= end) {
       start = end;
       clearInterval(timer);
     }
     setCount(Math.floor(start));
   }, frameRate);
 };

 return (
   <div
     ref={boxRef}
     className="hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-out rounded-xl"
     style={styles.maindiv}
   >
     {/* Counter */}
     <h1 className="text-4xl font-bold text-red-600 mb-3">
       {count}
     </h1>

     {/* Description */}
     <p className="text-lg text-gray-600">{description}</p>
   </div>
 );
};

const styles = {
 maindiv: {
   border: '1px solid #f3f3f3',
   padding: '20px 10px',
   textAlign: 'center',
   width: '250px',
   height: 'auto',
   transition: 'all 0.5s',
   boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
   background: 'white',
 },
};

export default SmallBox;

