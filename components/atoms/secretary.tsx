import React from 'react'
import secretaria from '../../images/choose/secretaria.jpg'
import signature from '../../images/choose/signe.png'
import Image from 'next/image';

function Secretary() {
  return (
    <div className="inline-block lg:inline-flex my-16 w-screen justify-center">
        <div className="flex my-auto w-screen px-4 text-center md:text-lg lg:w-1/3 font-Gothic">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur
          asperiores, exercitationem iste sapiente illo distinctio maxime iure
          odio laboriosam rem quam cum accusamus eius.
        </div>
        <div className="inline-block lg:inline-flex w-screen lg:w-max ">
          <div className="my-6 lg:my-auto mx-auto w-screen lg:w-36 lg:h-44 lg:mx-3">
            <Image
              src={secretaria}
              height={"900"}
              width={"900"}
              alt="Sevanna"
              className=""
            />
          </div>
          <div className="m-auto">
            <div className="flex m-auto w-max h-max text-3xl ">
              <div className="flex mr-4">CEO</div>
              <div className="flex pl-4 border-l-4 border-teal-400 font-PT">
                Sevannah Nguyen
              </div>
            </div>
            <div className=" mx-auto my-4 w-44 h-24 lg:w-32 ">
              <Image src={signature} width={"200"} height={"125"} alt="firma" />
            </div>
          </div>
        </div>
    </div>
  );
}

export default Secretary