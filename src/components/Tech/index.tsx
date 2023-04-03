import { technologies } from "../../constants";
import React from "react";
import { Canvas } from "@react-three/fiber";
import { Decal, OrbitControls, Preload, useTexture } from "@react-three/drei";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl.src]);

  return (
    <>
      <OrbitControls enableZoom={false} />
      <ambientLight intensity={0.2} />
      <directionalLight position={[0, 10, 10]} />
      <mesh scale={2.75}>
        <icosahedronGeometry args={[1, 2]} />
        <meshStandardMaterial color="#fff8eb" flatShading />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          map={decal}
          flatShading
        />
      </mesh>
    </>
  );
};

const Tech = () => {
  return (
    <div className="flex justify-center w-full">
      <div className="flex flex-row flex-wrap justify-center gap-6 max-w-7xl">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <Canvas
              frameloop="demand"
              dpr={[1, 2]}
              gl={{ preserveDrawingBuffer: true }}
            >
              <Ball imgUrl={technology.icon} />

              <Preload all />
            </Canvas>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tech;
