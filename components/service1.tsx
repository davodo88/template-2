
import React from "react";
import ButtonMore from "./atoms/buttonMore";

import Slide from "./atoms/slide";


const Service1 = () => {
    return (
      <section className="font-serif  block">
        <section id="uno" className="block lg:flex">
          <div className="block h-max  lg:w-1/2 p-3  mt-10 ">
            <p className="flex text-xs justify-center lg:-ml-32 lg:mb-4 underline decoration-teal-500 underline-offset-2 text-teal-700 ">
              WHAT WE OFFER
            </p>
            <p className="flex text-3xl lg:text-5xl justify-center lg:ml-9 lg:mb-3">Custom Therapy For</p>
            <p className="flex text-3xl lg:text-5xl justify-center text-teal-500 underline decoration-1 underline-offset-2 decoration-teal-500">
              Everyone´s Needs.
            </p>
          </div>
          <div className="block h-max text-center mx-6 lg:mt-12 lg:w-1/2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sed ipsa
            eum illum expedita magni atque nostrum ut, rem eveniet cupiditate
            officiis beatae, tenetur architecto excepturi voluptas aliquam dolor
            impedit?
            <span className="flex mt-10 justify-center">
              <ButtonMore />
            </span>
          </div>
        </section>
        <section id="dos" className="flex">
          <Slide />
        </section>
      </section>
    );
};

export default Service1;