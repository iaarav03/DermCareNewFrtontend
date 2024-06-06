import React, { useState, useEffect, useContext } from 'react';
import Cookies from 'js-cookie';
import { useFormik } from 'formik';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import UserContext from '../Usecontext/patientContext';
import login from "../assets/login.jpg"
import 'react-toastify/dist/ReactToastify.css';

const PatientRegister = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const response = useContext(UserContext);

  const { patienttAuth, setPatientAuth } = response;

  useEffect(() => {
    const cook = Cookies.get('patientToken');
    if (cook) {
      setPatientAuth(Cookies.get('patientToken'));
    }

    if (patienttAuth !== 'initial') {
      navigate('/apt');
    }
  }, [patienttAuth, navigate, setPatientAuth]);

  const handleAlreadyRegisteredClick = () => {
    navigate('/user');
  };

  const fetchData = async (values) => {
    try {
      setLoading(true);
      toast.info('Registering...', { autoClose: false });

      const response = await axios.post(
        'https://dermcarebackend.onrender.com/api/v1/user/patient/register',
        values,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json"
          }
        }
      );

      if (response.data.status === 'username already exists') {
        toast.dismiss();
        toast.error('Username already exists');
      } else {
        setPatientAuth("200");
        toast.dismiss();
        toast.success('Registration successful');
        setTimeout(() => navigate('/apt', { replace: true }), 2000);
      }
    } catch (error) {
      setError('Error registering user.');
      console.error('Error fetching data:', error);
    }finally{
      setLoading(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      dob: '',
      gender: '',
      password: ''
    },
    onSubmit: (values) => fetchData(values),
  });

  if (patienttAuth === 200) {
    return <h1>Loading</h1>;
  }

  return (
    <>
    {loading?(
      <div className="loader-container">
      <div className="loader"></div>
    </div>

    ):(<div className="min-h-screen flex items-center justify-center bg-cover bg-center bg-gray-100 "
       style={{ backgroundImage: `url(${login})`}}
      >
        <div className="bg-white p-5 rounded-lg shadow-lg w-full max-w-md bg-opacity-85 mb-16 ">
          <h2 className="text-2xl font-bold text-center text-[#2b8787] mb-4">Register</h2>
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-4 flex space-x-4">
              <div className="w-1/2">
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                  First Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  className="mt-1 p-2 w-full border border-[#2b8787] rounded-lg"
                  {...formik.getFieldProps('firstName')}
                />
              </div>
              <div className="w-1/2">
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                  Last Name
                </label>
                <input
                  id="lastName"
                  type="text"
                  className="mt-1 p-2 w-full border border-[#2b8787] rounded-lg"
                  {...formik.getFieldProps('lastName')}
                />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                id="email"
                type="text"
                className="mt-1 p-2 w-full border border-[#2b8787] rounded-lg"
                {...formik.getFieldProps('email')}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone
              </label>
              <input
                id="phone"
                type="text"
                className="mt-1 p-2 w-full border border-[#2b8787] rounded-lg"
                {...formik.getFieldProps('phone')}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="dob" className="block text-sm font-medium text-gray-700">
                Date of Birth
              </label>
              <input
              
                id="dob"
                type="date"
                className="mt-1 p-2 w-full border border-[#2b8787] rounded-lg"
                {...formik.getFieldProps('dob')}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
                Gender
              </label>
              <select
                id="gender"
                className="mt-1 p-2 w-full border border-[#2b8787] rounded-lg"
                {...formik.getFieldProps('gender')}
              >
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                type="password"
                className="mt-1 p-2 w-full border border-[#2b8787] rounded-lg"
                {...formik.getFieldProps('password')}
              />
            </div>
            <div className="mb-4 text-center" >
              <button
                type="submit"
                className=" bg-gradient-to-r from-emerald-500 to-emerald-900 px-6 py-2 rounded-md capitalize text-white font-bold hover:opacity-90 ease-in duration-200 font-l"
              >
                Register
              </button>
            </div>
          </form>
          <div>
            {error && <p className="text-red-500">{error}</p>}
          </div>
        </div>
      </div>)}
      
      <ToastContainer />
    </>
  );
};

export default PatientRegister;
