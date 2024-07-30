import React from "react";

import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";
import Image from "next/image";

const Experience = () => {
  return (
    <div className="py-20 w-full" id="workExperience">
      <h1 className="heading">
        My <span className="text-primaryColor">work experience</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: "rgba(8, 43, 8, 0.5)",
              backgroundColor:
                "linear-gradient(90deg, rgba(10,50,0,1) 4%, rgba(0,72,5,1) 36%, rgba(2,178,12,1) 100%)",
            }}
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <div className="w-16 mb-3 md:mb-0 md:w-32 self-center rounded-full overflow-hidden bg-white">
                <img
                  className="object-cover rounded-full"
                  src={card.thumbnail}
                  alt={card.thumbnail}
                />
              </div>

              <div className="lg:ms-5">
                <h1 className="text-center md:text-start text-xl md:text-2xl font-bold">
                  {card.title}
                </h1>
                <h3 className="text-center md:text-start mt-1 text-xs">
                  {card.role}
                </h3>

                <p className="text-center md:text-start text-white-100 mt-3 font-semibold">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
