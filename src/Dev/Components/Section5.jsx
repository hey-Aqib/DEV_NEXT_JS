"use client";
import { useRef, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const NeonCube = ({
  position = [0, 0, 0],
  scale = 1,
  rotation = [0, 0, 0],
}) => {
  const edges = new THREE.EdgesGeometry(new THREE.BoxGeometry(1, 1, 1));

  return (
    <group position={position} rotation={rotation}>
      <lineSegments geometry={edges} scale={scale}>
        <lineBasicMaterial color="#ff1493" linewidth={1.5} />
      </lineSegments>
      <pointLight color="#ff1493" intensity={0.2} distance={3} decay={2} />
    </group>
  );
};

const CenterLight = () => {
  return (
    <group>
      <pointLight
        position={[0, 0, 0]}
        intensity={2}
        color="#4b0082"
        distance={15}
      />
      <pointLight
        position={[0, 0, 0]}
        intensity={1}
        color="#800080"
        distance={20}
      />
      <mesh>
        <sphereGeometry args={[5, 32, 32]} />
        <meshBasicMaterial color="#4b0082" transparent opacity={0.2} />
      </mesh>
    </group>
  );
};

const FloatingCubes = () => {
  const groupRef = useRef();
  const cubes = Array.from({ length: 25 }, () => ({
    position: [
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 10,
    ],
    scale: Math.random() * 1.5 + 0.3,
    rotation: [
      Math.random() * Math.PI,
      Math.random() * Math.PI,
      Math.random() * Math.PI,
    ],
  }));

  useEffect(() => {
    if (!groupRef.current) return;

    cubes.forEach((cube, i) => {
      gsap.to(groupRef.current.children[i].rotation, {
        x: cube.rotation[0] + Math.PI * 2,
        y: cube.rotation[1] + Math.PI * 2,
        z: cube.rotation[2] + Math.PI * 2,
        duration: 25 + Math.random() * 15,
        repeat: -1,
        ease: "none",
      });

      gsap.to(groupRef.current.children[i].position, {
        x: cube.position[0] + (Math.random() - 0.5) * 2,
        y: cube.position[1] + (Math.random() - 0.5) * 2,
        z: cube.position[2] + (Math.random() - 0.5) * 2,
        duration: 20 + Math.random() * 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });
  }, []);

  return (
    <group ref={groupRef}>
      {cubes.map((cube, i) => (
        <NeonCube
          key={i}
          position={cube.position}
          scale={cube.scale}
          rotation={cube.rotation}
        />
      ))}
    </group>
  );
};

const PyramidObjects = () => {
  const groupRef = useRef();
  const layers = 6;
  const cubes = [];

  for (let y = 0; y < layers; y++) {
    for (let x = 0; x < layers - y; x++) {
      for (let z = 0; z < layers - y; z++) {
        cubes.push({
          position: [
            (x - (layers - y - 1) / 2) * 1.7,
            (y - (layers - y - 1) / 2) * 1.2,
            (z - (layers - y - 1) / 2) * 1.7,
          ],
          scale: 1.5,
          rotation: [
            Math.random() * Math.PI,
            Math.random() * Math.PI,
            Math.random() * Math.PI,
          ],
        });
      }
    }
  }

  useEffect(() => {
    if (!groupRef.current) return;

    cubes.forEach((cube, i) => {
      gsap.to(groupRef.current.children[i].position, {
        x: cube.position[0] + (Math.random() - 0.5) * 1.5,
        y: cube.position[1] + (Math.random() - 0.5) * 1.5,
        z: cube.position[2] + (Math.random() - 0.5) * 1.5,
        duration: 12 + Math.random() * 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(groupRef.current.children[i].rotation, {
        x: cube.rotation[0] + Math.PI * 2,
        y: cube.rotation[1] + Math.PI * 2,
        z: cube.rotation[2] + Math.PI * 2,
        duration: 20 + Math.random() * 10,
        repeat: -1,
        ease: "none",
      });
    });
  }, []);

  return (
    <group ref={groupRef}>
      {cubes.map((cube, i) => (
        <NeonCube
          key={i}
          position={cube.position}
          scale={cube.scale}
          rotation={cube.rotation}
        />
      ))}
    </group>
  );
};

const Section5 = () => {
  const buttons = ["WHEEL", "BOX", "PYRAMID"];
  const [hovered, setHovered] = useState(null);

  return (
    <div className="w-full bg-black text-white relative">
      <div className="grid grid-cols-2 max-sm:flex max-sm:flex-col w-full h-full">
        <div className="w-[90%] ml-[10%] mt-[10%]">
          <h1 className="mt-10 text-6xl w-[50%] max-sm:text-4xl max-sm:w-[100%]">
            AI for Software Development
          </h1>
          <p className="mt-10 mb-[1%] max-sm:w-[80%] w-[50%]">
            Developing custom software, mobile apps, and web platforms tailored
            to your business needs
          </p>
          <p className="mt-2 text-gray-400 max-sm:w-[80%] w-[50%] min-h-[40px]">
            {hovered === "BOX" &&
              "A neon cube representing structural modularity."}
            {hovered === "WHEEL" &&
              "Smooth, cyclical movement in your app flow."}
            {hovered === "PYRAMID" &&
              "Hierarchical and scalable system architecture."}
          </p>

          {buttons.map((buttonText) => (
            <div
              key={buttonText}
              className="relative mt-[6%] me-[6%] inline-block cursor-pointer group z-20"
              onMouseEnter={() => setHovered(buttonText)}
              onMouseLeave={() => setHovered(null)}
            >
              <button className="relative z-20 text-white px-8 py-4 uppercase tracking-wider rounded-md text-sm overflow-hidden cursor-pointer">
                      <span className="relative z-20">{buttonText}</span>

                      <span className="absolute inset-0 bg-gradient-to-t from-[#181717]/60 to-[#505051]/60 transition-all duration-700 ease-in-out group-hover:from-[#505051]/60 group-hover:to-[#181717]/60 z-0" />
                    </button>

                    <img
                      src="/dev/images/left top.svg"
                      alt=""
                      className="absolute top-0 left-0 -translate-x-1/3 -translate-y-1/3 z-20 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
                    />
                    <img
                      src="/dev/images/right top.svg"
                      alt=""
                      className="absolute top-0 right-0 translate-x-1/3 -translate-y-1/3 z-20 transition-transform duration-300 group-hover:-translate-x-1 group-hover:translate-y-1"
                    />
                    <img
                      src="/dev/images/left bottom.svg"
                      alt=""
                      className="absolute bottom-0 left-0 -translate-x-1/3 translate-y-1/3 z-20 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                    <img
                      src="/dev/images/right bottom.svg"
                      alt=""
                      className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 z-20 transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1"
                    />
            </div>
          ))}
        </div>

        <div className="w-[90%] max-sm:h-[50vh] 2xl:w-[100%] h-screen/3">
          <Canvas camera={{ position: [0, 0, 20], fov: 60 }} gl={{ antialias: true }}>
            <color attach="background" args={["#000000"]} />
            <CenterLight />
            {hovered === "PYRAMID" ? <PyramidObjects className="w-[100%] mt-16" /> : <FloatingCubes />}
            <fog attach="fog" args={["#000000", 15, 25]} />
          </Canvas>
        </div>
      </div>
    </div>
  );
};

export default Section5;
