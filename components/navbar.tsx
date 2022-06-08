import React from 'react';
import Link from 'next/link'
import { useState }  from 'react';
import Image from 'next/image';
import Logo from '../images/logoLoto.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons'; 

const responsiveMenu = [
  { name: "Home", target: "#home" },
  { name: "Pages", target: "#pages" },
  { name: "Portfolio", target: "#informacion" },
  { name: "Blog", target: "#blog" },
  { name: "Contact", target: "#contact" },
];
 function Navbar() {

  const [menu, setMenu] = useState(false);

  const handleNavbar = () => {
    menu ? setMenu(false) : setMenu(true);
  };
  

  return (
    <nav className="relative flex font-serif justify-between items-center  w-full  ">
      <div className=" hidden sm:flex ml-8  bg-slate-100 ">
        <ul className="flex  absolute text-base md:text-xl lg:text-2xl font-light font-serif">
          <li className="mx-3 py-4 hover:border-t-2 hover:border-t-teal-700">
            <Link href="#home">
              <a className=" hover:text-teal-700 ">HOME</a>
            </Link>
          </li>
          <li className="mx-3 py-4 hover:border-t-2 hover:border-t-teal-700">
            <Link href="#pages">
              <a className=" hover:text-teal-700 ">PAGES</a>
            </Link>
          </li>
          <li className="mx-3 py-4 hover:border-t-2 hover:border-t-teal-700">
            <Link href="#informacion">
              <a className=" hover:text-teal-700 ">ABOUT</a>
            </Link>
          </li>
          <li className="mx-3 py-4 hover:border-t-2 hover:border-t-teal-700">
            <Link href="#service">
              <a className=" hover:text-teal-700 ">SERVICE</a>
            </Link>
          </li>
          <li className="mx-3 py-4 hover:border-t-2 hover:border-t-teal-700">
            <Link href="#contact">
              <a className=" hover:text-teal-700 ">CONTACT</a>
            </Link>
          </li>
        </ul>
      </div>
      {menu && (
        <div className="flex  absolute top-8  justify-center bg-gray-400/95  text-teal-700 rounded text-xl z-40 w-full p-5 h-64 ">
          <ul>
            {responsiveMenu.map((etiqueta, index) => {
              return (
                <li key={index}
                  className="p-2 hover:text-teal-700 
                  hover:border-l-2 border-teal-700">
                  
                  <a onClick={() => setMenu(false)} href={etiqueta.target}>
                    {etiqueta.name}
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="p-8">
            <Image src={Logo} width={150} height={150} alt="Logo" />
          </div>
        </div>
      )}

      <button
        id="busqueda"
        onClick={handleNavbar}
        className="md:hidden text-teal-700 p-2  flex"
      >
        <FontAwesomeIcon icon={faBars} className="text-xl ml-2" />
      </button>
    </nav>
  );
}

export default Navbar;