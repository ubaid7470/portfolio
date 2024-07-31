"use client";

import React from "react";

import { testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";

const Clients = () => {
  return (
    <section id="testimonials" className="pt-20">
      <h1 className="heading">
        Hear from Those Who Know
        <span className="text-primaryColor"> My Work Best</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div className="h-[100%] md:h-[20rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </section>
  );
};

export default Clients;
