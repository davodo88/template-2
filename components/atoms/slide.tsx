import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faHandHoldingDroplet, faPrescriptionBottleMedical, faShoePrints, faSpa } from "@fortawesome/free-solid-svg-icons";


const Slide = () => {
  
    return (
      <>
        <div className="grid grid-cols-2 grid-rows-2 gap-2 border-4 rounded-xl mx-auto border-teal-300  p-2  md:flex my-10 ">
         
            <div className="block rounded-md text-center w-40 h-40 md:w-48 md:h-44 lg:w-72 lg:h-60 p-2 bg-teal-200  mx-auto  ">
              <span
                className="flex w-12 h-12 mx-auto lg:mt-10 mt-2 lg:w-20 lg:h-20 p-1 lg:p-4
                rounded-tl-[55%] rounded-tr-[75%] rounded-bl-[25%] rounded-br-[85%] text-white bg-gray-400/75"
              >
                <FontAwesomeIcon
                  icon={faHandHoldingDroplet}
                  className="h-10 w-10"
                />
              </span>
              <span className=" block text-center lg:text-xl lg:mt-2 font-medium text-teal-900">
                <span>Physical</span>
                <br />
                <span>Therapy</span>
              </span>
              <span className="text-xs font-thin underline text-black italic">
                Read More
              </span>
            </div>
            <div className="block rounded-md text-center w-40 h-40 md:w-48 md:h-44 lg:w-72 lg:h-60 bg-teal-700 p-2  mx-auto ">
              <span
                className="flex w-12 h-12 mx-auto lg:mt-10 mt-2 lg:w-20 lg:h-20 lg:p-4 p-1
                rounded-tl-[55%] rounded-tr-[75%] rounded-bl-[25%] rounded-br-[85%] text-white bg-gray-300/75 "
              >
                <FontAwesomeIcon
                  icon={faPrescriptionBottleMedical}
                  className="h-10 w-10 "
                />
              </span>
              <span className="block text-center lg:text-xl lg:mt-2 font-medium text-teal-200">
                <span>Clinical</span>
                <br />
                <span>Pilates</span>
              </span>
              <span className="text-xs font-thin underline text-teal-200 italic">
                Read More
              </span>
            </div>
            <div className="block rounded-md text-center w-40 h-40 md:w-48 md:h-44 lg:w-72 lg:h-60 p-2 bg-teal-200  mx-auto ">
              <span
                className="flex w-12 h-12 mx-auto mt-2 lg:mt-10 lg:w-20 lg:h-20 p-1 lg:p-4
                rounded-tl-[55%] rounded-tr-[75%] rounded-bl-[25%] rounded-br-[85%] text-white bg-gray-400/75 "
              >
                <FontAwesomeIcon icon={faSpa} className="h-10 w-10" />
              </span>
              <span className="block text-center lg:text-xl lg:mt-2 font-medium text-teal-900">
                <span>Chiropratic</span>
                <br />
                <span>Therapy</span>
              </span>
              <span className="text-xs font-thin underline text-black italic">
                Read More
              </span>
            </div>
          <div className="block rounded-md text-center w-40 h-40 md:w-48 md:h-44 lg:w-72 lg:h-60 p-2  bg-teal-700 mx-auto  ">
            <span
              className="flex  w-12 h-12 mx-auto mt-2 lg:mt-10 lg:w-20 lg:h-20 p-1 lg:p-4
                rounded-tl-[55%] rounded-tr-[75%] rounded-bl-[25%] rounded-br-[85%] text-white bg-gray-300/75 "
            >
              <FontAwesomeIcon icon={faShoePrints} className="h-10 w-10" />
            </span>
            <span className="block text-center lg:text-xl lg:mt-2 font-medium text-teal-200">
              <span>Sport</span>
              <br />
              <span>Injuries</span>
            </span>
            <span className="text-xs font-thin underline text-teal-200 italic">
              Read More
            </span>
          </div>
        </div>
      </>
    );
};
export default Slide;