"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";
import SliderBtns from "@/components/SliderBtns";
import "swiper/css";
import { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipProvider,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const projects = [
  {
    num: "01",
    category: "Frontend",
    title: "Project 1",
    description: "Project 1 descriptiod afse kjfbdhfsfjvjlx gfdjbv",
    stack: [{ name: "React" }, { name: "React" }, { name: "React" }],
    img: "/assets/work/thumb1.png",
    link: "",
    github: "https://github.com/DanielvG-IT/",
  },
  {
    num: "02",
    category: "Backend",
    title: "Project 2",
    description: "Project 2 descriptiod afse kjfbdhfsfjvjlx gfdjbv",
    stack: [{ name: "React" }, { name: "React" }, { name: "React" }],
    img: "/assets/work/thumb2.png",
    link: "",
    github: "https://github.com/DanielvG-IT/",
  },
  {
    num: "03",
    category: "Fullstack",
    title: "Project 3",
    description: "Project 3 descriptiod afse kjfbdhfsfjvjlx gfdjbv",
    stack: [{ name: "React" }, { name: "React" }, { name: "React" }],
    img: "/assets/work/thumb3.png",
    link: "",
    github: "https://github.com/DanielvG-IT/",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // Set project based on active slide index
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}>
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* number outline */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category}
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* techstack */}
              <ul className="flex gap-4">
                {project.stack.map((stack, index) => (
                  <li key={index} className="text-xl text-accent">
                    {stack.name}
                    {/* Remove last comma */}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                <Link href={project.link}>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Visit Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* Github button */}
                <Link href={project.github}>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>GitHub Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              onSlideChange={handleSlideChange}
              className="xl:h-[520px] mb-12">
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-500">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.img}
                          fill
                          alt={project.title}
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <SliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                iconsStyles=""
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
