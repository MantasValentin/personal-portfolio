import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Preload, Stars, PerspectiveCamera } from "@react-three/drei";
import CanvasLoader from "../Loader";

const StarPoints = (props) => {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 5;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Stars
        ref={ref}
        {...props}
        fade={true}
        count={500}
        radius={2}
        factor={3}
      ></Stars>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <Canvas>
        <Suspense fallback={<CanvasLoader />}>
          <PerspectiveCamera makeDefault={true} position={[0, 0, 120]} />
          <StarPoints />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
