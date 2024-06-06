import React from 'react'
import Sidebar from './Sidebar'
import DoctorComponents from './Doctors'
import DoctorForm from './AddNewDoctor'

const DoctorAddPage = () => {
  return (
    <div className='flex flex-row '>
    <div className=''>
          <Sidebar/>
    </div>
    <div className='w-full'>
    

  <DoctorForm/>


</div>
    
    </div>
  )
}

export default DoctorAddPage
