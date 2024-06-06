import React from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

const Acd = ({ title, index, openIndex, desc, setOpenIndex, symptoms }) => {
  const isOpen = openIndex === index;

  const handleClick = () => {
    setOpenIndex(isOpen ? null : index);
  };
  const descc=desc.replace(/<\/?p>/g, '');
  

  return (
    <>
      <div className="max-w-[70vw] mx-auto mb-4">
        {/* Horizontal line at the start */}
        <hr className="border-t border-gray-300 mb-4" />

        <div className=" overflow-hidden">
          <div
            className="flex items-center justify-between p-4 cursor-pointer "
            onClick={handleClick}
          >
            <h2 className="text-lg font-semibold">{title}</h2>
            {isOpen ? (
              <FaChevronUp className="text-gray-600" />
            ) : (
              <FaChevronDown className="text-gray-600" />
            )}
          </div>
          {isOpen && (
            <div className="p-4 flex md:flex-row flex-col justify-between ">
            <div className="md:w-2/3"> 
             <p className="w-full">{descc}</p>
            </div>
            <div> 
               {symptoms && (
                <ul className="list-disc pl-4 mt-2">
                  {symptoms.map((symptom, idx) => (
                    <li key={idx}>{symptom}</li>
                  ))}
                </ul>
              )}
            </div>
             
           
            </div>
          )}
        </div>

        {/* Horizontal line at the end */}
 
      </div>
    </>
  );
};

export default Acd;
