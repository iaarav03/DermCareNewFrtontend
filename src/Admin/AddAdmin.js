import React from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddAdmin = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
   
      dob: '',
      gender: '',
      password: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('First Name is required'),
      lastName: Yup.string().required('Last Name is required'),
      email: Yup.string().email('Invalid email format').required('Email is required'),
      phone: Yup.string().required('Phone number is required'),
      
      dob: Yup.date().required('Date of Birth is required'),
      gender: Yup.string().required('Gender is required'),
      password: Yup.string().required('Password is required'),
    }),
    onSubmit: async (values) => {
      try {
        const response = await axios.post(
          "https://dermcarebackend.onrender.com/api/v1/user/admin/addnew",
          values,
          {
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
          }
        );
        console.log(response);
        const responseData = response.data;
        if (response.status === 200) {
          toast.success('Admin added successfully'); // Success toast
        } else {
          toast.error(responseData.message); // Error toast
        }
      } catch (error) {
        console.log(error);
        toast.error('Failed to add user'); // Error toast
      }
    },
  });

  return (
    <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg max-h-screen overflow-y-auto">
      <h2 className="text-3xl font-bold mb-6 text-center text-[#2b8787]">Add Admin</h2>
      <form onSubmit={formik.handleSubmit} className="grid grid-cols-2 gap-4">
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">First Name</label>
          <input
            type="text"
            name="firstName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
            className={`w-full px-3 py-2 border ${formik.touched.firstName && formik.errors.firstName ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:ring-2`}
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
            className={`w-full px-3 py-2 border ${formik.touched.lastName && formik.errors.lastName ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:ring-2`}
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
            className={`w-full px-3 py-2 border ${formik.touched.email && formik.errors.email ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:ring-2`}
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
            className={`w-full px-3 py-2 border ${formik.touched.phone && formik.errors.phone ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:ring-2`}
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
            className={`w-full px-3 py-2 border ${formik.touched.dob && formik.errors.dob ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:ring-2`}
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
            className={`w-full px-3 py-2 border ${formik.touched.gender && formik.errors.gender ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:ring-2`}
          >
            <option value="" label="Select gender" />
            <option value="Male" label="Male" />
            <option value="Female" label="Female" />
          </select>
          {formik.touched.gender && formik.errors.gender ? (
            <div className="text-red-500 text-sm mt-1">{formik.errors.gender}</div>
          ) : null}
        </div>

        <div className="mb-4 col-span-2">
          <label className="block text-gray-700 font-semibold">Password</label>
          <input
            type="password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            className={`w-full px-3 py-2 border ${formik.touched.password && formik.errors.password ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:ring-2`}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="text-red-500 text-sm mt-1">{formik.errors.password}</div>
          ) : null}
        </div>

        <div className="col-span-2 mb-4">
          <button type="submit" className="w-full bg-[#2b8787] text-white p-2 rounded hover:scale-95 transition duration-300">Submit</button>
        </div>
      </form>

      <ToastContainer />
    </div>
  );
};

export default AddAdmin;
