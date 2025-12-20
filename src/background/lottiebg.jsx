// background/lottiebg.tsx
import Lottie from "lottie-react";
import animationData from "./spring.json";

const LottieBackground = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Lottie
        animationData={animationData}
        loop
        autoplay
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default LottieBackground;
