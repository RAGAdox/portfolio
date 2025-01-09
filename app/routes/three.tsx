import { PerspectiveCamera } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Mesh } from "three";

const RotatingCube = () => {
  const meshRef = useRef<Mesh>(null);
  useFrame(() => {
    const currentMeshObject = meshRef.current;
    if (currentMeshObject) {
    }
  });
  return (
    <>
      <mesh ref={meshRef} position={[0, 2, 0]}>
        <cylinderGeometry args={[1, 1, 1]} />
        <meshLambertMaterial />
      </mesh>
      <mesh>
        <boxGeometry args={[1, 3, 1]} />
        <meshLambertMaterial />
      </mesh>
    </>
  );
};
const WelcomeScreen = () => {
  const position: [number, number, number] = [10, 10, 10];
  const fov = 25;

  return (
    <div className=" absolute w-full h-full inset-0">
      <Canvas className="w-full h-full">
        <PerspectiveCamera makeDefault position={[0, 0, 30]} />
      </Canvas>
    </div>
  );
};

export default WelcomeScreen;
