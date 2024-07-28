"use client";

import { projects } from "@/data";
import { ThreeDCardDemo } from "./ui/Card3D";

const RecentProjects = () => {
  return (
    <section id="projects" className="py-20">
      <h1 className="heading -mb-6">
        A small selection of{" "}
        <span className="text-primaryColor">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center md:p-4 md:gap-x-10">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[35rem] mt-6 md:mt-0 md:h-[37rem] sm:w-96"
            key={item.id}
          >
            <ThreeDCardDemo
              title={item.title}
              description={item.des}
              imgSource={item.img}
              icons={item.iconLists}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentProjects;
