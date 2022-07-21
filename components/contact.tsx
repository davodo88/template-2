import React from "react";
import Image from "next/image";
import Logo from '../images/logoLoto.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
    return (
      <>
        <div id="contact" className="block font-serif w-screen md:flex justify-between md:border-b-2 border-b-teal-400">
          <div className=" hidden lg:flex lg:flex-col lg:justify-center  ml-10 my-5 ">
            <div className="w-24 h-24">
              <Image src={Logo} height={""} width={""} alt="Logo" />
            </div>
            <h4 className="flex justify-center text-teal-700 tracking-widest space-between">
              Power
              <span className="flex ml-1 underline underline-offset-2 decoration-teal-400">
                Hour
              </span>
            </h4>
          </div>
          <div className="hidden md:flex w-screen lg:hidden justify-center my-4">
            <div className="hidden md:flex  w-content h-26 lg:hidden ">
              <span className="flex my-auto mr-12 text-5xl text-teal-700">
                POWER
              </span>
              <span className="flex h-24 w-24 mr-12">
                <Image src={Logo} height={""} width={""} alt="Logo"/>
              </span>
              <span className="flex my-auto underline underline-offset-2 decoration-teal-400 text-teal-700 mr-12 text-5xl text-center">
                HOUR
              </span>
            </div>
          </div>
          <div className="hidden lg:flex gap-5 items-center justify-around">
            <div className="flex text-sm text-center gap-3 p-5 border-r-2 border-r-teal-400">
              <div className="">
                <span className="flex text-center">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="w-4 h-4 p-3 rounded-full bg-teal-200 text-teal-700"
                  />
                </span>
              </div>
              <div className="">
                <span className="flex font-black">Call Us Now</span>
                <span>[69]5548125</span>
              </div>
            </div>
            <div className="flex  text-sm text-center gap-3 p-5 border-r-2 border-r-teal-400">
              <div className="">
                <FontAwesomeIcon
                  icon={faComments}
                  className="w-4 h-4 p-3 rounded-full  bg-teal-200 text-teal-700"
                />
              </div>
              <div className="">
                <span className="flex font-black">Send a Message</span>
                <span>info@pronastibur.com</span>
              </div>
            </div>
            <div className="flex  text-sm text-center gap-3 p-5 ">
              <div className="">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="w-4 h-4 p-3 rounded-full bg-teal-200 text-teal-700"
                />
              </div>
              <div className="">
                <span className="flex font-black ">Visit Us On</span>
                <span> 2872 Wonderlayer, Avd.reale fois.</span>
              </div>
            </div>
          </div>
        </div>
      </>
    );
};
export default Contact