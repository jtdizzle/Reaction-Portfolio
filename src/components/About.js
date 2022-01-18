import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Jonathan.
            <br className="hidden lg:inline-block" />Aspiring web developer.
          </h1>
          <p className="mb-8 leading-relaxed">
          “Yesterday is history, tomorrow is a mystery, today is a gift, which is why we call it the present”   ― Bill Keane / Kung-fu Panda
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-500 hover:text-black rounded text-lg">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-500 hover:text-black rounded text-lg">
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:flex-grow md:w-1/2 ">
        <div class="mx-20 ...">
            <img 
               alt="hero"
               src="/JT.jpg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

