import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faHandHoldingDroplet, faPrescriptionBottleMedical, faShoePrints, faSpa } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';
import {classNames } from "../../utils/utils";


const Slide = () => {
  
    const cards = [
      { text: "Read More", icon: faHandHoldingDroplet , tittle: "Phisical Therapy", bg: "light" },
      { text: "Read More", icon: faPrescriptionBottleMedical , tittle: "Clinical Pilates", bg: "dark" },
      { text: "Read More", icon: faShoePrints , tittle: "chiropractic Therapy", bg: "light" },
      { text: "Read More", icon: faSpa , tittle: "Sport Injuries", bg: "dark" },
      { text: "Read More", icon: faSpa , tittle: "Posture Corrector", bg: "light" },
      { text: "Read More", icon: faSpa , tittle: "Sports Mentality", bg: "dark" },
    ];
  const [prev, setPrev] = useState(1);
  const [next, setNext] = useState(4);
  const [newCards, setNewCards] = useState(cards.slice(prev, next));
    
  const handleNext = () => {
    if (next < cards.length) {
      setNext(next + 1);
      setPrev(prev + 1);
      const newArray = cards.slice(prev + 1, next + 1);
      setNewCards(newArray);
    }
  };
  const handlePrev = () => {
    if (prev > 0) {
      setNext(next - 1);
      setPrev(prev - 1);
      const newArray = cards.slice(prev - 1, next - 1);
      setNewCards(newArray);
    }
  };
    return (
      <>
        <div className="flex justify-center border-2 border-black w-screen">
          <button
            onClick={handlePrev}
            className="w-12 h-12 m-auto border-2 border-red-500"
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          {newCards.map((card, index) => {
            return (
              <div
                key={index}
                className={classNames(
                  "flex justify-center w-36 h-36 rounded-md p-4",
                  card.bg === "light" ? "bg-teal-300" : "bg-teal-700"
                )}
              >
                <FontAwesomeIcon icon={card.icon} />
                <span className=" block text-center lg:text-xl lg:mt-2 font-medium text-teal-900">
                  <span>{card.tittle.split(" ")[0]}</span>
                  <br />
                  <span>{card.tittle.split(" ")[1]}</span>
                </span>
              </div>
            );
          })}
          <button
            onClick={handleNext}
            className="w-12 h-12 m-auto border-2 border-red-500"
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </>
    );
};
export default Slide;






