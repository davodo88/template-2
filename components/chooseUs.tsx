import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullseye, faWorm, faYinYang } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { classNames } from "../utils/utils";
import Secretary from "./atoms/secretary";


const ChoseUs = () => {

const targets = [
  {
    background: "light",
    icon: faBullseye,
    title: "Vision",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
  },

  {
    background: "dark",
    icon: faYinYang,
    title: "Mission",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
  },

  {
    background: "light",
    icon: faWorm,
    title: "Experience",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
  },
];

    return (
      <section className="inline-block ">
        <div
          className="inline-block  md:flex
                text-center md:justify-center mt-10"
        >
          <div className="inine-block my-8 w-screen md:w-1/3">
            <div className="flex justify-center mb-7 font-PT text-3xl">
              WHY CHOOSE US
            </div>
            <div className="flex justify-center  font-PT text-4xl">
              <p>
                We Make Your <br /> Hour{" "}
                <span
                  className="text-teal-600 text-4xl font-PT
                              underline underline-offset-2 decoration-teal-600"
                >
                  Worthwhile
                </span>
              </p>
            </div>
          </div>
          <div className="flex px-7 md:w-1/3 font-Gothic font-thin justify-center  text-center">
            <p className="flex m-auto w-auto h-max">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem,
              ipsum dolor sit amet consectetur adipisicing elit. Perfer Maiores
              ex est ratione illo adipisci in minima ab culpa.
            </p>
          </div>
        </div>
        <div
          className="flex flex-col md:flex-row md:justify-center md:p-8 gap-y-3 md:gap-6 mt-12 
                        w-screen h-max"
        >
          {targets.map((target, index) => {
            return (
              <div
                key={index}
                className={classNames(
                  "flex flex-row justify-around md:flex-col w-screen md:w-44 lg:w-64 h-max py-4 md:rounded-xl",
                  target.background === "light"
                    ? "bg-teal-700 flex-row-reverse"
                    : "bg-teal-300"
                )}
              >
                <FontAwesomeIcon
                  icon={target.icon}
                  className="border-2 border-gray-500 bg-gray-100 w-16 h-16 p-2 md:w-10 md:h-10 md:mx-auto my-auto
                  rounded-tr-[45%] rounded-tl-[75%] rounded-br-[45%] rounded-bl-[18%]"
                />
                <div className="flex flex-col">
                  <p
                    className={classNames(
                      "flex m-auto font-PT font-extralight text-3xl underline underline-offset-2",
                      target.icon === faYinYang
                        ? "text-teal-900 decoration-teal-700"
                        : "text-teal-200 decoration-teal-200"
                    )}
                  >
                    {target.title}
                  </p>
                  <p
                    className={classNames(
                      "flex font-Gothic text-center md:mx-auto w-44 my-auto h-max",
                      target.icon === faYinYang
                        ? "text-teal-900 decoration-teal-900"
                        : "text-teal-300 decoration-teal-300"
                    )}
                  >
                    {target.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="">
          <Secretary />
        </div>
      </section>
    );
};

export default ChoseUs;