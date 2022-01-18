import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGithubSquare, faLinkedin} from "@fortawesome/free-brands-svg-icons";

export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            WebDev JT
          </a>

        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 hover:text-white">
            Past Work
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Skills
          </a>
          <a href="#testimonials" className="mr-5 hover:text-white">
            My Story
          </a>
        </nav>
        <div 
          
            className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-3xl mt-4 md:mt-0">
           <a href="https://github.com/jtdizzle"target="_blank" rel="noopener noreferrer">
             <FontAwesomeIcon icon={faGithubSquare}className="hover:text-red-600"></FontAwesomeIcon>
            </a>
        </div>

        <div
          
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-3xl mt-4 md:mt-0">
             <a href="https://www.linkedin.com/in/jonathan-taylor-028a42189/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} className="hover:text-red-600"></FontAwesomeIcon></a>
          
        </div>
       
      </div>
    </header>
  );
}