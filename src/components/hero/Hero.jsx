import Speech from "./Speech";
import { motion } from "motion/react";
import Shape from "./Shape";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Lottie from "lottie-react";
import avatarAnim from "./utils/HamsterWheelLoading.json";

const Education = {
  initial: { x: -100, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, staggerChildren: 0.2 },
  },
};

const socialMedia = {
  initial: { y: -100, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 1, staggerChildren: 0.2 },
  },
};

const Hero = () => {
  return (
    <div
      className=" relative
  flex flex-col lg:flex-row
  items-center lg:justify-between
  min-h-screen
  overflow-hidden
  px-4 lg:px-5
   mx-auto"
    >
      {/* LEFT */}
      <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-start  lg:justify-center justify-start gap-8 text-center lg:text-left relative z-10">
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl lg:text-6xl text-pink-400"
        >
          Hey there, <br />
          <span className="text-white">I'm Mriganaav</span>
        </motion.h1>

        {/* Designation */}
        <motion.div
          variants={Education}
          initial="initial"
          animate="animate"
          className="w-full max-w-sm"
        >
          <h2 className="text-xl font-semibold">Frontend Developer</h2>
          <p className="text-sm text-gray-300">Going with the flow</p>
        </motion.div>

        {/* Education */}
        <div className="flex flex-col items-center lg:items-start gap-4">
          <h2 className="text-2xl lg:text-3xl text-white">Education</h2>
          <div className="flex gap-4">
            <img src="/instagram.png" width={30} />
            <img src="/instagram.png" width={30} />
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.a
          animate={{ y: [0, 5], opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
          href="/"
          className="hidden lg:block"
        >
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
            <path
              d="M5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9Z"
              stroke="white"
            />
            <motion.path
              animate={{ y: [0, 9], opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              d="M12 5V8"
              stroke="white"
            />
          </svg>
        </motion.a>
      </div>

      {/* RIGHT */}
      <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-end justify-center gap-8 mt-10 lg:mt-0 relative z-10">
        {/* Socials */}
        <motion.div
          variants={socialMedia}
          initial="initial"
          animate="animate"
          className="
            flex lg:flex-col gap-4
            bg-[#3F5EFB]/70
            p-4 rounded-xl
          "
        >
          <img src="/instagram.png" width={40} />
          <img src="/github.png" width={40} className="invert" />
          <img src="/linkedin.png" width={40} className="invert" />
        </motion.div>

        <Speech />
        {/* contact circle */}
        <motion.a
          href="/#contact"
          animate={{ scale: [0.9, 1] }}
          transition={{ duration: 1 }}
          className="relative w-[120px] h-[120px] lg:w-[150px] lg:h-[150px]"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="relative w-full h-full flex items-center justify-center"
          >
            {/* Circle + Text */}
            <svg
              viewBox="0 0 200 200"
              className="absolute inset-0 w-full h-full z-0 pointer-events-none"
            >
              <circle cx="100" cy="100" r="90" fill="pink" />
              <path
                id="circlePath"
                fill="none"
                d="M 100,100 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
              />
              <text fontSize="14" fontWeight="600" fill="black">
                <textPath href="#circlePath">
                  Hire Me • Contact • Hire Me •
                </textPath>
              </text>
            </svg>

            {/* Arrow (CENTER) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="relative z-10 w-[36px] h-[36px]"
              fill="none"
              stroke="black"
              strokeWidth="2"
            >
              <line x1="6" y1="18" x2="18" y2="6" />
              <polyline points="9 6 18 6 18 15" />
            </svg>
          </motion.div>
        </motion.a>
      </div>

      <div
        className="
    pointer-events-none
    absolute
    left-1/2 bottom-0
    -translate-x-1/2
    flex items-end justify-center
    z-0
    w-[350px] md:w-[500px] lg:w-[750px]
    h-[60vh] lg:h-[100vh]
  "
      >
        {/* SHAPE */}
        <div className="absolute inset-0 -z-10">
          <Canvas>
            <Suspense fallback={null}>
              <Shape />
            </Suspense>
          </Canvas>
        </div>

        <Lottie
          animationData={avatarAnim}
          loop
          autoplay
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default Hero;
