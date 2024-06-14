import React from 'react';
import { useNavigate } from 'react-router-dom';
import doc from "./assets/f.jpg";
import img1 from "./assets/img1.jpg";
import imf from "./assets/ParthA.png"
import img2 from "./assets/img2.png"
import img3 from "./assets/img3.jpeg"
import Testimonials from './Testimonials';
import Footer from './Footer';
import Contact from './Contact';
import DoctorComponents from './DoctorComponents';
import Statistics from './Stats';

function Body() {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate('/pLogin'); // Redirect the user to the '/choose' route
  };

  return (
    <main>
      <div>
        <div className="relative">
          <div>
            <img
              className="w-full h-[80vh] object-cover"
              src={doc}
              alt="Document"
            />
          </div>
          <div className="absolute md:left-[15vw] md:top-1/2 top-1/2 transform -translate-y-1/2 p-4 bg-[#8BACAC] md:bg-opacity-70 bg-opacity-40 text-center">
            <h1 className="text-white text-4xl font-bold">Skip The Travel!</h1>
            <h1 className="text-white text-4xl font-bold">Take Doctor Consultation Online</h1>
            <div classname="mx-auto ">
            <button type="button" onClick={handleSubmit} class="mt-3 self-center relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white text-black  rounded-md group-hover:bg-opacity-0">
                Book Your Appointments
              </span>
            </button>
            </div>
           
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center mt-10">
        <div className="flex md:flex-row flex-col md:w-[70vw]">
          <div className="md:w-1/3 p-4 bg-white flex flex-col relative">
            <div>
              <h1 className="font-bold text-xl mb-4 text-center">Maps, Directions & Locations</h1>
              <p className="font-sans mb-4 text-center">
                Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.
              </p>
            </div>
            <button className="self-center relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white text-black rounded-md group-hover:bg-opacity-0">
                Get Directions
              </span>
            </button>
            <div className="hidden md:block absolute right-0 top-0 h-full w-px bg-gray-300"></div>
            <div className="md:hidden absolute w-full h-px bg-gray-300 bottom-0 "></div>
          </div>
          
          <div className="md:w-1/3 p-4 bg-white flex flex-col relative">
            <div>
              <h1 className="font-bold text-xl mb-4 text-center">Meet Our Clinicians</h1>
              <p className="font-sans mb-4 text-center">
                Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.
              </p>
            </div>
            <button className="self-center relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white text-black rounded-md group-hover:bg-opacity-0">
                Find a Doctor
              </span>
            </button>
            <div className="hidden md:block absolute right-0 top-0 h-full w-px bg-gray-300"></div>
            <div className="md:hidden absolute w-full h-px bg-gray-300 bottom-0 "></div>
          </div>
          
          <div className="md:w-1/3 p-4 bg-white flex flex-col">
            <div>
              <h1 className="font-bold text-xl mb-4 text-center">Book an Appointment</h1>
              <p className="font-sans mb-4 text-center">
                Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.
              </p>
            </div>
            <button className="self-center relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white text-black rounded-md group-hover:bg-opacity-0">
                Appointments
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="min-h-screen flex flex-col p-8 sm:p-16 md:p-24 justify-center bg-white">
        <div data-theme="teal" className="mx-auto w-[70vw]">
          <h2 className="sr-only">Featured case study</h2>
          <section className="font-sans text-black">
            <div className="[ lg:flex lg:items-center ] [ fancy-corners fancy-corners--large fancy-corners--top-left fancy-corners--bottom-right ]">
              <div className="flex-shrink-0 self-stretch sm:flex-basis-40 md:flex-basis-50 xl:flex-basis-60">
                <div className="h-full">
                  <article className="h-full">
                    <div className="h-full w-[30vw]">
                      <img className="h-full object-cover" src="https://inviqa.com/sites/default/files/styles/pullout/public/2020-08/XD-1.jpeg?h=f75d236a&itok=PBoXPDmW" width="733" height="412" alt="" typeof="foaf:Image" />
                    </div>
                  </article>
                </div>
              </div>
              <div className="p-6 bg-grey">
                <div className="leading-relaxed">
                  <h2 className="leading-tight text-4xl font-bold">CXcon: Experience Transformation</h2>
                  <p className="mt-4">Our second CXcon in October was dedicated to experience transformation. The free one-day virtual event&nbsp;brought together 230+ heads of digital, thought leaders, and UX practitioners to discuss all aspects of experience design.</p>
                  <p className="mt-4">In a jam-packed day filled with keynote sessions, panels, and virtual networking we explored topics including design leadership, UX ethics, designing for emotion and innovation at scale.</p>
                  <p><a className="mt-4 button button--secondary" href="https://inviqa.com/cxcon-experience-transformation">Explore this event</a></p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

     
           <Statistics/>
     
      <div  className=''>
      <div className='flex justify-center mt-20'>
    <div className='w-full max-w-[60vw] mx-4 '>
        <h1 className='text-3xl font-bold text-center '>View Our Physicians</h1>
        <p className='text-center mt-5'>
            On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire that they cannot foresee the pain and trouble that are bound.
        </p>
    </div>
</div>

      
    
      <div className='   flex justify-center mt-7 w-[80vw] gap-3 mb-10 mx-auto'>
      <DoctorComponents />
    </div>
    <Testimonials/>
    <Contact />
   
      </div>
    </main>
  );
}

export default Body;
