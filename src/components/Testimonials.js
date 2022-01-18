import React from "react";
import {UsersIcon } from "@heroicons/react/solid";


export default function Testimonials() {
  return (
    <section id="testimonials">
      <div className="container px-20 py-10 mx-auto text-center">
        <UsersIcon className="w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          My Story
        </h1>
        <div class="mx-8 ...">
        <br></br>
            <p>I Started my coding journey in mid 2021. I have worked in the garage door industry for seven years. I have really enjoyed this career. However its time for a change! So following one of my passions, I've decided to start a new career in coding. I really enjoy a challenge and love the 
               creativity that's involved in it.
            </p>
        </div>
        
      </div>
    </section>
  );
}