"use client";

import { useRef, useEffect, Suspense, useState } from "react";
import { Canvas, useFrame, useLoader, extend, useThree } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {
  PerspectiveCamera,
  Environment,
  Points,
  PointMaterial
} from "@react-three/drei";
import * as THREE from "three";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

gsap.registerPlugin(ScrollTrigger);

const LogoModel = ({ url, modelRef, visible, emissiveIntensity = 0 }) => {
  const { scene } = useLoader(GLTFLoader, url);

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
        child.material.emissive = new THREE.Color("yellow");
        child.material.emissiveIntensity = emissiveIntensity;
      }
    });
  }, [emissiveIntensity, scene]);

  return <primitive ref={modelRef} object={scene} visible={visible} />;
};

const ParticleExplosion = ({ position, active }) => {
  const particlesRef = useRef();
  const count = 2000;

  const particles = useRef(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 10;
    }
    return positions;
  }).current();

  useFrame(() => {
    if (particlesRef.current && active) {
      particlesRef.current.rotation.x += 0.001;
      particlesRef.current.rotation.y += 0.002;
    }
  });

  return (
    <Points
      ref={particlesRef}
      positions={new Float32Array(particles)}
      visible={active}
    >
      <PointMaterial
        transparent
        color="white"
        size={0.05}
        sizeAttenuation={true}
        fog={false}
      />
    </Points>
  );
};

const Scene = ({ progress, leftModelRef, rightModelRef }) => {
  const cameraRef = useRef(null);
  const galaxyRef = useRef();
  const [showParticles, setShowParticles] = useState(false);
  const [modelsVisible, setModelsVisible] = useState(true);
  const [emissiveIntensity, setEmissiveIntensity] = useState(0);
  const [bloomIntensity, setBloomIntensity] = useState(1);

  const [galaxyPositions] = useState(() => {
    const count = 10000;
    const radius = 5;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = radius * Math.cbrt(Math.random());
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
    }
    return positions;
  });

  useFrame((_, delta) => {
    cameraRef.current.lookAt(0, 0, 0);
    if (galaxyRef.current && showParticles) {
      galaxyRef.current.rotation.x -= delta / 10;
      galaxyRef.current.rotation.y -= delta / 15;
    }
  });

  useEffect(() => {
    if (!leftModelRef.current || !rightModelRef.current) return;

    leftModelRef.current.position.set(-4, 0, 0);
    rightModelRef.current.position.set(4, 0, 0);
    leftModelRef.current.rotation.set(0, 0, 0);
    rightModelRef.current.rotation.set(0, Math.PI, 0);
    leftModelRef.current.scale.set(15, 15, 15);
    rightModelRef.current.scale.set(15, 15, 15);

    if (progress < 0.5) {
      const moveProgress = progress / 0.5;
      const reverseGlow = moveProgress;

      leftModelRef.current.position.x = -4 + 4 * moveProgress;
      rightModelRef.current.position.x = 4 - 4 * moveProgress;

      const intensity = reverseGlow * 15;
      setEmissiveIntensity(intensity);
      setBloomIntensity(reverseGlow * 0.9); 

      const colorValue = 70 + reverseGlow * 30;

      leftModelRef.current.traverse((child) => {
      if (child.isMesh) {
        child.material.color = new THREE.Color(`hsl(50, 200%, ${colorValue}%)`);
      }
      });

      rightModelRef.current.traverse((child) => {
      if (child.isMesh) {
        child.material.color = new THREE.Color(`hsl(50, 100%, ${colorValue}%)`);
      }
      });

      setModelsVisible(true);
      setShowParticles(false);
    } else if (progress < 0.7) {
      setModelsVisible(false);
      setShowParticles(true);
      setBloomIntensity(0); 
    }
  }, [progress]);

  return (
    <>
      <PerspectiveCamera
        ref={cameraRef}
        fov={45}
        near={0.1}
        far={1000}
        makeDefault
        position={[0, 0, 10]}
      />
      <Environment preset="city" />

      <EffectComposer>
        <Bloom
          intensity={bloomIntensity}
          kernelSize={3}
          luminanceThreshold={0}
          luminanceSmoothing={0.4}
          height={300}
        />
      </EffectComposer>

      <LogoModel
        url="/left_logo.gltf"
        modelRef={leftModelRef}
        visible={modelsVisible}
        emissiveIntensity={emissiveIntensity}
      />
      <LogoModel
        url="/right_logo.gltf"
        modelRef={rightModelRef}
        visible={modelsVisible}
        emissiveIntensity={emissiveIntensity}
      />

      <ParticleExplosion position={[200, 190, 0]} active={showParticles} />

      {showParticles && (
        <group ref={galaxyRef} rotation={[0, 0, Math.PI / 4]}>
          <Points positions={galaxyPositions} stride={6} frustumCulled={false}>
            <PointMaterial
              transparent
              color="#ffffff"
              size={0.02}
              sizeAttenuation={true}
              depthWrite={false}
            />
          </Points>
        </group>
      )}
    </>
  );
};

const ScrollMerge3D = () => {
  const containerRef = useRef();
  const leftModelRef = useRef();
  const rightModelRef = useRef();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        onUpdate: (self) => {
          setProgress(self.progress);
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const data = [
    {
      title: "Quality Blinds & Shades",
      icon: "https://corecentrixbusinesssolutions.com/wp-content/uploads/2024/08/Quality-Blinds.svg",
    },
    {
      title: "Pert Pert Guys",
      icon: "https://corecentrixbusinesssolutions.com/wp-content/uploads/2024/08/Peri-Peri.svg",
    },
    {
      title: "Kinetic By Windstream",
      icon: "https://corecentrixbusinesssolutions.com/wp-content/uploads/2024/08/Kinetic-by-Windstream-.svg",
    },
    {
      title: "CenturyLink",
      icon: "https://corecentrixbusinesssolutions.com/wp-content/uploads/2024/08/Centurylink-Logo.svg",
    },
  ];

  return (
    <div ref={containerRef} className="relative w-full h-[150vh] max-sm:h-[120vh] bg-black">
      <div className="sticky top-0 h-screen w-full">
        <Canvas>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <Suspense fallback={null}>
            <Scene
              progress={progress}
              leftModelRef={leftModelRef}
              rightModelRef={rightModelRef}
            />
          </Suspense>
        </Canvas>
      </div>

      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none z-30">
        {progress < 0.5 ? (
          <h1 className="text-4xl md:text-3xl font-bold text-white text-center px-4">
            <p>
              <span className="block">We have worked with</span> some of the biggest names in USA
            </p>
          </h1>
        ) : (
          <section className="flex items-center justify-center w-full relative z-20">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-sm:grid-cols-2 max-sm:gap-4 w-[80%]">
              {data.map((item, index) => (
                <div
                  key={index}
                  className="relative flex flex-col items-center justify-center text-center p-4 transition-transform duration-500 ease-in-out transform hover:scale-105 z-20"
                >
                  <div className="mb-4">
                    <img src={item.icon} alt={item.title} className="w-50 h-26 m-0" />
                  </div>
                  <div className="text-2xl font-bold mb-2 text-white">{item.title}</div>

                  <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-20">
                    <img
                      src="https://cdn.prod.website-files.com/66507fe061d349897ed2696e/667aca61d042ae963615ccce_Vector%2051.svg"
                      alt="Arrow 1"
                      className="absolute top-0 left-0 w-4 h-4 animate-pulse"
                    />
                    <img
                      src="https://cdn.prod.website-files.com/66507fe061d349897ed2696e/667aca6107b7a31ee16d000d_Vector%2054.svg"
                      alt="Arrow 2"
                      className="absolute top-0 right-0 w-4 h-4 animate-pulse"
                    />
                    <img
                      src="https://cdn.prod.website-files.com/66507fe061d349897ed2696e/667acb7520e9415502cb2e7c_Vector%2058.svg"
                      alt="Arrow 3"
                      className="absolute bottom-0 left-0 w-4 h-4 animate-pulse"
                    />
                    <img
                      src="https://cdn.prod.website-files.com/66507fe061d349897ed2696e/667acb75bc1b8ff571ae54ef_Vector%2060.svg"
                      alt="Arrow 4"
                      className="absolute bottom-0 right-0 w-4 h-4 animate-pulse"
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ScrollMerge3D;