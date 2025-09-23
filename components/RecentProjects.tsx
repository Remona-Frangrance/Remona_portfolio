"use client";

import { FaLocationArrow } from "react-icons/fa6";
import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiStripe,
  SiFramer,
  SiMui,
  SiVite,
} from "react-icons/si";
import type { ComponentType } from "react";

import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

const ICONS: Record<string, ComponentType<{ className?: string; color?: string }>> = {
  react: SiReact,
  typescript: SiTypescript,
  tailwindcss: SiTailwindcss,
  redux: SiRedux,
  nodejs: SiNodedotjs,
  express: SiExpress,
  mongodb: SiMongodb,
  stripe: SiStripe,
  framer: SiFramer,
  mui: SiMui,
  vite: SiVite,
};

const BRAND_COLORS: Record<string, string> = {
  react: "#61DAFB",
  typescript: "#3178C6",
  tailwindcss: "#06B6D4",
  redux: "#764ABC",
  nodejs: "#339933",
  express: "#FFFFFF", // express logo is black; use white on dark bg
  mongodb: "#47A248",
  stripe: "#635BFF",
  framer: "#0055FF",
  mui: "#007FFF",
  vite: "#646CFF",
};

const RecentProjects = () => {
  const renderProjectCard = (item: any) => (
    <div
      className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
      key={item.id}
    >
      <PinContainer title={item.title} href={item.link}>
        <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
          <div
            className="relative w-full h-full overflow-hidden lg:rounded-3xl"
            style={{ backgroundColor: "#13162D" }}
          >
            <img src="/bg.png" alt="bgimg" />
          </div>
          <img src={item.img} alt="cover" className="z-10 absolute bottom-0" />
        </div>

        <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">{item.title}</h1>
        <p
          className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
          style={{ color: "#BEC1DD", margin: "1vh 0" }}
        >
          {item.des}
        </p>

        <div className="flex items-center justify-between mt-7 mb-3">
          <div className="flex items-center">
            {item.iconLists.map((key: string, index: number) => {
              const Icon = ICONS[key];
              return (
                <div
                  key={index}
                  className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                  style={{ transform: `translateX(-${5 * index + 2}px)` }}
                  title={key}
                >
                  {Icon ? (
                    <Icon
                      className="lg:text-xl text-base"
                      color={BRAND_COLORS[key] || "#FFFFFF"}
                    />
                  ) : (
                    <span className="text-[10px] text-white/80 px-1 capitalize">{key}</span>
                  )}
                </div>
              );
            })}
          </div>
          <div className="flex justify-center items-center">
            <p className="flex lg:text-xl md:text-xs text-sm text-purple">Check Live Site</p>
            <FaLocationArrow className="ms-3" color="#CBACF9" />
          </div>
        </div>
      </PinContainer>
    </div>
  );

  const pros = projects.filter((p: any) => p.type === "professional");
  const personals = projects.filter((p: any) => p.type === "personal");
  const dummies = projects.filter((p: any) => p.type === "dummy");

  return (
    <div id="projects" className="py-20 scroll-mt-40">
      <h1 className="heading">A small selection of <span className="text-purple">recent projects</span></h1>

      {pros.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-white">Professional Projects</h2>
          <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
            {pros.map(renderProjectCard)}
          </div>
        </div>
      )}

      {(personals.length > 0 || dummies.length > 0) && (
        <div className="mt-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-white">Personal & Dummy Projects</h2>
          <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
            {[...personals, ...dummies].map(renderProjectCard)}
          </div>
        </div>
      )}
    </div>
  );
};

export default RecentProjects;
