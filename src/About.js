import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import Acd from "./Acd";

function About() {
  const [data, setData] = useState([]);
  const [sData, setsData] = useState([]);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    const apiUrl = "https://health.triage.ninja/en/patient.json";

    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        setData(response.data);
        setsData(response.data);
        console.log(response.data);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err);
      }
    };

    fetchData();
  }, []);

  const handleSearch = () => {
    const filteredData = data.filter((item) =>
      item.id.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setsData(filteredData);
  };

  const resetSearch = () => {
    setSearchTerm("");
    setsData(data);
  };

  const scrollToLetter = (letter) => {
    const element = document.getElementById(`section-${letter}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const groupedData = sData.reduce((groups, item) => {
    const startingLetter = item.id.charAt(0).toUpperCase();
    if (!groups[startingLetter]) {
      groups[startingLetter] = [];
    }
    groups[startingLetter].push(item);
    return groups;
  }, {});

  const startingLetters = Object.keys(groupedData).sort();

  return (
    <div className="">
      <div className="mb-4 flex justify-center items-center relative">
        <div className="h-[70vh] sm:h-[60vh] bg-[#00857d] min-w-full text-center">
          <div className="font-semibold text-5xl mt-20 text-white">
            Your complete guide to
          </div>
          <div className="font-semibold text-5xl mt-2 text-white">
            skin Health.
          </div>
          <div className="mt-6 text-white">
            <p>
              Find information from experts on skin conditions, including
              symptoms,
            </p>
          </div>
          <div>
            <p className="text-white">
              causes, diagnosis, and treatment options.
            </p>
          </div>
          <div className="flex flex-row justify-between mx-auto w-[80vw] overflow-auto no-scrollbar">
            {Array.from({ length: 26 }, (_, index) => {
              const letter = String.fromCharCode(65 + index);
              return (
                <button
                  key={letter}
                  className={`${
                    letter === "A"
                      ? "bg-gradient-to-r from-rose-200 to-teal-200 mx-1 mt-6"
                      : "hover:scale-95 text-white mt-6"
                  } rounded-full hover:bg-gradient-to-r from-rose-200 to-teal-200  hover:text-black px-4 py-2`}
                  onClick={() => scrollToLetter(letter)}
                >
                  {letter}
                </button>
              );
            })}
          </div>

          <div className="mt-4">
            <input
              type="text"
              placeholder="Search by name..."
              className="border rounded-md py-2 px-3 mr-2"
              value={searchTerm}
            
              onChange={(e) => setSearchTerm(e.target.value)}
              
            />
            <button
              className="text-black bg-gradient-to-r from-rose-200 to-teal-200  hover:scale-95 py-2 px-4 rounded-md focus:outline-none"
              onClick={handleSearch}
            >
              Search
            </button>
            <button
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 ml-2 rounded-md"
              onClick={resetSearch}
            >
              Reset
            </button>
          </div>
        </div>
      </div>

      <div>
        {error ? (
          <p>Error loading data. Please try again later.</p>
        ) : sData.length > 0 ? (
          startingLetters.map((letter) => (
            <div key={letter} id={`section-${letter}`}>
              <h2 className="text-2xl text-center font-bold">{letter}</h2>
              {groupedData[letter].map((item) => (
                <Acd
                  key={item.id}
                  title={item.label}
                  desc={item.description}
                  index={item.id}
                  openIndex={openIndex}
                  setOpenIndex={setOpenIndex}
                  symptoms={item.symptoms}
                />
              ))}
            </div>
          ))
        ) : (
          <p>Loading data...</p>
        )}
      </div>
    </div>
  );
}

export default About;
