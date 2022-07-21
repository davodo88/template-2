import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faDumbbell, faHandHoldingDroplet, faMedal, faPersonRunning, faPrescriptionBottleMedical, faShoePrints, faSpa } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';
import {classNames } from "../../utils/utils";


const Slide = () => {
  
    const cards = [
      { text: "Read More", icon: faHandHoldingDroplet , tittle: "Phisical Therapy", bg: "light" },
      { text: "Read More", icon: faPrescriptionBottleMedical , tittle: "Clinical Pilates", bg: "dark" },
      { text: "Read More", icon: faShoePrints , tittle: "Chiropractic Therapy", bg: "light" },
      { text: "Read More", icon: faDumbbell , tittle: "Sport Injuries", bg: "dark" },
      { text: "Read More", icon: faPersonRunning , tittle: "Posture Corrector", bg: "light" },
      { text: "Read More", icon: faMedal , tittle: "Sports Mentality", bg: "dark" },
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
        <div className="flex justify-around gap-2 mx-auto w-2/3 h-44 my-16">
          <button
            onClick={handlePrev}
            className={classNames(
              "w-12 h-12 mt-20 mx-auto bg-gray-100 rounded-full"
            )}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          {newCards.map((card, index) => {
            return (
              <div
                key={index}
                className={classNames(
                  "block mx-auto w-72 h-56 rounded-md pt-3",
                  card.bg === "light" ? "bg-teal-300" : "bg-teal-700"
                )}
              >
                <FontAwesomeIcon
                  icon={card.icon}
                  className="flex h-9 w-9 mx-auto my-5"
                />
                <span
                  className={classNames(
                    "flex flex-col text-center text-xl mt-2 font-medium text-teal-900",
                    card.bg === "light" ? "text-teal-800" : "text-teal-300"
                  )}
                >
                  <span>{card.tittle.split(" ")[0]}</span>
                  <span>{card.tittle.split(" ")[1]}</span>
                </span>
                <span className="flex justify-center hover:underline decoration-white text-white my-4">
                  {card.text}
                </span>
              </div>
            );
          })}
          <button
            onClick={handleNext}
            className="w-12 h-12 mt-20 mx-auto bg-gray-100 rounded-full"
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </>
    );
};
export default Slide;






