import React, { useRef } from "react";
import Telephonecontainer from "./components/telephonecontainer";
import { motion, useInView } from "motion/react";

const textVariants = {
  initial: {
    x: -100,
    y: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const listVariants = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.5,
    },
  },
};

const services = [
  {
    id: 1,
    img: "/service1.png",
    title: "Frontend Development",
  },
  {
    id: 2,
    img: "/service2.png",
    title: "Landing Page",
  },
  {
    id: 3,
    img: "/service3.png",
    title: "Good Listener",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-200px" });

  return (
    <div
      ref={ref}
      className="
        relative
        flex flex-col lg:flex-row
        items-center lg:justify-between
        min-h-screen
        overflow-hidden
        px-2 lg:px-5
        mx-auto
      "
    >
      {/* LEFT */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6 ml-10">
        <motion.h1
          variants={textVariants}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="text-6xl font-cursive italic font-bold"
        >
          I am one call away
        </motion.h1>

        <motion.div
          variants={listVariants}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="flex flex-col gap-4 w-[50%]"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={listVariants}
              className="flex items-center gap-4 p-3 rounded-lg bg-[#6e3097] bg-opacity-70 cursor-pointer"
            >
              <img
                src={service.img}
                alt={service.title}
                className="w-12 h-12 object-contain"
              />
              <h3 className="text-lg font-medium">{service.title}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* RIGHT */}
      <div className="w-full lg:w-1/2 flex items-center justify-center">
        <Telephonecontainer />
      </div>
    </div>
  );
};

export default Projects;
