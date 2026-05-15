"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
// @ts-expect-error missing types for maath
import * as random from "maath/random/dist/maath-random.esm";

const Starfield = (props: any) => {
  const ref = useRef<any>(null);
  
  // Generate random points in a sphere (15000 length = 5000 points * 3 coordinates)
  const [sphere] = React.useState(() => random.inSphere(new Float32Array(15000), { radius: 1.5 }));

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere as Float32Array} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#00f3ff"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

export const Background = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-[-1] bg-[#030305]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Starfield />
      </Canvas>
    </div>
  );
};
