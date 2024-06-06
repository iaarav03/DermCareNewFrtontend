import React from 'react';
import { useState } from 'react';
import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.png";
import img3 from "./assets/img3.jpeg";
import { FiArrowRight } from 'react-icons/fi';
import { FaArrowLeft } from 'react-icons/fa';

const store = [
  {
    id:1,
    imgAdd:img1,
    heading:"Dentist",
    para:"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment,"
  },
  {
    id:2,
    imgAdd:img2,
    heading:"Dentist",
    para:"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment,"
  },
  {
    id:3,
    imgAdd:img3,
    heading:"Dentist",
    para:"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment,"
  },
  {
    id:3,
    imgAdd:img3,
    heading:"Dentist",
    para:"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment,"
  },
  {
    id:2,
    imgAdd:img2,
    heading:"Dentist",
    para:"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment,"
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
