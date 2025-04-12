import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Environment, Html } from '@react-three/drei';
import * as THREE from 'three';
import './DevelopersCorner.css';
import JavaIDE from '../JavaIDE/JavaIDE';

const DevelopersCorner: React.FC = () => {
  const [activeTool, setActiveTool] = useState<string | null>(null);

  const tools = [
    { name: 'javaIDE', label: 'Java Playground', icon: '☕', color: '#f89820' },
    { name: 'codeSnippets', label: 'Code Snippets', icon: '✂️', color: '#6be2c6' },
    { name: 'apiTester', label: 'API Tester', icon: '🔌', color: '#ea4a5a' },
    { name: 'dbExplorer', label: 'DB Explorer', icon: '🗄️', color: '#8a6cff' }
  ];

  const ToolIcon: React.FC<{ name: string; label: string; icon: string; color: string; position: [number, number, number] }> = 
    ({ name, label, icon, color, position }) => (
    <Float speed={2} rotationIntensity={2} floatIntensity={1}>
      <mesh 
        position={position}
        onClick={() => setActiveTool(name)}
        castShadow
        receiveShadow
      >
        <sphereGeometry args={[1, 16, 16]} />
        <meshStandardMaterial 
          color={color} 
          emissive={color} 
          emissiveIntensity={0.2}
          roughness={0.3}
          metalness={0.8}
        />
        <Html center>
          <div className="tool-label">
            <span className="tool-icon">{icon}</span>
            <span>{label}</span>
          </div>
        </Html>
      </mesh>
    </Float>
  );

  return (
    <div className="developers-corner-container">
      <div className={`tool-container ${activeTool ? 'tool-active' : ''}`}>
        {activeTool === 'javaIDE' && <JavaIDE />}
        
        {activeTool && (
          <button 
            className="close-button"
            onClick={() => setActiveTool(null)}
          >
            ✕
          </button>
        )}
      </div>

      <Canvas 
        shadows 
        camera={{ position: [0, 0, 15], fov: 45 }}
        className="canvas-background"
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} castShadow />
        <Environment preset="city" />
        
        {!activeTool && tools.map((tool, i) => (
          <ToolIcon 
            key={tool.name}
            name={tool.name}
            label={tool.label}
            icon={tool.icon}
            color={tool.color}
            position={[
              Math.sin(i * Math.PI * 2 / tools.length) * 8,
              0,
              Math.cos(i * Math.PI * 2 / tools.length) * 8
            ]}
          />
        ))}
        
        <OrbitControls 
          enableZoom={!activeTool}
          autoRotate={!activeTool}
          autoRotateSpeed={1}
        />
      </Canvas>
    </div>
  );
};

export default DevelopersCorner;