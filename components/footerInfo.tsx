import { faCircleChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { classNames } from '../utils/utils';


function footer() {

    const officers = [
      {
        title: "Reach Out To Us At",
        text1: "(606)666-1545",
        text2: "(706)456-2145",
      },
      {
        title: "Opening Hours",
        text1: "9:00 am - 18:30 pm",
        text2: "Monday - Friday",
      },
      {
        title: "Kentacky Office",
        text1: "Street La Coma Round.",
        text2: "Frankfurt 65874",
      },
      
      {
        title: "New Jersey Office",
        text1: "Street name here, 78",
        text2: "Turquia 45210",
      },
    ];

    const options = [
        { tittle : "ABOUT" }, 
        { tittle : "WORK" },
        { tittle : "BLOG" },
        { tittle : "GALLERY" },
        { tittle : "CONTACT" },
    ];

  return (
    <div id='footer' className=" bg-teal-700 w-screen py-16 inline-block mt-12 relative">
      <div className="flex-col md:columns-2">
        {officers.map((ofice, index) => {
          return (
            <div
              key={index}
              className={classNames(
                "flex-col m-auto justify-center b w-max h-32"
              )}
            >
              <p className="flex justify-center w-auto text-teal-200 mb-4 font-PT text-2xl md:text-3xl lg:text-4xl">
                {ofice.title}
              </p>
              <p className="flex justify-center w-auto text-teal-200 font-Gothic text-sm md:text-lg lg:text-xl">
                {ofice.text1}
              </p>
              <p className="flex justify-center w-auto text-teal-200 font-Gothic text-sm md:text-lg lg:text-xl">
                {ofice.text2}
              </p>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col md:columns-2 mx-auto lg:flex-row text-teal-200 w-max md:w-screen py-4 lg:border-b-4 border-teal-200">
        <div className="flex flex-col mx-auto font-Gothic">
          <div className="flex text-lg">Keep up with news form us:</div>
          <div className="flex underline">transformyourlife@gmail.com</div>
        </div>
        <div className="flex mx-auto">
          <input
            type={"checkbox"}
            className="h-4 w-4 my-auto rounded-full bg-white checked:bg-teal-300"
          />
          <label className="ml-4">
            Review and accept <br /> the PRIVACY POLICY
          </label>
        </div>
      </div>

      <div className="hidden lg:flex mt-10 justify-around text-2xl">
        <ul className="flex justify-around  w-max ">
          {options.map((option, index) => {
            return (
              <li
                key={index}
                className="font-PT text-teal-200 hover:text-white mx-12">
                {option.tittle}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="w-max h-max scroll-smooth absolute bottom-10 right-10 md:bottom-24 md:right-16">
        <a href="#contact">
          <FontAwesomeIcon
            icon={faCircleChevronUp}
            className="text-teal-200 text-xl h-6 w-6"
          />
        </a>
      </div>
    </div>
  );
}

export default footer