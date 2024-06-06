import React from 'react'
import Sidebar from './Sidebar'
import DoctorComponents from './Doctors'

const DoctorPage = () => {
  return (
    <div className='flex flex-row '>
    <div className=''>
          <Sidebar/>
    </div>
    <div className='w-full'>
    

  <DoctorComponents/>


</div>
    
    </div>
  )
}

export default DoctorPage
