import { useState, useEffect } from 'react';
import axios from 'axios';
import React from 'react';
import Sidebar from './Sidebar';
import { toast } from "react-toastify";
import { FaCheckCircle, FaTimesCircle, FaClock, FaCalendarCheck, FaCalendarTimes, FaCalendarDay } from 'react-icons/fa';

const Dashboard = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const { data } = await axios.get(
          "https://dermcarebackend.onrender.com/api/v1/appointment/getall",
          { withCredentials: true }
        );
        console.log(data);
        setAppointments(data.appointments);
      } catch (error) {
        setAppointments([]);
      }
    };
    fetchAppointments();
  }, []);

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Accepted':
        return <FaCheckCircle className="text-green-600" />;
      case 'Rejected':
        return <FaTimesCircle className="text-red-600" />;
      case 'Pending':
      default:
        return <FaClock className="text-yellow-600" />;
    }
  };

  const handleUpdateStatus = async (appointmentId, status) => {
    try {
      const { data } = await axios.put(
        `https://dermcarebackend.onrender.com/api/v1/appointment/update/${appointmentId}`,
        { status },
        { withCredentials: true }
      );
      setAppointments((prevAppointments) =>
        prevAppointments.map((appointment) =>
          appointment._id === appointmentId
            ? { ...appointment, status }
            : appointment
        )
      );
      toast.success(data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const appointmentStats = {
    total: appointments.length,
    accepted: appointments.filter(a => a.status === 'Accepted').length,
    rejected: appointments.filter(a => a.status === 'Rejected').length,
    pending: appointments.filter(a => a.status === 'Pending').length,
  };

  return (
    <div className='flex flex-row'>
      <div className=''>
        <Sidebar />
      </div>
      <div className='w-full p-4  max-h-screen no-scrollbar overflow-y-auto'>
      <div className='hidden md:block relative  bg-[#2b8787] h-[20vh] '>
 <div className="flex flex-row w-full gap-7 ml-10 absolute top-1/2 h-[22vh]  ">
          <div className="bg-white p-6 w-[15vw] rounded-lg shadow-md flex items-center">
            <FaCalendarDay className="text-4xl text-blue-500 mr-4" />
            <div>
              <h3 className="text-xl font-semibold">Total Appointments</h3>
              <p className="text-2xl">{appointmentStats.total}</p>
            </div>
          </div>
          <div className="bg-white p-6 w-[15vw] rounded-lg shadow-md flex items-center">
            <FaCheckCircle className="text-4xl text-green-500 mr-4" />
            <div>
              <h3 className="text-xl font-semibold">Accepted Appointments</h3>
              <p className="text-2xl">{appointmentStats.accepted}</p>
            </div>
          </div>
          <div className="bg-white p-6 w-[15vw] rounded-lg shadow-md flex items-center">
            <FaTimesCircle className="text-4xl text-red-500 mr-4" />
            <div>
              <h3 className="text-xl font-semibold">Rejected Appointments</h3>
              <p className="text-2xl">{appointmentStats.rejected}</p>
            </div>
          </div>
          <div className="bg-white p-6 w-[15vw] rounded-lg shadow-md flex items-center">
            <FaClock className="text-4xl text-yellow-500 mr-4" />
            <div>
              <h3 className="text-xl font-semibold">Pending Appointments</h3>
              <p className="text-2xl">{appointmentStats.pending}</p>
            </div>
          </div>
        </div>
      </div>
      
        <div className=" md:hidden grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
            <FaCalendarDay className=" text-blue-500 mr-4" />
            <div>
              <h3 className=" font-semibold">Total Appointments</h3>
              <p className="">{appointmentStats.total}</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
            <FaCheckCircle className=" text-green-500 mr-4" />
            <div>
              <h3 className=" font-semibold">Accepted Appointments</h3>
              <p className="">{appointmentStats.accepted}</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
            <FaTimesCircle className=" text-red-500 mr-4" />
            <div>
              <h3 className=" font-semibold">Rejected Appointments</h3>
              <p className="">{appointmentStats.rejected}</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
            <FaClock className=" text-yellow-500 mr-4" />
            <div>
              <h3 className=" font-semibold">Pending Appointments</h3>
              <p className="">{appointmentStats.pending}</p>
            </div>
          </div>
        </div>


     

        <div className="  md:mt-32  w-full z-10 ">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-white uppercase bg-gray-500 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3 rounded-s-lg">
                  Patient
                </th>
                <th scope="col" className="px-6 py-3">
                  Date
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
              {appointments.map((e) => (
                <tr
                  className="bg-white  dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-300"
                  key={e._id}
                >
                  <th
                    scope="row"
                    className="px-6 text-l py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                  >
                    {`${e.firstName} ${e.lastName}`}
                  </th>
                  <td className="px-6  font-semibold py-4">{e.appointment_date}</td>
                  <td className="px-6 py-4  text-xl">{`${e.doctor.firstName} ${e.doctor.lastName}`}</td>
                  <td className="px-6 py-4 text-xl">{e.department}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      {getStatusIcon(e.status)}
                      <select
                        className="p-2 rounded-lg bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
                        value={e.status}
                        onChange={(ee) => handleUpdateStatus(e._id, ee.target.value)}
                      >
                        <option value="Pending">Pending</option>
                        <option value="Accepted">Accepted</option>
                        <option value="Rejected">Rejected</option>
                      </select>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
