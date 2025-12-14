import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { TelephoneModel } from "./Telehpone";
import { OrbitControls, Stage } from "@react-three/drei";

const Telephonecontainer = () => {
  return (
    <div className="w-full h-[70vh] lg:h-[90vh]">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
      >
        <Suspense fallback={null}>
          <Stage
            environment="city"
            intensity={0.6}
            adjustCamera
          >
            <TelephoneModel scale={1.2} />
          </Stage>

          <OrbitControls
            enableZoom={false}
            autoRotate
            autoRotateSpeed={1}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Telephonecontainer;
