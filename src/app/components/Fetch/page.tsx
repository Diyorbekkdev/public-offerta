'use client'
import React, { useEffect, useState } from 'react'
import parse from 'html-react-parser';
const Fetch = () => {
  const [data, setData] = useState([]);

  
  const fetchData = async () => {
      try {
         const res = await fetch("https://backend.green-go.uz/v1/public/");
         const {text} = await res.json();
         setData(text); 
         console.log(data);
      } catch (error) {
         console.error("Error fetching data:", error);
      }
   }

   useEffect(() => {
      fetchData();
   }, []);
    
  return (
    <div>
         {parse(`${data}`)}
    </div>
  )
}

export default Fetch