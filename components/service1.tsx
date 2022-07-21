import { faDumbbell, faHandHoldingDroplet, faMedal, faPersonRunning, faPrescriptionBottleMedical, faShoePrints } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { classNames } from "../utils/utils";
import ButtonMore from "./atoms/buttonMore";
import Slide from "./atoms/slide";


const Service1 = () => {

  const metodes = [
    {
      icon: faHandHoldingDroplet,
      tittle: "Phisical Therapy",
      bg: "light",
    },
    {
      icon: faPrescriptionBottleMedical,
      tittle: "Clinical Pilates",
      bg: "dark",
    },
    {
      icon: faShoePrints,
      tittle: "Chiropractic Therapy",
      bg: "dark",
    },
    {
      icon: faDumbbell,
      tittle: "Sport Injuries",
      bg: "light",
    },
    {
      icon: faPersonRunning,
      tittle: "Posture Corrector",
      bg: "light",
    },
    {
      icon: faMedal,
      tittle: "Sports Mentality",
      bg: "dark",
    },
  ];

    return (
      <section className="font-serif  block">
        <section id="uno" className="block lg:my-20 lg:flex">
          <div className="block h-max  lg:w-1/2 p-3  mt-10 ">
            <p className="flex text-xs justify-center lg:-ml-32 lg:mb-4 lg:text-xl font-Gothic underline decoration-teal-500 underline-offset-2 text-teal-700 ">
              WHAT WE OFFER
            </p>
            <p className="flex text-3xl lg:text-5xl justify-center font-PT lg:ml-9 lg:mb-3">
              Custom Therapy For
            </p>
            <p className="flex text-3xl lg:text-5xl justify-center font-PT text-teal-500 underline decoration-1 underline-offset-2 decoration-teal-500">
              Everyone´s Needs.
            </p>
          </div>
          <div className="block h-max text-center mx-6 lg:mt-16 lg:w-1/3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sed ipsa
            eum illum expedita magni atque nostrum ut, rem eveniet cupiditate
            officiis beatae, tenetur architecto excepturi voluptas aliquam dolor
            impedit?
            <span className="flex mt-10 justify-center">
              <ButtonMore />
            </span>
          </div>
        </section>
        <section id="dos" className="flex lg:my-20">
          <div className="py-10 justify-items-center w-screen md:hidden grid grid-cols-2 gap-2">
            {metodes.map((metode, index) => {
              return (
                <div
                  key={index}
                  className={classNames(
                    "flex flex-col justify-center py-3 w-4/5",
                    metode.bg === "light"
                      ? "bg-teal-700 flex-row-reverse"
                      : "bg-teal-300"
                  )}
                >
                  <FontAwesomeIcon
                    icon={metode.icon}
                    className="border-2 border-gray-500 bg-gray-100 w-7 h-7 p-2 mx-auto my-auto
                    rounded-tr-[45%] rounded-tl-[75%] rounded-br-[45%] rounded-bl-[18%]"
                  />
                  <p className="flex justify-center text-center">
                    {metode.tittle.split(" ")[0]}
                    <br />
                    {metode.tittle.split(" ")[1]}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="hidden md:contents">
            <Slide />
          </div>
        </section>
      </section>
    );
};

export default Service1;