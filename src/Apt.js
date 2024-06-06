import React, { useEffect, useState } from "react";
import axios from "axios";
import AddPatient from "./Doctor2";


export default function Apt() {
  const[apoint,setApoint]=useState([]);
  const getdetail = async () => {
    try {
      const response = await axios.get(
        'https://dermcarebackend.onrender.com/api/v1/appointment/appointment',
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      setApoint(response?.data?.data);
      console.log(apoint);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(()=>{
    getdetail();
    
   
  },[])
  
  return (
 
     
    <div >
    <div>
   
       <AddPatient/>
    </div>
        
   
  
      </div>
        
   
  );
}
