import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { RxCross1 } from "react-icons/rx";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [show, setShow] = useState(false);
  
 const navigate=useNavigate();
  const toggleModal = () => {
    setShow(!show);
  };

  const handleSubmit = () => {
    // Handle submit logic
    navigate('/admin/login')
  };

  return (
    <nav className="z-50 flex justify-between items-center bg-white">
      <div className="w-20 py-5 font-bold text-3xl px-10">
        <Link to="/">
          <span className="text-[#00857d]">Derm</span>
          <span className="text-black">Care</span>
        </Link>
      </div>
      <div>
        <ul className="hidden md:flex items-center space-x-16 px-64">
          <li>
            <Link
              to="/about"
              className="relative text-black text-xl font-semibold hover:text-[#2b8787] cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-[#2b8787] before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-[#2b8787] after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]"
            >
              Skin Health A-Z
            </Link>
          </li>
          <li>
            <Link
              to="/pLogin"
              className="relative text-black text-xl font-semibold hover:text-[#2b8787] cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-[#2b8787] before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-[#2b8787] after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]"
            >
              Appointment With Doctor
            </Link>
          </li>
          <li>
            <button
              onClick={handleSubmit}
              className="bg-gradient-to-r from-emerald-500 to-emerald-900 px-5 py-4 rounded-md capitalize text-white font-bold hover:opacity-90 ease-in duration-200 font-l"
            >
              Admin
            </button>
          </li>
        </ul>
      </div>
      {/* Short Screen */}
      <div className="md:hidden pr-5">
        <button
          onClick={toggleModal}
          className="fixed right-0 z-10 top-3 py-3 px-6 text-center align-middle"
        >
        {
          show?(<RxCross1 className='text-3xl'  />):( <FaBars className='text-3xl' />)
        }
         
        </button>
        {show && (
          <>
            <div className="inset-0   z-40" onClick={toggleModal}></div>
            <ul
              role="menu"
              className="fixed right-0 flex flex-col gap-4 top-16 z-50 w-1/2 bg-white bg-opacity-90 shadow-lg p-5 transition-transform transform translate-x-0"
            >
              <li className="block w-full cursor-pointer select-none rounded-md px-3 pt-[9px] pb-2 text-start leading-tight transition-all hover:bg-gray-200">
                <Link to="/" onClick={toggleModal}>Home</Link>
              </li>
              <li className="block w-full cursor-pointer select-none rounded-md px-3 pt-[9px] pb-2 text-start leading-tight transition-all hover:bg-gray-200">
                <Link to="/about" onClick={toggleModal}>Skin Health A-Z</Link>
              </li>
              <li className="block w-full cursor-pointer select-none rounded-md px-3 pt-[9px] pb-2 text-start leading-tight transition-all hover:bg-gray-200">
                <Link to="/plogin" onClick={toggleModal}>Appointment</Link>
              </li>
              <li className="block w-full cursor-pointer select-none rounded-md px-3 pt-[9px] pb-2 text-start leading-tight transition-all hover:bg-gray-200">
                <button
                  onClick={() => {
                    handleSubmit();
                    toggleModal();
                  }}
                >
                  Admin
                </button>
              </li>
            </ul>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
