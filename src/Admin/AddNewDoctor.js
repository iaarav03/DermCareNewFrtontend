import React, { useState } from 'react';
import { useFormik } from 'formik';
import axios from "axios";
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DoctorForm = () => {
const [loading,setLoading]=useState(false);



  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      dob: '',
      gender: '',
      password: '',
      doctorDepartment: '',
      docAvatar: null,
      docAvatarPreview: null, 
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('First Name is required'),
      lastName: Yup.string().required('Last Name is required'),
      email: Yup.string().required('Email is required'),
      phone: Yup.string().required('Phone number is required'),
      dob: Yup.date().required('Date of Birth is required'),
      gender: Yup.string().required('Gender is required'),
      password: Yup.string().required('Password is required'),
      doctorDepartment: Yup.string().required('Department is required'),
      docAvatar: Yup.mixed().required('Avatar is required'),
    }),
    onSubmit: async (values) => {
        try {
          setLoading(true);
          const { docAvatarPreview, ...formData } = values;
          console.log(formData);
          const response = await axios.post(
            "https://dermcarebackend.onrender.com/api/v1/user/doctor/addnew",
            formData,
            {
              withCredentials: true,
              headers: { "Content-Type": "multipart/form-data" },
            }
          );
          console.log(response);
          const responseData = response.data;
          if (response.status === 200) {
            toast.success('Doctor added successfully'); // Success toast
          } else {
            toast.error(responseData.message); // Error toast
          }
        } catch (error) {
          console.log(error);
          toast.error('Failed to add doctor'); // Error toast
        }finally{
          setLoading(false);
        }
      }
      
,    
    });

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    formik.setFieldValue('docAvatar', file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        formik.setFieldValue('docAvatarPreview', reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      formik.setFieldValue('docAvatarPreview', null);
    }
  };


  return (
    <>
   
   {loading?(
    <div className="loader-container">
      <div className="loader"></div>
    </div>
   ):(  <div className="max-w-lg mx-auto   bg-white p-8 rounded-lg shadow-lg max-h-screen overflow-y-auto no-scrollbar">
      <h2 className="text-3xl font-bold mb-6 text-center text-[#2b8787]">Doctor Registration</h2>
      <form onSubmit={formik.handleSubmit} className="grid grid-cols-2 gap-4">
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">First Name</label>
          <input
            type="text"
            name="firstName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
            className={`w-full px-3 py-2 border ${formik.touched.firstName && formik.errors.firstName ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:ring-2 `}
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <div className="text-red-500 text-sm mt-1">{formik.errors.firstName}</div>
          ) : null}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Last Name</label>
          <input
            type="text"
            name="lastName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
            className={`w-full px-3 py-2 border ${formik.touched.lastName && formik.errors.lastName ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:ring-2 `}
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <div className="text-red-500 text-sm mt-1">{formik.errors.lastName}</div>
          ) : null}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Email</label>
          <input
            type="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className={`w-full px-3 py-2 border ${formik.touched.email && formik.errors.email ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:ring-2 `}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
          ) : null}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Phone</label>
          <input
            type="text"
            name="phone"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
            className={`w-full px-3 py-2 border ${formik.touched.phone && formik.errors.phone ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:ring-2 `}
          />
          {formik.touched.phone && formik.errors.phone ? (
            <div className="text-red-500 text-sm mt-1">{formik.errors.phone}</div>
          ) : null}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Date of Birth</label>
          <input
            type="date"
            name="dob"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.dob}
            className={`w-full px-3 py-2 border ${formik.touched.dob && formik.errors.dob ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:ring-2 `}
          />
          {formik.touched.dob && formik.errors.dob ? (
            <div className="text-red-500 text-sm mt-1">{formik.errors.dob}</div>
          ) : null}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Gender</label>
          <select
            name="gender"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.gender}
            className={`w-full px-3 py-2 border ${formik.touched.gender && formik.errors.gender ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:ring-2 `}
          >
            <option value="" label="Select gender" />
            <option value="Male" label="Male" />
            <option value="Female" label="Female" />
           
          </select>
          {formik.touched.gender && formik.errors.gender ? (
            <div className="text-red-500 text-sm mt-1">{formik.errors.gender}</div>
          ) : null}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Password</label>
          <input
            type="password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            className={`w-full px-3 py-2 border ${formik.touched.password && formik.errors.password ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:ring-2 `}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="text-red-500 text-sm mt-1">{formik.errors.password}</div>
          ) : null}
        </div>
        <div className="mb-4">
  <label className="block text-gray-700 font-semibold">Department</label>
  <select
  name="doctorDepartment"
  onChange={formik.handleChange}
  onBlur={formik.handleBlur}
  value={formik.values.doctorDepartment}
  className={`w-full px-3 py-2 border ${formik.touched.doctorDepartment && formik.errors.doctorDepartment ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:ring-2 `}
>
  <option value="" label="Select department" />
  <option value="Pediatrics" label="Pediatrics" />
  <option value="Orthopedics" label="Orthopedics" />
  <option value="Cardiology" label="Cardiology" />
  <option value="Neurology" label="Neurology" />
  <option value="Oncology" label="Oncology" />
  <option value="Radiology" label="Radiology" />
  <option value="Physical Therapy" label="Physical Therapy" />
  <option value="Dermatology" label="Dermatology" />
  <option value="ENT" label="ENT" />
</select>
  {formik.touched.doctorDepartment && formik.errors.doctorDepartment ? (
    <div className="text-red-500 text-sm mt-1">{formik.errors.doctorDepartment}</div>
  ) : null}
</div>

<div className="mb-4 col-span-2">
          <label className="block text-gray-700 font-semibold mb-1">Avatar</label>
          <div className="flex items-center">
            <label className="cursor-pointer bg-gradient-to-r from-emerald-500 to-emerald-900 px-5 py-1 rounded-md capitalize text-white font-bold hover:opacity-90 ease-in duration-200 font-l">
              Choose File
              <input
                type="file"
                name="docAvatar"
                onChange={handleAvatarChange}
                onBlur={formik.handleBlur}
                className="hidden"
              />
            </label>
            <span className="ml-3 text-gray-500">{formik.values.docAvatar ? formik.values.docAvatar.name : 'No file chosen'}</span>
          </div>
          {formik.touched.docAvatar && formik.errors.docAvatar ? (
            <div className="text-red-500 text-sm mt-1">{formik.errors.docAvatar}</div>
          ) : null}
          {formik.values.docAvatarPreview && (
            <div className="mt-2">
              <img src={formik.values.docAvatarPreview} alt="Avatar Preview" className="w-full rounded-lg" />
            </div>
          )}
        </div>

        <div className="col-span-2 mb-4">
          <button type="submit" className="w-full bg-[#2b8787] text-white p-2 rounded hover:scale-95 transition duration-300">Submit</button>
        </div>
      </form>

    
    </div>)}
 
  
      <ToastContainer />
    </>
  );
};

export default DoctorForm;