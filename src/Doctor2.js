import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast,ToastContainer } from 'react-toastify';
import login from "./assets/login.jpg"
import bg4 from "./assets/bg4.jpg";
import 'react-toastify/dist/ReactToastify.css';
import './LoadingScreen.css'

function AddPatient() {
  const navigate = useNavigate();
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [lastdoc, setLastdoc] = useState([]);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dob: '',
    gender: '',
    appointment_date: '',
    department: '',
    doctor_firstName: '',
    doctor_lastName: '',
    address: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === 'department') {
      setSelectedDepartment(value);
      const filtered = doctors.filter(
        (doctor) => doctor.doctorDepartment === value
      );
      setFilteredDoctors(filtered);
      setLastdoc([]); // Reset the lastdoc state when department changes
    }

    if (name === 'doctor_firstName') {
      const filteredLastNames = filteredDoctors.filter(
        (doctor) => doctor.firstName === value
      );
      setLastdoc(filteredLastNames);
    }
  };

  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const { data } = await axios.get(
          'https://dermcarebackend.onrender.com/api/v1/user/doctors',
          { withCredentials: true }
        );
        setDoctors(data.doctors);
        console.log(data.doctors);
      } catch (error) {
        console.error('Error fetching doctors:', error);
      }
    };
    fetchDoctors();
  }, []);
  const hadnleClick=()=>{
    navigate('/appointment')
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post(
        'https://dermcarebackend.onrender.com/api/v1/appointment/post',
        {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          dob: formData.dob,
          gender: formData.gender,
          appointment_date: formData.appointment_date,
          department: formData.department,
          doctor_firstName: formData.doctor_firstName,
          doctor_lastName: formData.doctor_lastName,
          address: formData.address,
        },
        {
          withCredentials: true,
          headers: { 'Content-Type': 'application/json' },
        }
      );
      console.log(response);

      if (response.status === 200) {
        console.log('Patient added successfully');

      

        toast.success('Patient added successfully', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        navigate('/appointment');
      } else {
        console.error('Failed to add patient');
        toast.error('Failed to Add');
      }
    } catch (error) {
      console.error('Error:', error);
    }finally{
     setLoading(false);
     
    }
  };

  return (
    <>

   
    {
      loading? (
        <div
         className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${login})`}}>

    
        <div className="loader-container">
      <div className="loader"></div>
    </div>
        </div>
      ):(
  <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${login})`}}
    >
    
      <div className="bg-white  bg-opacity-90 shadow-md rounded-lg p-8 w-full max-w-2xl">
       <button
          className="bg-gradient-to-r from-emerald-500 to-emerald-900 text-white font-bold py-3 px-6 rounded-full mb-4 hover:scale-95 transition duration-300"
         onClick={hadnleClick}
        >
          View Your Appointments
        </button>
        <h2 className="text-3xl font-semibold mb-6 text-center text-[#2b8787]">Appointment Form</h2>
       
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="firstName" className="text-gray-600 font-bold mb-2 block">
              First Name:
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="p-4 w-full rounded-full border border-gray-300 focus:outline-none focus:border-indigo-500"
              placeholder="Enter Your First Name"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className="text-gray-600 font-bold mb-2 block">
              Last Name:
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="p-4 w-full rounded-full border border-gray-300 focus:outline-none focus:border-indigo-500"
              placeholder="Enter Your Last Name"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="text-gray-600 font-bold mb-2 block">
              Email:
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="p-4 w-full rounded-full border border-gray-300 focus:outline-none focus:border-indigo-500"
              placeholder="Enter Your Email"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="text-gray-600 font-bold mb-2 block">
              Phone:
            </label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="p-4 w-full rounded-full border border-gray-300 focus:outline-none focus:border-indigo-500"
              placeholder="Enter Your Phone Number"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="dob" className="text-gray-600 font-bold mb-2 block">
              Date of Birth:
            </label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="p-4 w-full rounded-full border border-gray-300 focus:outline-none focus:border-indigo-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="gender" className="text-gray-600 font-bold mb-2 block">
              Gender:
            </label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="p-4 w-full rounded-full border border-gray-300 focus:outline-none focus:border-indigo-500"
              required
            >
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="appointment_date" className="text-gray-600 font-bold mb-2 block">
              Appointment Date:
            </label>
            <input
              type="date"
              name="appointment_date"
              value={formData.appointment_date}
              onChange={handleChange}
              className="p-4 w-full rounded-full border border-gray-300 focus:outline-none focus:border-indigo-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="department" className="text-gray-600 font-bold mb-2 block">
              Department:
            </label>
            <select
              name="department"
              value={formData.department}
              onChange={handleChange}
              className="p-4 w-full rounded-full border border-gray-300 focus:outline-none focus:border-indigo-500"
              required
            >
              <option value="">Select</option>
              {doctors.map((doctor) => (
                <option key={doctor._id} value={doctor.doctorDepartment}>
                  {doctor.doctorDepartment}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="doctor_firstName" className="text-gray-600 font-bold mb-2 block">
              Doctor's First Name:
            </label>
            <select
              name="doctor_firstName"
              value={formData.doctor_firstName}
              onChange={handleChange}
              className="p-4 w-full rounded-full border border-gray-300 focus:outline-none focus:border-indigo-500"
              required
            >
              <option value="">Select</option>
              {filteredDoctors.map((doctor) => (
                <option key={doctor._id} value={doctor.firstName}>
                  {doctor.firstName}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="doctor_lastName" className="text-gray-600 font-bold mb-2 block">
              Doctor's Last Name:
            </label>
            <select
              name="doctor_lastName"
              value={formData.doctor_lastName}
              onChange={handleChange}
              className="p-4 w-full rounded-full border border-gray-300 focus:outline-none focus:border-indigo-500"
              required
            >
              <option value="">Select</option>
              {lastdoc.map((doctor) => (
                <option key={doctor._id} value={doctor.lastName}>
                  {doctor.lastName}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="address" className="text-gray-600 font-bold mb-2 block">
              Address:
            </label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="resize-none p-4 w-full rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500"
              placeholder="Enter Address"
              required
            />
          </div>
          <div className="flex justify-end">
            <button
             className=" bg-gradient-to-r from-emerald-500 to-emerald-900 hover:scale-95 px-6 py-2 rounded-md capitalize text-white font-bold hover:opacity-90 ease-in duration-200 font-l"
              type="submit"
            >
              Done
            </button>
          </div>
        </form>
      </div>
    </div>
      )
    }
    <ToastContainer />
  
    </>
  );
}

export default AddPatient;
