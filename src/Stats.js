import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const Statistics = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className="w-full max-w-[80vw] mx-auto h-fit bg-[#00857d] text-white flex flex-wrap justify-between items-center p-4">
      <div className="w-1/2 md:w-auto text-center md:text-left mb-4 md:mb-0">
        <h2 className="text-3xl font-semibold">
          {inView && <CountUp end={20000} duration={3} separator="," />}+
        </h2>
        <p className="text-sm">Users</p>
      </div>
      <div className="w-1/2 md:w-auto text-center md:text-left mb-4 md:mb-0">
        <h2 className="text-3xl font-semibold">
          {inView && <CountUp end={100} duration={3} />}+
        </h2>
        <p className="text-sm">Doctors</p>
      </div>
      <div className="w-1/2 md:w-auto text-center md:text-left mb-4 md:mb-0">
        <h2 className="text-3xl font-semibold">
          {inView && <CountUp end={15} duration={3} />}+
        </h2>
        <p className="text-sm">Specialists</p>
      </div>
      <div className="w-1/2 md:w-auto text-center md:text-left">
        <h2 className="text-3xl font-semibold">
          {inView && <CountUp end={4.5} duration={3} decimals={1} />}+
        </h2>
        <p className="text-sm">Rating</p>
      </div>
    </div>
  );
}

export default Statistics;
