import React, { useEffect, useState } from "react";
import axios from "axios";

import bg3 from "./assets/bg3.jpg";

import PatientApt from "./PatientApt";

export default function Appointment() {
  const [apoint, setApoint] = useState([]);
  const [loading, setLoading] = useState(false);
  const getdetail = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://dermcarebackend.onrender.com/api/v1/appointment/appointment",
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      setApoint(response?.data?.data);
      console.log(apoint);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getdetail();
  }, []);

  return (
    <div>
      <div
        className=" bg-cover bg-center"
        style={{ backgroundImage: `url(${bg3})` }}
      >
      {loading?(
        <div className="max-w-[80vw] mx-auto text-center">
            <div className="relative min-h-screen overflow-auto bg-white bg-opacity-70">
                <p className="text-xl font-semibold mb-10 ">Your Appointments</p>
                
                <table className="w-full text-sm text-left rtl:text-right">
                    <thead className="text-xs uppercase">
                        <tr>
                            <th scope="col" className="px-6 py-3 rounded-s-lg">
                                Appointment Date
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Doctor
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Department
                            </th>
                            <th scope="col" className="px-6 py-3 rounded-e-lg">
                                Status
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                   
                 
                    </tbody>
                    
                </table>
                <div className="">
                         <div className="loader-container ">
      <div className="loader"></div>
    </div>
                    </div>
            </div>
        </div>
        

      ):( <div className="md:max-w-[80vw] mx-auto text-center">
          <PatientApt appointments={apoint} loading={loading} />
        </div>)}
       
      </div>
    </div>
  );
}
