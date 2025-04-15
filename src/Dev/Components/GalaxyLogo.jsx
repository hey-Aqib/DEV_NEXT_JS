'use client';

import { useFrame, useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import { useRef, useMemo, useEffect, useState } from 'react';
import { TextureLoader } from 'three';

export default function GalaxyLogo({ imgSrc = '/logo-mask.png', count = 1000 }) {
  const pointsRef = useRef();
  const [positions, setPositions] = useState([]);

  const image = useLoader(TextureLoader, imgSrc);

  useEffect(() => {
    const canvas = document.createElement('canvas');
    const size = 256;
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(image.image, 0, 0, size, size);

    const imageData = ctx.getImageData(0, 0, size, size).data;
    const tempPositions = [];

    for (let i = 0; i < count; i++) {
      let tries = 0;
      while (tries < 100) {
        const x = Math.floor(Math.random() * size);
        const y = Math.floor(Math.random() * size);
        const index = (y * size + x) * 4;
        const brightness = imageData[index]
        if (brightness < 50) {
          const px = (x / size - 0.5) * 6; 
          const py = (y / size - 0.5) * 6;
          const pz = (Math.random() - 0.5) * 2;
          tempPositions.push(px, py, pz);
          break;
        }
        tries++;
      }
    }

    setPositions(tempPositions);
  }, [image, count]);

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    return geo;
  }, [positions]);

  useFrame(() => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.002;
    }
  });

  return (
    <points ref={pointsRef} geometry={geometry}>
      <pointsMaterial size={0.05} color="white" />
    </points>
  );
}
