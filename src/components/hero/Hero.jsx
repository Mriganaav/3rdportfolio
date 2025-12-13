import Speech from "./Speech";
import { motion } from "motion/react";
const Education = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};

const socialMedia = {
  initial: {
    y: -100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};
const Hero = () => {
  return (
    <div className="flex overflow-hidden h-dvh">
      {/* Left */}
      <div className=" w-1/2 h-full flex flex-col justify-between">
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="mt-[50px] text-6xl text-[pink]"
        >
          Hey there, <br />
          <span className="text-white">I'm Mriganaav</span>
        </motion.h1>
        {/* Designation */}
        <motion.div
          variants={Education}
          initial="initial"
          animate="animate"
          className=" w-[30%] "
        >
          <h2>Frontend Developer</h2>
          <p className="text-xs text-[#ddd]  mx-0">Going with the flow</p>
        </motion.div>
        <div className="w-[30%] flex flex-col">
          <h2 className="text-4xl text-[white]">Education</h2>
          <div className="flex gap-3 mt-4">
            <a href="/">
              <img
                src="instagram.png"
                alt="school"
                width={30}
                height={30}
                className="mb-2"
              />
            </a>
            <a href="/">
              <img src="instagram.png" alt="school" width={30} height={30} />
            </a>
          </div>
        </div>
        <div>
          <motion.a
            animate={{ y: [0, 5], opacity: [0, 1, 0] }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut",
            }}
            href="/"
            className="mb-[50px] w-max block"
          >
            <svg
              width="50"
              height="50"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9Z"
                stroke="white"
                strokeWidth="1"
              />
              <motion.path
                animate={{ y: [0, 9], opacity: [0, 1, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: "easeInOut",
                }}
                d="M12 5V8"
                stroke="white"
                strokeWidth="1"
                strokeLinecap="round"
              />
            </svg>
          </motion.a>
        </div>
      </div>

      {/* Right */}
      <div className=" w-1/2 h-full flex flex-col justify-between items-end">
        <div className="flex flex-col gap-3 w-20 p-4 bg-[#3F5EFB] opacity-70 rounded-br-[10px]">
          <a href="/">
            <img src="/instagram.png" alt="instagram" width={50} height={50} />
          </a>
          <a href="/">
            <img
              src="/github.png"
              alt="github"
              width={50}
              height={50}
              className="invert"
            />
          </a>
          <a href="/">
            <img
              src="/linkedin.png"
              alt="linkedin"
              width={50}
              height={50}
              className="invert"
            />
          </a>
          <div className="w-32 h-full w-max-block  whitespace-nowrap bg-[#EB0C47] text-[pink] rotate-90 origin-top-left translate-x-5 py-0 px-2 rounded-br-md">
            FOLLOW ME
          </div>
        </div>
        <Speech />

        <a className="relative inline-flex items-center justify-center w-[150px] h-[150px]">
          {/* Circle + Text */}
          <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full">
            <circle cx="100" cy="100" r="90" fill="pink" />

            <path
              id="innerCirclePath"
              fill="none"
              d="M 100,100 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
            />

            <text fontSize="14" fontWeight="600" fill="black">
              <textPath href="#innerCirclePath" startOffset="0%">
                Hire Now •
              </textPath>
              <textPath href="#innerCirclePath" startOffset="50%">
                Contact Me •
              </textPath>
            </text>
          </svg>

          {/* Arrow Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="relative z-10 w-[40px] h-[40px]"
            fill="none"
            stroke="black"
            strokeWidth="2"
          >
            <line x1="6" y1="18" x2="18" y2="6" />
            <polyline points="9 6 18 6 18 15" />
          </svg>
        </a>
      </div>
      <div>
        <div className="absolute inset-0 top-10 -z-10">
          <div
            className="
            absolute
            left-1/2 -translate-x-1/2
            md:left-64 md:translate-x-0
            bottom-0
            h-[80%]
            w-auto
            pointer-events-none
          "
          >
            <img
              src="/me.png"
              alt="myself"
              className="
              h-full
              w-auto
              object-contain
              max-w-[90vw]
              md:max-w-none
            "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
