import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import Image from "next/image";
import { SparklesCore } from "./ui/Sparkles";

const Hero = () => {
  return (
    <div className="pb-20 pt-32 md:pt-28">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="green" />
      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.05] bg-grid-black/[0.2] flex absolute top-0 left-0 items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex md:gap-10 flex-col md:flex-row items-center relative mb-10 z-10">
        <div className="md:max-w-[70%] text-center md:text-left flex flex-col ">
          <h2 className="animate-fadeIn uppercase text-sx text-blue-100">
            Seeking Full Stack Development Opportunities
          </h2>

          <div className="hidden md:inline-flex">
            <TextGenerateEffect
              mobScreen={false}
              className="w-[90%] text-left text-5xl lg:text-6xl"
              words="Hi I'am Ubaid, an Aspiring MERN STACK DEVELOPER"
            />
          </div>
          <div className="inline-flex md:hidden">
            <TextGenerateEffect
              mobScreen={true}
              className="text-[36px] text-center"
              words="Hi I'am Ubaid, The MERN STACK DEVELOPER"
            />
          </div>

          <p className=" animate-fadeIn md:max-w-[50vw] mb-4 tracking-wider md:tracking-normal text-md md:text-lg lg:text-2xl">
            A Software engineer specialized in the MERN stack with problem
            solving skills and a passion for clean, efficient code. I turn ideas
            into solutions through curiosity and collaboration.
          </p>
          <a href="#projects" className="animate-fadeIn lg:w-28">
            <MagicButton
              title="View my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
        <div className="hidden md:inline-flex">
          <div className="z-50 relative">
            <Image
              className="object-cover h-full drop-shadow-lg"
              src="/ubaid_image.png"
              alt="Portfolio Owner Image"
              width={400}
              height={400}
            />
            <div className="absolute inset-0  mt-[121%] bg-gradient-to-t from-primaryColor via-transparent to-transparent opacity-20 h-1/4 rounded-lg" />
          </div>
          <SparklesCore
            className="absolute z-0 h-full"
            background="transparent"
            particleColor="#3de07b"
            minSize={0.5}
            maxSize={1.6}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
