import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { title } from "process";
import React from "react";
import { classNames } from "../utils/utils";



const ChoseUs = () => {

const targets = [
  {
    background: "light",
    icon: "",
    title: "",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
  },

  {
    background: "dark",
    icon: "",
    title: "",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
  },

  {
    background: "light",
    icon: "",
    title: "",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
  },
];

    return (
        <section className="inline-block ">
            <div className="flex justify-around">
                <div className="inine-block w-1/3">
                    <div className="">WHY CHOOSE US</div>
                    <div className="">
                        <p>We Make Your <br /> Hour {" "} 
                        <span className="text-teal-600 underline underline-offset-2 
                        decoration-teal-600">Worthwhile</span></p>
                    </div>
                </div>
                <div className="flex w-1/3 text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Perfer Maiores ex est ratione illo adipisci in minima ab culpa.
                </div>
            </div>
            <div className="w-screen">
            {targets.map((target, index) => {
            return (
              <div
                key={index}
                className={classNames(
                  "",
                  target.background === "light"
                    ? "text-teal-700"
                    : "bg-teal-300"
                )}
              >
                <FontAwesomeIcon icon={"function"} />
                <span
                  className={classNames(
                    "",
                    target.background === "light"
                      ? "text-teal-700 decoration-teal-700"
                      : "bg-teal-300 decoration-teal-300"
                  )}
                >
                  {target.title}
                </span>
              </div>
            );
            })};
            </div>
            <div className="">
                <div className=""></div>
                <div className="">

                </div>
            </div>
        </section>
    );
};

export default ChoseUs;