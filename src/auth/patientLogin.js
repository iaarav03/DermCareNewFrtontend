import React, { useState ,useEffect} from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { useContext } from 'react';
import UserContext from '../Usecontext/patientContext';
import Cookies from 'js-cookie';
import 'react-toastify/dist/ReactToastify.css';
import login from "../assets/login.jpg"
import '../LoadingScreen.css'
const PatientLogin = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
  const response=useContext(UserContext);

  
   const {patienttAuth}=response
   const {setPatientAuth}=response
   

   useEffect(() => {
    const cook=Cookies.get('patientToken')
    if(cook){
      
    setPatientAuth(Cookies.get('patientToken'))
    }

      
    if (patienttAuth !== 'initial') {
      navigate('/apt');
    }
  }, [patienttAuth, navigate]);
  const handleAlreadyRegisteredClick = () => {
    navigate('/pRegister'); // Navigate to '/user' route when the button is clicked
  };


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
        setPatientAuth(Cookies.get('patientToken'))
        toast.dismiss();
        toast.success('Login successful');
       
        navigate('/apt');
      
       
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
      role:"Patient",

     
    },
    onSubmit: (values) => fetchData(values),
  });


  
  return (
    <>
      {loading? (
        <div className="loader-container">
      <div className="loader"></div>
    </div>
      ):( 
        <div className="min-h-screen flex items-center justify-center bg-gray-100 bg-cover bg-center"
      style={{ backgroundImage: `url(${login})`}}
      >
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md bg-opacity-85 ">
          <h2 className="text-4xl  font-bold text-[#2b8787] mb-4 text-center">Login</h2>
          <form onSubmit={formik.handleSubmit}>
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
            <div className="mb-4">
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
               Confirm Password
              </label>
              <input
                id="confirmPassword"
                type="password"
                className="mt-1 p-2 w-full border border-[#2b8787] rounded-lg"
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
           
          </form>
          <div className="text-center">
            <button
              onClick={handleAlreadyRegisteredClick}
              className=" hover:underline"
            >
              New User? Please Sign Up
            </button>
          </div>
          <div>
            {error && <p className="text-red-500">{error}</p>}
          </div>
        </div>
      </div>
     )
      }
      <ToastContainer />

 </>
      
  );
};

export default PatientLogin;
