import React from "react";
import Image from "next/image";
import ButtonMore from "./atoms/buttonMore";
import Consultor from "../images/services/consultor1.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faLaptop } from "@fortawesome/free-solid-svg-icons";


const WhoWeAre = () => {
    return (
      <>
        <section className="block md:flex bg-teal-100 w-screen h-max py-20">
          <div className="block md:flex md:justify-center md:w-1/2 md:my-auto h-auto p-10 mb-10 md:mb-auto relative">
            <div className="flex mx-auto md:justify-center w-max h-max relative">
              <div
                id="back1"
                className="absolute top-6 right-6  w-28 h-28 
              rounded-tr-[45%] rounded-tl-[75%] rounded-br-[45%] bg-teal-300"
              ></div>
              <div
                id="back2"
                className="absolute -bottom-10 -left-6 md:-left-10 w-28 h-28 rounded-tl-[45%] rounded-bl-[75%] rounded-br-[45%] bg-teal-500"
              ></div>
              <div className="">
                <div className="absolute left-0 bottom-0 bg-teal-400 border-r-8 border-teal-300 rounded-tl-[75%] rounded-tr-[70%] w-64 h-52"></div>
                <div id="doctor" className="flex mx-auto mt-12 w-64 h-60 z-40">
                  <Image
                    src={Consultor}
                    width={700}
                    height={700}
                    alt="consultoria"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="block text-center md:w-1/2 h-auto">
            <div className="mb-6 text-xl underline decoration teal-800 text-teal-800 underline-offset-2">
              WHO WE ARE
            </div>
            <div className="text-4xl">
              <span className="">You Don´t</span>
              <br />
              <span className="">
                Deserve{" "}
                <span className="underline decoration teal-800 text-teal-800 underline-offset-2">
                  The Pain
                </span>
              </span>
            </div>
            <div className="inline-block m-8 text-center md:text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              incidunt, quae, voluptatem velit, repudiandae hic quas quo minima
              dolores accusantium quidem rem! Accusantium quibusdam adipisci
              optio.
              <div className="inline-block md:flex p-2 mt-8 ">
                <span className="block md:w-1/2 ">
                  <div className="flex text-2xl justify-center text-teal-700 mb-4 underline underline-offset-2 decoration-teal-700">
                    <FontAwesomeIcon
                      icon={faLaptop}
                      className="bg-teal-500 p-1 text-white
                      rounded-tl-[63%] rounded-tr-[37%] rounded-bl-[35%] rounded-br-[60%]"
                    />
                    OnLine Consulting
                  </div>
                  <div className="flex text-sm justify-start mb-4">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Porro dolore, eaque reiciendis odit.
                  </div>
                </span>
                <span className="block md:w-1/2">
                  <div className="flex gap-4 text-2xl justify-center text-teal-700 mb-4 underline underline-offset-2 decoration-teal-700">
                    <FontAwesomeIcon
                      icon={faCalendarDays}
                      className="bg-teal-500 p-1 text-white
                      rounded-tl-[63%] rounded-tr-[37%] rounded-bl-[35%] rounded-br-[60%]"
                    />
                    OffLine Consulting
                  </div>
                  <div className="flex text-sm">
                    Lorem ipsum, dolor sit amet adipisicing elit. Aliquid
                    inventore hic ad voluptatum odio eligendi!
                  </div>
                </span>
              </div>
            </div>
            <div className="hidden md:flex justify-around mb-12 ">
              <div className="flex relative  w-44 h-14">
                <div className="flex absolute text-left w-32 border-t-4 border-teal-400">
                  Therapy
                </div>
                <div className="flex absolute text-right justify-end w-44 border-t-2 border-teal-400">
                  80%
                </div>
              </div>
              <div className="flex relative  w-44 h-14">
                <div className="flex absolute border-t-4 w-32 border-teal-400">
                  Counselling
                </div>
                <div className="flex absolute justify-end w-44 border-t-2 border-teal-400">
                  29%
                </div>
              </div>
            </div>
            <ButtonMore />
          </div>
        </section>
      </>
    );
};

export default  WhoWeAre;