import React from "react";
import {
  MeshDistortMaterial,
  OrbitControls,
  PerspectiveCamera,
  Sphere,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Preload } from "@react-three/drei";

const Blob: React.FC = () => {
  return (
    <Canvas id="Hero" className="Hero w-full h-full">
      <PerspectiveCamera makeDefault={true} position={[0, 0, 8]} />
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} />
      <mesh>
        <OrbitControls enableZoom={false} />
        <Sphere args={[1.9, 100, 100]} scale={1.1}>
          <MeshDistortMaterial color={0xff00ff} speed={3} />
        </Sphere>
      </mesh>
      <Preload all />
    </Canvas>
  );
};

export default Blob;
