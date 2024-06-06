import React from 'react';
import { TiHome } from 'react-icons/ti';
import { FaUserMd } from 'react-icons/fa';
import { MdAddModerator } from 'react-icons/md';
import { IoPersonAddSharp } from 'react-icons/io5';
import { AiFillMessage } from 'react-icons/ai';
import { RiLogoutBoxFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="bg-[#00857d]  text-white min-h-screen w-[20vw] top-0 left-0 flex flex-col overflow-y-auto no-scrollbar">
      <div className="flex flex-col justify-between flex-grow">
        <div className="p-4">
         <Link to="/dashboard"> <SidebarItem icon={<TiHome />} text="Home" /></Link>
         <Link to="/doctors"> <SidebarItem icon={<FaUserMd />} text="Doctors" /></Link>
        <Link to="/add/doctor">  <SidebarItem icon={<MdAddModerator />} text="Add Doctor" /></Link>
         <Link to="/add/admin"> <SidebarItem icon={<IoPersonAddSharp />} text="Add Admin" /></Link>
          <SidebarItem icon={<AiFillMessage />} text="Messages" />
         <Link to="/admin/logout"> <SidebarItem icon={<RiLogoutBoxFill />} text="Logout" /></Link>
        </div>
      </div>
    </div>
  );
};

const SidebarItem = ({ icon, text }) => {
  return (
    <div className="flex items-center mb-4 py-4 cursor-pointer hover:bg-[#007367] transition duration-300 rounded-md">
      <span className="mr-2 text-xl">{icon}</span>
      <span className="text-sm">{text}</span>
    </div>
  );
};

export default Sidebar;
