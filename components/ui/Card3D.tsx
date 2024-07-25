"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./Card3DConfig";
import { FaLocationArrow } from "react-icons/fa6";

export const ThreeDCardDemo = ({
  title,
  description,
  imgSource,
  icons,
  position,
  onClickHandler,
  otherClasses,
}: {
  title?: string;
  description?: string;
  imgSource: string;
  icons?: React.ReactNode;
  position?: string;
  onClickHandler?: () => void;
  otherClasses?: string;
}) => {
  return (
    <CardContainer className="inter-var">
      <CardBody
        className="bg-gray-50 relative group/card  dark:hover:shadow-2xl cursor-pointer dark:hover:shadow-emerald-500/[0.1] dark:bg-[#001a00] dark:border-white/[0.2] border-black/[0.1]
       w-auto   h-auto rounded-xl p-6 border  "
      >
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={imgSource}
            height="1500"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-10">
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl text-sm font-normal dark:text-white"
          >
            try now
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="flex items-center gap-x-2 px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-sm md:text-base font-bold"
          >
            Demo
            <FaLocationArrow />
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
};
