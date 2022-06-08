import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { faStethoscope } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faMortarPestle } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Doctor from '../images/hero/doctor.png'


const Hero = () => {
    return (
      <>
        <section className="w-screen font-serif block justify-around  md:flex md:my-40 gap-5 my-10 ">
          <div className="block md:ml-12 md:mt-6">
            <div
              className="block  text-xs text-center md:text-base lg:text-lg
                            text-teal-700 underline underline-offset-2 decoration-teal-700"
            >
              GET THE CAKE YOU WISH
            </div>
            <div className="block text-center text-5xl md:text-6xl lg:text-8xl">
              <div className="mt-10">A WAY TO </div>
              <div className="text-teal-700 mt-4">Healthy Life</div>
            </div>
            <div className="flex font-light text-sm p-4 text-justify justify-center">
              Lorem ipsum, dolor sit amet <br />
              consectetur adipisicing elit.
            </div>
            <div className="block gap-3 text-center">
              <span>
                <button className="bg-black px-3 rounded-lg m-4 text-white">
                  Take Info
                </button>
              </span>
              <span className="m-2">
                <FontAwesomeIcon icon={faCirclePlay} className="" />
              </span>
              <span>Watch Our Video</span>
            </div>
          </div>
          <div className="block h-96 p-2  md:w-1/2 ">
            <div
              className="absolute flex z-10 h-52 w-56 mt-11 ml-14
                lg:h-72 lg:w-64 lg:mt-2 lg:ml-36   
                rounded-tl-[63%] rounded-tr-[37%] rounded-bl-[35%] rounded-br-[60%] 
                border-t-8 border-l-4 border-teal-300 rotate-12 bg-gradient-to-br from-teal-500 to-teal-200 "
            ></div>
            <div
              className="absolute flex z-0 h-56 w-60 mt-20 ml-24
            lg:h-64 lg:w-64 lg:mt-32 lg:ml-52 bg-teal-700 -rotate-12 
            rounded-tl-[45%] rounded-tr-[85%] rounded-br-[65%] rounded-bl-[75%]
            border-b-8 border-r-4 border-teal-300"
            ></div>

            <div
              className="absolute  z-20 mt-20 ml-32  w-28 h-32
                md:h-36 md:w-36
                lg:w-56 lg:h-64 lg:ml-48 lg:mt-6 "
            >
              <Image src={Doctor} width={""} height={""} alt="Doctor" />
            </div>
            <div
              className="absolute flex md:hidden z-30 h-52 w-56 mt-11 ml-14
                rounded-tl-[63%] rounded-tr-[37%] rounded-bl-[35%] rounded-br-[60%] 
                border-b-8 border-r-8  border-teal-300 rotate-12"
            ></div>
            <div
              className="hidden z-40 lg:absolute  lg:flex 
                lg:rounded-tl-[45%] lg:rounded-tr-[85%] lg:rounded-br-[35%] lg:rounded-bl-[35%]
                lg:h-32 lg:w-40 lg:mt-52 lg:ml-60  lg:border-teal-700 lg:border-b-8 "
            ></div>
            <div className="absolute flex z-50 gap-2 w-auto h-auto mt-6 ml-48 
            lg:mt-2 lg:ml-96 bg-gray-200/80 rounded-lg p-2">
              <span className="bg-teal-300  p-1 rounded-tl-[63%] rounded-tr-[37%] rounded-bl-[35%] rounded-br-[60%] ">
                <FontAwesomeIcon icon={faStethoscope} />
              </span>
              <span className="m-auto">Professionals</span>
            </div>
            <div className="absolute flex z-50 mt-52 gap-2
            lg:ml-10 w-auto h-auto bg-gray-200/80 rounded-lg p-2">
              <span className="m-auto rounded-tl-[63%] rounded-tr-[37%] rounded-bl-[35%] rounded-br-[60%] p-1 bg-teal-300">
                <FontAwesomeIcon icon={faUsers} />
              </span>
              <span className="inline-block m-auto">
                <span className="underline underline-offset-1">6500</span>
                <br />
                <span className="">Thrusted people</span>
              </span>
            </div>
            <div className="absolute flex gap-2 z-50 mt-72 ml-48 
            lg:mt-80 lg:ml-96 w-auto h-auto bg-gray-200/80 rounded-lg p-2">
              <span className="m-auto rounded-tl-[63%] rounded-tr-[37%] rounded-bl-[35%] rounded-br-[60%] p-1 bg-teal-300">
                <FontAwesomeIcon icon={faMortarPestle} />
              </span>
                <span className="gap-2 m-auto">
                    <span className="flex ">
                        Under
                    <span className="flex ml-1 underline underline-offset-1">
                        State
                    </span>
                </span>
                <span className="flex">
                    Goverment
                </span>
              </span>
            </div>
          </div>
        </section>
      </>
    );
};


export default Hero;