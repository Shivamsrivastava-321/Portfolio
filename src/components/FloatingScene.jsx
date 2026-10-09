import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, Stars } from '@react-three/drei';
import * as THREE from 'three';

/* ─── Animated Core Mesh ──────────────────────────────────────── */
const CoreMesh = ({ mouse }) => {
    const meshRef = useRef();
    const wireMeshRef = useRef();

    useFrame((state) => {
        if (!meshRef.current) return;
        const time = state.clock.elapsedTime;

        // Gentle auto-rotation
        meshRef.current.rotation.x = time * 0.08;
        meshRef.current.rotation.y = time * 0.12;

        // Subtle mouse-responsive tilt
        const targetRotX = mouse.current.y * 0.3;
        const targetRotY = mouse.current.x * 0.3;
        meshRef.current.rotation.x += (targetRotX - meshRef.current.rotation.x) * 0.04;
        meshRef.current.rotation.y += (targetRotY - meshRef.current.rotation.y) * 0.04;

        if (wireMeshRef.current) {
            wireMeshRef.current.rotation.copy(meshRef.current.rotation);
        }
    });

    return (
        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.6}>
            {/* Solid icosahedron */}
            <mesh ref={meshRef}>
                <icosahedronGeometry args={[1.4, 1]} />
                <meshStandardMaterial
                    color="#1d4ed8"
                    emissive="#3b82f6"
                    emissiveIntensity={0.4}
                    roughness={0.1}
                    metalness={0.9}
                    transparent
                    opacity={0.85}
                />
            </mesh>
            {/* Wireframe overlay — slightly larger */}
            <mesh ref={wireMeshRef}>
                <icosahedronGeometry args={[1.45, 1]} />
                <meshBasicMaterial
                    color="#60a5fa"
                    wireframe
                    transparent
                    opacity={0.18}
                />
            </mesh>
        </Float>
    );
};

/* ─── Orbital Particle Ring ───────────────────────────────────── */
const ParticleRing = () => {
    const pointsRef = useRef();

    const { positions, colors } = useMemo(() => {
        const count = 180;
        const pos = new Float32Array(count * 3);
        const col = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            const angle = (i / count) * Math.PI * 2;
            const variance = Math.random() * 0.4 - 0.2;
            const radius = 2.2 + variance;
            pos[i * 3] = Math.cos(angle) * radius;
            pos[i * 3 + 1] = (Math.random() - 0.5) * 0.6;
            pos[i * 3 + 2] = Math.sin(angle) * radius;

            // Blue → purple gradient
            const t = i / count;
            col[i * 3] = 0.23 + t * 0.35;   // R
            col[i * 3 + 1] = 0.51 - t * 0.15; // G
            col[i * 3 + 2] = 0.96 - t * 0.2;  // B
        }
        return { positions: pos, colors: col };
    }, []);

    useFrame((state) => {
        if (pointsRef.current) {
            pointsRef.current.rotation.y = state.clock.elapsedTime * 0.08;
            pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.05) * 0.15;
        }
    });

    return (
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute attach="attributes-position" args={[positions, 3]} />
                <bufferAttribute attach="attributes-color" args={[colors, 3]} />
            </bufferGeometry>
            <pointsMaterial size={0.04} vertexColors transparent opacity={0.9} sizeAttenuation />
        </points>
    );
};

/* ─── Ambient Dust Particles ──────────────────────────────────── */
const DustParticles = () => {
    const pointsRef = useRef();
    const positions = useMemo(() => {
        const count = 300;
        const pos = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            pos[i * 3] = (Math.random() - 0.5) * 10;
            pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
            pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
        }
        return pos;
    }, []);

    useFrame((state) => {
        if (pointsRef.current) {
            pointsRef.current.rotation.y = state.clock.elapsedTime * 0.015;
        }
    });

    return (
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute attach="attributes-position" args={[positions, 3]} />
            </bufferGeometry>
            <pointsMaterial size={0.015} color="#8b5cf6" transparent opacity={0.4} sizeAttenuation />
        </points>
    );
};

/* ─── Scene Lights ─────────────────────────────────────────────── */
const SceneLights = () => (
    <>
        <ambientLight intensity={0.15} />
        <pointLight position={[6, 4, 4]} color="#3b82f6" intensity={4} distance={15} />
        <pointLight position={[-6, -4, -4]} color="#8b5cf6" intensity={3} distance={12} />
        <pointLight position={[0, 6, -6]} color="#06b6d4" intensity={2} distance={12} />
    </>
);

/* ─── Main exported component (lazy-loadable) ─────────────────── */
const FloatingScene = ({ mouse }) => {
    return (
        <Canvas
            camera={{ position: [0, 0, 6], fov: 48 }}
            dpr={[1, Math.min(window.devicePixelRatio, 2)]}
            gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
            style={{ background: 'transparent' }}
            performance={{ min: 0.5 }}
        >
            <SceneLights />
            <Stars
                radius={80}
                depth={60}
                count={600}
                factor={2.5}
                saturation={0.2}
                fade
                speed={0.4}
            />
            <CoreMesh mouse={mouse} />
            <ParticleRing />
            <DustParticles />
        </Canvas>
    );
};

export default FloatingScene;
