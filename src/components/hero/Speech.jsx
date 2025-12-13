import React from "react";
import { TypeAnimation } from "react-type-animation";

const Speech = () => {
  return (
    <div className="flex flex-row-reverse items-end gap-5 scale-100 md:scale-110">
      
      {/* Avatar */}
      <img
        src="/man.png"
        alt="man"
        className="
          w-8 h-8
          md:w-12 md:h-12
          rounded-full
          object-cover
          shadow-lg border border-[#3F5EFB] mr-10
        "
      />

      {/* Speech bubble */}
      <div
        className="
          bg-white text-black
          px-6 py-4
          md:px-10 md:py-6
          rounded-t-3xl rounded-bl-3xl
          max-w-[70vw] md:max-w-[520px]
          shadow-xl
        "
      >
        <TypeAnimation
          sequence={[
            1000,
            "How are you?",
            1200,
            "I am fine 😊",
            1200,
            "Let's build something cool 🚀",
            1500,
          ]}
          speed={50}
          deletionSpeed={60}
          omitDeletionAnimation
          wrapper="span"
          repeat={Infinity}
          className="
            block
            text-lg
            sm:text-xl
            md:text-2xl
            leading-relaxed
            font-medium
          "
        />
      </div>

    </div>
  );
};

export default Speech;
