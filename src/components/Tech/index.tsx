import { technologies } from "../../constants";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  console.log(props.id)

  return (
    <Float
      speed={Math.random() + 3}
      rotationIntensity={Math.random() + 0.5}
      floatIntensity={Math.random() + 2.0}
    >
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.01]} intensity={1.5} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 2]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon.src} />
      </Suspense>
    </Canvas>
  );
};

const Tech: React.FC = () => {
  return (
    <div className="flex justify-center w-full">
      <div className="flex flex-row flex-wrap justify-center gap-6 max-w-7xl">
        {technologies.map((technology) => (
          <div
            className="flex items-center justify-center w-32 h-w-32"
            key={technology.name}
          >
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tech;
