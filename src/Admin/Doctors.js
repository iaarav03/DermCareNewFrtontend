import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from "react-toastify";
import "../LoadingScreen.css"

const DoctorComponents = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading,setLoading]=useState(false);
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        setLoading(true)
        const { data } = await axios.get(
          "https://dermcarebackend.onrender.com/api/v1/user/doctors",
          { withCredentials: true }
        );
        setDoctors(data?.doctors);
      } catch (error) {
        toast.error(error.response?.data?.message);
      }finally{
        setLoading(false);
      }
    };
    fetchDoctors();
  }, []);

  if (doctors.length === 0) return null;

  return (
    <>
    {loading?(
      <div className="loader-container">
      <div className="loader"></div>
    </div>
    ):(  <div className="flex flex-col items-center max-h-screen overflow-y-auto no-scrollbar">
      <h2 className="text-4xl font-bold text-[#00857d] md:mb-6">Doctors</h2>
      <div className="flex flex-wrap justify-center gap-4 ">
        {doctors.map((doctor, index) => (
          <div key={index} className="relative w-full md:max-w-[24vw]">
            <img src={doctor.docAvatar.url} className="object-contain h-[35vh] w-full" alt={doctor.firstName} />
            <div className="absolute bottom-0 left-0 w-full bg-[#00857d] bg-opacity-90 py-2 px-4">
              <h1 className="text-center text-white font-bold">{doctor.firstName} {doctor.lastName}</h1>
              <p className="text-center text-white">{doctor.doctorDepartment}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    )
    }
   
</>
  );
};

export default DoctorComponents;
