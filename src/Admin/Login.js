import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from 'react';
import Cookies from 'js-cookie';
import AdminContext from '../Usecontext/AdminContext';
import login from "../assets/login.jpg"


const AdminLogin = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const response=useContext(AdminContext);


  const {AdminAuth}=response
  const {setAdminAuth}=response
  useEffect(() => {
    const cook=Cookies.get('adminToken')
    if(cook){
      
    setAdminAuth(cook)
    }

      
    if (AdminAuth !== 'initial') {
      navigate('/dashboard');
    }
  }, [AdminAuth, navigate]);




  const fetchData = async (values) => {
    try {
      setLoading(true);
      toast.info('Login...');
     

      const response = await axios.post('https://dermcarebackend.onrender.com/api/v1/user/login',
       values,
       {
        withCredentials: true,
        headers: { "Content-Type": "application/json" },
       }

      );
      
      if (response.status ===400) {
        toast.dismiss();
        toast.error('Something wrong');
      } else {
        toast.dismiss();
        toast.success('Login successful');
        navigate('/dashboard')
    
      }
    } catch (error) {
        toast.dismiss();
        toast.error('Login failed')
      setError('Error Login user.');
      console.error('Error fetching data:', error);
    }finally{
      setLoading(false);
    }
  };


  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
      role:"Admin",

     
    },
    onSubmit: (values) => fetchData(values),
  });


  
  return (
    <>
    {loading ? (

      <div className="loader-container">
      <div className="loader"></div>
    </div>
    ):( <div className="min-h-screen flex items-center justify-center bg-gray-100 bg-cover bg-center"
      style={{ backgroundImage: `url(${login})`}}
      >
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md bg-opacity-85 ">
          <h2 className="text-3xl  font-bold text-[#2b8787] mb-4 text-center">Welcome Admin</h2>
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email  
              </label>
              <input
                id="email"
                type="text"
                placeholder='For demo please use :- dermcare@gmail.com'
                className="mt-1 p-2 w-full border border-red-300 rounded-lg"
                {...formik.getFieldProps('email')}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder='dermcare'
                className="mt-1 p-2 w-full border border-red-300 rounded-lg"
                {...formik.getFieldProps('password')}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
               Confirm Password
              </label>
              <input
                id="confirmPassword"
                type="password"
                placeholder='dermcare'
                className="mt-1 p-2 w-full border border-red-300 rounded-lg"
                {...formik.getFieldProps('confirmPassword')}
              />
            </div>
           
            <div className="mb-4 text-center">
              <button
                type="submit"
                className=" bg-gradient-to-r from-emerald-500 to-emerald-900 px-6 py-2 rounded-md capitalize text-white font-bold hover:opacity-90 ease-in duration-200 font-l"
              >
                Login
              </button>
            </div>
            <div className="text-center">
          
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

export default AdminLogin;
