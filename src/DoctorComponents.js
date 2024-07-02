import React from 'react';
import { useState } from 'react';
import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.png";
import img3 from "./assets/img3.jpeg";
import img4 from "./assets/img4.jpg";
import { FiArrowRight } from 'react-icons/fi';
import { FaArrowLeft } from 'react-icons/fa';

const store = [
  {
    id:1,
    imgAdd:img1,
    heading:"Dr. Emily Johnson, MD",
    para:"Dr. Emily Johnson is a board-certified dermatologist with over 15 years of experience in acne treatment, skin cancer screening, and cosmetic procedures. She is dedicated to providing personalized and up-to-date care."
  },
  {
    id:2,
    imgAdd:img2,
    heading:"Dr. Michael Smith, MD",
    para:"Dr. Michael Smith specializes in treating chronic skin conditions like eczema and psoriasis. His compassionate approach and expertise in dermatosurgery make him a valued member of our team."
  },
  {
    id:3,
    imgAdd:img3,
    heading:"Dr. David Lee, MD",
    para:"Dr. David Lee specializes in dermatopathology and the diagnosis of complex skin disorders. His meticulous approach ensures effective treatment plans for challenging cases."
  },
  {
    id:4,
    imgAdd:img4,
    heading:"Dr. Sarah Thompson, DO",
    para:"Dr. Sarah Thompson focuses on skin rejuvenation and anti-aging treatments. She combines her extensive knowledge with the latest techniques to help patients achieve youthful, healthy skin."
  },
  {
    id:5,
    imgAdd:img2,
    heading:"Dr. Michael Smith, MD",
    para:"Dr. Michael Smith specializes in treating chronic skin conditions like eczema and psoriasis. His compassionate approach and expertise in dermatosurgery make him a valued member of our team."
  },
 
 
];

const DoctorComponents = () => {
  const [indices, setIndices] = useState([0, 1, 2]);

  const rightClick = () => {
    setIndices(indices.map(index => (index + 1) % store.length));
  };

  const leftClick = () => {
    setIndices(indices.map(index => (index - 1 + store.length) % store.length));
  };

 



  return (
            <>

<button onClick={leftClick}><FaArrowLeft/></button>
         {indices.map((index)=>(
 <div className='hidden md:block relative w-full max-w-[40vw] group ' >
          <img src={store[index].imgAdd} className='object-cover h-[60vh] w-full' alt={store[index].heading}></img>
          <div className='hidden group-hover:block absolute bottom-0 left-0 w-full bg-[#00857d] bg-opacity-90 py-2 px-4'>
            <h1 className='text-center text-white font-bold'>{store[index].heading}</h1>
            <p className='text-center text-white'>
              {store[index].para}
            </p>
          </div>
        </div>
         ))}
         <div className=' md:hidden relative w-full max-w-[80vw] group ' >
          <img src={store[indices[0]].imgAdd} className='object-cover h-[60vh] w-full' alt={store[indices[0]].heading}></img>
          <div className='hidden group-hover:block absolute bottom-0 left-0 w-full bg-[#00857d] bg-opacity-90 py-2 px-4'>
            <h1 className='text-center text-white font-bold'>{store[indices[0]].heading}</h1>
            <p className='text-center text-white'>
              {store[indices[0]].para}
            </p>
          </div>
        </div>
       
        
        <button onClick={rightClick}><FiArrowRight/></button>
      
          </>
      );

}

export default DoctorComponents;
