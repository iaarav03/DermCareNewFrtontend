import React from 'react'
import Sidebar from './Sidebar'
import AddAdmin from './AddAdmin'


const AddAdminPage = () => {
  return (
    <div className='flex flex-row '>
    <div className=''>
          <Sidebar/>
    </div>
    <div className='w-full'>
     <AddAdmin/>




</div>
    
    </div>
  )
}

export default AddAdminPage
