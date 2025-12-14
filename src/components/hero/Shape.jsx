import { MeshDistortMaterial, Icosahedron } from "@react-three/drei";

const Shape = () => {
  return (
    <>
      <Icosahedron args={[1, 6]} scale={2.6}>
        <MeshDistortMaterial color="#DB8B9B" distort={0.45} speed={2} />
      </Icosahedron>
      <ambientLight intensity={1.5} />
      <directionalLight position={[2, 3, 4]} />
    </>
  );
};

export default Shape;
