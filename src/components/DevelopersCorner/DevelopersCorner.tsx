import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Environment, Text } from '@react-three/drei';
import { useNavigate } from 'react-router-dom';
import * as THREE from 'three';
import './DevelopersCorner.css';

const SharpTool = ({ 
  icon, 
  label, 
  color, 
  position = [0, 0, 0],
  route,
  shape = 'dodecahedron'
}: {
  icon: string;
  label: string;
  color: string;
  position?: [number, number, number];
  route: string;
  shape?: 'tetrahedron' | 'octahedron' | 'dodecahedron' | 'icosahedron';
}) => {
  const navigate = useNavigate();
  
  const getGeometry = () => {
    switch(shape) {
      case 'tetrahedron': return new THREE.TetrahedronGeometry(1.5);
      case 'octahedron': return new THREE.OctahedronGeometry(1.3);
      case 'icosahedron': return new THREE.IcosahedronGeometry(1.2);
      default: return new THREE.DodecahedronGeometry(1.3);
    }
  };

  return (
    <Float speed={1.5} rotationIntensity={2} floatIntensity={0.5}>
      <group position={position} onClick={() => navigate(route)}>
        <mesh castShadow receiveShadow>
          <bufferGeometry attach="geometry" {...getGeometry()} />
          <meshStandardMaterial 
            color={color}
            metalness={0.9}
            roughness={0.1}
            emissive={color}
            emissiveIntensity={0.2}
          />
        </mesh>
        <Text
          position={[0, -2.2, 0]}
          fontSize={0.5}
          color="white"
          anchorX="center"
          anchorY="middle"
          outlineWidth={0.01}
          outlineColor="#000"
        >
          {label}
        </Text>
        <Text
          position={[0, 0, 0]}
          fontSize={0.8}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          {icon}
        </Text>
      </group>
    </Float>
  );
};

const DevelopersCorner: React.FC = () => {
  return (
    <div className="sharp-dev-corner">
      <Canvas shadows camera={{ position: [0, 0, 15], fov: 50 }}>
        <Suspense fallback={null}>
          <color attach="background" args={['#0a192f']} />
          <ambientLight intensity={0.3} />
          <directionalLight
            position={[10, 10, 5]}
            intensity={1}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
          />
          <Environment preset="city" />

          <SharpTool 
            icon="☕" 
            label="Java Playground" 
            color="#64ffda" 
            position={[-5, 1, 0]}
            route="/javaIDE"
            shape="dodecahedron"
          />
          <SharpTool 
            icon="</>" 
            label="Python's Den" 
            color="#ff6480" 
            position={[0, 1, 5]}
            route="/pythonIDE"
            shape="octahedron"
          />
          <SharpTool 
            icon="⚡" 
            label="API Core" 
            color="#ffa364" 
            position={[5, 1, 0]}
            route="/api-core"
            shape="icosahedron"
          />

          <OrbitControls 
            enableZoom={true}
            autoRotate
            autoRotateSpeed={0.8}
            minDistance={5}
            maxDistance={20}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default DevelopersCorner;