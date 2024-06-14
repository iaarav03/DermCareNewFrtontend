import React from "react";
import Sidebar from "./Sidebar";
import AdminContext from "../Usecontext/AdminContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Logout = () => {
  const response = useContext(AdminContext);
  console.log(response)
  const {AdminAuth}=response
  const {setAdminAuth}=response
  const navigate=useNavigate();


  const handleLogout = () => {
    // Add your logout logic here
    Cookies.remove('adminToken');
    setAdminAuth("initial");
    navigate('/')
  };

  const handleCancel = () => {
    // Add your cancel logic here, e.g., navigate to another page or close modal4
    navigate('/dashboard')
  };

  return (
    <div className="flex flex-row">
      <div>
        <Sidebar />
      </div>
      <div className="w-full bg-slate-200">
        <div className="flex flex-col h-[80vh] justify-center items-center p-6">
          <div className="bg-white shadow-md rounded-lg p-8 text-center md:w-[30vw]">
            <h1 className="text-2xl font-bold mb text-gray-800">Are you sure?</h1>
            <h1 className="text-l  mb-6 text-gray-800">This action cannot be undone!</h1>
            <div className="flex space-x-4 justify-center">
            <button 
             onClick={handleCancel}
            className="self-center relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white text-black  rounded-md group-hover:bg-opacity-0">
                Cancel
              </span>
            </button>
            <button 
            onClick={handleLogout}
            className="self-center relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group hover:scale-105 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
              <span className="text-white relative px-5 py-2.5 transition-all ease-in duration-75 bg-gradient-to-br from-green-400 to-blue-600  rounded-md group-hover:bg-opacity-0">
                Logout
              </span>
            </button>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logout;
