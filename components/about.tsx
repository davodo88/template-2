import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import Bandas from "../images/about/bandas.jpeg"
import Estiramiento from "../images/about/estiramiento.jpg"
import ButtonMore from "./atoms/buttonMore";


const About = () => {
    return (
      <section className=" block font-serif md:flex lg:p-12 bg-teal-800 w-screen h-max">
        <div id="formas" className=" w-screen h-max  md:flex">
          <div className=" block w-screen md:w-1/2 h-auto mr-10">
            <FontAwesomeIcon
              icon={faPlay}
              className="bg-teal-100 hidden md:flex md:absolute z-10 
                    mt-10 left-72 p-2 h-14 w-14 lg:left-96 lg:mt-8 lg:w-32 rounded-xl text-teal-900"
            />
            <div className="flex justify-center items-center relative h-96 ">
              <div className="flex absolute border-4 rounded-2xl border-teal-400 md:top-16 md:left-6 w-4/5 h-4/5 aling-center ">
                <Image
                  src={Bandas}
                  width={"700"}
                  height={"700"}
                  alt="collarin"
                  className="rounded-xl"
                />
              </div>
              <div
                className="hidden md:flex absolute top-80 rounded-3xl border-8 border-teal-800 
                left-60 w-36 h-28 lg:left-96 lg:w-48 lg:h-32 lg:top-72"
              >
                <Image
                  src={Estiramiento}
                  width={"500"}
                  height={"500"}
                  alt="bandas"
                  className="rounded-xl "
                />
              </div>
            </div>
          </div>
          <div className=" inline-block  text-center md:text-left gap-3 p-5 md:w-1/2 ">
            <h1 className="lg:flex text-teal-200 underline lg:mx-auto lg:justify-center decoration-teal-200">
              ABOUT US
            </h1>
            <h1 className="lg:flex text-white text-4xl mt-4 ml-8 md:mt-auto md:ml-auto lg:justify-center font-semibold">
              Excellence driven
            </h1>
            <h1 className="lg:flex text-teal-200 text-4xl ml-8 mt-2 md:mt-auto md:ml-auto lg:justify-center font-semibold underline decoration-teal-200 ">
              Superior Results.
            </h1>
            <div className="text-teal-400 flex font-thin mt-8 ml-10  justify-center md:justify-start lg:justify-center md:ml-auto text-justify ">
              <h1 className="flex lg:hidden">
                Lorem ipsum, adipisicing elit.
                <br /> Dicta id quidem impedit, autem ad nam
                <br />
                quos aut eos tenetur numquam <br />
                non mannate huwayta.
              </h1>
              <h1 className="hidden lg:flex">
                Lorem ipsum, adipisicing elit. Dicta id quidem impedit, <br />
                autem ad nam quos aut eos tenetur num non mannate huwayta.
              </h1>
            </div>
            <div className=" block justify-center md:justify-start lg:justify-center mt-4 lg:flex">
              <div className="flex justify-start ml-20 md:mx-auto my-4">
                <span className="flex text-center">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="w-4 h-4 p-3 rounded-full mr-4 bg-teal-200 text-teal-700"
                  />
                </span>
                <div className="block">
                  <span className="flex  text-teal-100 font-black">
                    Call Us Now
                  </span>
                  <span className="flex  text-teal-100">[69]5548125</span>
                </div>
              </div>
              <div className="flex justify-start ml-20 md:mx-auto my-4">
                <span className="flex text-center">
                  <FontAwesomeIcon
                    icon={faComments}
                    className="w-4 h-4 p-3 rounded-full mr-4 bg-teal-200 text-teal-700"
                  />
                </span>
                <div className="block">
                  <span className="flex  text-teal-100 font-black">
                    Send a Message
                  </span>
                  <span className="flex  text-teal-100">
                    info@pronastibur.com
                  </span>
                </div>
              </div>
            </div>
            <div className="flex justify-center p-4">
              <ButtonMore />
            </div>
          </div>
        </div>
      </section>
    );
};

export default About;