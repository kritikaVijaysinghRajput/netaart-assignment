import React from "react";
import { facebookicon, logo, machine, photo, trophy } from "../assets";
import { useMediaQuery } from "@mui/material";

const Hero = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <div
      className={`bg-gradient-to-t from-yellow-200 to-white min-h-screen flex flex-col justify-center items-center p-4`}
    >
      <div className={`container mx-auto flex flex-col items-center`}>
        <div className="mb-8 mt-15">
          <img src={logo} alt="Logo" className="w-100 h-44" />
        </div>
        <div
          className={`flex flex-col ${
            isMobile ? "w-full" : "lg:flex-row-reverse"
          } justify-between`}
        >
          <div
            className={`${isMobile ? "mb-4" : "mb-0"} w-full ${
              isMobile ? "order-1" : "lg:w-12/12"
            }`}
          >
            <h1 className="text-md font-bold mb-2">
              C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
              the 4th time.
            </h1>
            <p className="text-sm ml-7 font-semibold">
              * C.R.I.'s energy efficient products are well recognized by
              various Government Institutions, as trustworthy products for
              various projects across the globe to save energy.
            </p>
            <p className="text-sm ml-7 font-semibold mb-3">
              * C.R.I. is the highest contributor in the country for the
              projects of EESL (Energy Efficiency Services Limited) to replace
              the old inefficient pumps with 5 Star rated energy efficient smart
              pumps with IoT enabled control panel.
            </p>
            <img src={photo} alt="Left" className="w-100 h-100 mb-3" />
            <p>
              Government of India has awarded the
              <strong>"National Energy Conservation Award 2018"</strong>. Mr. G.
              Selvaraj, Joint Managing Director of C.R.I. Group received the
              award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj
              Kumar Singh, Honorable Minister of State.
            </p>
            <div></div>
          </div>

          <div
            className={`${
              isMobile ? "w-full" : "lg:w-8/12 lg:mr-10 lg:-ml-28"
            }`}
          >
            <img src={trophy} alt="Left" className="w-100 h-100 mr-2" />
          </div>
        </div>
        <p className="text-sm  font-semibold p-5">
          INSTALLED OVER 6 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
          RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF
          POWER FOR THE NATION.
        </p>
        <div>
          <img src={machine} alt="" />
          <p className=" flex justify-center items-center p-4">
            Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
            Solar Systems - Motors
          </p>
        </div>
        <hr className="border-t border-red-600 p-2 w-screen  my-2" />
        <p className=" flex justify-center font-bold items-center p-2">
          C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
        </p>
        <div class="flex  items-center text-sm font-semibold">
          <ul className="flex items-center flex-wrap gap-2">
            <li>CHEMICAL & PROCESS</li>
            <li>
              <div className="bg-red-600 w-[2px] h-4" />
            </li>
            <li className="text-nowrap">POWER</li>
            <li>
              <div className="bg-red-600 w-[2px] h-4" />
            </li>
            <li className="text-nowrap">WATER & WASTE WATER</li>
            <li>
              <div className="bg-red-600 w-[2px] h-4" />
            </li>
            <li className="text-nowrap">OIL & GAS</li>
            <li>
              <div className="bg-red-600 w-[2px] h-4" />
            </li>
            <li className="text-nowrap">PHARMA</li>
            <li>
              <div className="bg-red-600 w-[2px] h-4" />
            </li>
            <li className="text-nowrap">SUGAR & DISTILLERIES</li>
            <li>
              <div className="bg-red-600 w-[2px] h-4" />
            </li>
            <li className="text-nowrap">PAPER & PULP</li>
            <li>
              <div className="bg-red-600 w-[2px] h-4" />
            </li>
            <li className="text-nowrap">MARINE & DEFENCE</li>
            <li>
              <div className="bg-red-600 w-[2px] h-4" />
            </li>
            <li className="text-nowrap">METAL & MINING</li>
            <li>
              <div className="bg-red-600 w-[2px] h-4" />
            </li>
            <li className="text-nowrap"> FOOD & BEVERAGE</li>
            <li>
              <div className="bg-red-600 w-[2px] h-4" />
            </li>
            <li className="text-nowrap">PETROCHEMICAL & REFINERIES</li>
            <li>
              <div className="bg-red-600 w-[2px] h-4" />
            </li>
            <li className="text-nowrap">SOLAR</li>
            <li>
              <div className="bg-red-600 w-[2px] h-4" />
            </li>
            <li className="text-nowrap">BUILDING</li>
            <li>
              <div className="bg-red-600 w-[2px] h-4" />
            </li>
            <li className="text-nowrap">HVAC</li>
            <li>
              <div className="bg-red-600 w-[2px] h-4" />
            </li>
            <li className="text-nowrap">FIRE FIGHTING</li>
            <li>
              <div className="bg-red-600 w-[2px] h-4" />
            </li>
            <li className="text-nowrap">AGRICULTURE & RESIDENTIAL</li>
            <li>
              <div className="bg-red-600 w-[2px] h-4" />
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-5 w-screen bg-red-600 p-4 sm:flex sm:items-center sm:justify-center">
        <div className="flex items-center mb-2 sm:mr-12 sm:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#fff"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
            />
          </svg>
          <div className="ml-2">
            <p className="text-white">Toll Free</p>
            <p className="font-bold text-white">1800 200 1234</p>
          </div>
        </div>

        <div className="flex mb-2 sm:ml-4">
          <img src={facebookicon} alt="" className="w-6 h-6" />
          <p className="ml-2 text-white">www.facebook.com/cripumps</p>
        </div>

        <div className="flex mb-2 sm:ml-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#fff"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
            />
          </svg>
          <p className="ml-2 text-white">www.crigroups.com</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
