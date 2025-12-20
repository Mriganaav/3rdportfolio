import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { TelephoneModel } from "./Telehpone";
import { OrbitControls } from "@react-three/drei";

const Telephonecontainer = () => {
  return (
    <div className="relative w-full h-[60vh] sm:h-[70vh] lg:h-[90vh] overflow-hidden">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 5, 5]} intensity={5} />
          <directionalLight position={[-5, -5, -5]} intensity={7.5} />

          <TelephoneModel
            scale={
              typeof window !== "undefined" && window.innerWidth < 640 ? 10 : 15
            }
            position={[0, -0.5, 0]}
            rotation={[6, 4, 0]}
          />

          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Telephonecontainer;
