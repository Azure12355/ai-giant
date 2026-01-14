
import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function Stars(props: any) {
    const ref = useRef<any>();

    // Generate random points on a sphere
    const [sphere] = useMemo(() => {
        const points = new Float32Array(5000 * 3);
        for (let i = 0; i < 5000; i++) {
            const theta = 2 * Math.PI * Math.random();
            const phi = Math.acos(2 * Math.random() - 1);
            const r = 1.2 + Math.random() * 0.5; // Radius between 1.2 and 1.7 to create a shell

            const x = r * Math.sin(phi) * Math.cos(theta);
            const y = r * Math.sin(phi) * Math.sin(theta);
            const z = r * Math.cos(phi);

            points[i * 3] = x;
            points[i * 3 + 1] = y;
            points[i * 3 + 2] = z;
        }
        return [points];
    }, []);

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 15;
            ref.current.rotation.y -= delta / 20;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#f59e0b"
                    size={0.003}
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={0.6}
                />
            </Points>
        </group>
    );
}

function Connections() {
    const ref = useRef<THREE.Group>(null);
    const lineRef = useRef<THREE.LineSegments>(null);
    const count = 50;

    // Create particles that will be connected
    const [positions, velocities] = useMemo(() => {
        const pos = new Float32Array(count * 3);
        const vel = new Float32Array(count * 3);

        for (let i = 0; i < count; i++) {
            pos[i * 3] = (Math.random() - 0.5) * 4;
            pos[i * 3 + 1] = (Math.random() - 0.5) * 4;
            pos[i * 3 + 2] = (Math.random() - 0.5) * 2;

            vel[i * 3] = (Math.random() - 0.5) * 0.01;
            vel[i * 3 + 1] = (Math.random() - 0.5) * 0.01;
            vel[i * 3 + 2] = (Math.random() - 0.5) * 0.01;
        }
        return [pos, vel];
    }, []);

    // Geometry for lines
    const lineGeometry = useMemo(() => new THREE.BufferGeometry(), []);
    const linePositions = useMemo(() => new Float32Array(count * count * 3), []); // Max potential lines

    useFrame(() => {
        if (!ref.current || !lineRef.current) return;

        // Update positions
        for (let i = 0; i < count; i++) {
            positions[i * 3] += velocities[i * 3];
            positions[i * 3 + 1] += velocities[i * 3 + 1];
            positions[i * 3 + 2] += velocities[i * 3 + 2];

            // Bounce off boundaries or wrap
            if (positions[i * 3] > 2 || positions[i * 3] < -2) velocities[i * 3] *= -1;
            if (positions[i * 3 + 1] > 2 || positions[i * 3 + 1] < -2) velocities[i * 3 + 1] *= -1;
            if (positions[i * 3 + 2] > 1 || positions[i * 3 + 2] < -1) velocities[i * 3 + 2] *= -1;
        }

        // Update connections
        let lineIndex = 0;
        for (let i = 0; i < count; i++) {
            for (let j = i + 1; j < count; j++) {
                const dx = positions[i * 3] - positions[j * 3];
                const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
                const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
                const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

                if (dist < 1.0) {
                    linePositions[lineIndex * 3] = positions[i * 3];
                    linePositions[lineIndex * 3 + 1] = positions[i * 3 + 1];
                    linePositions[lineIndex * 3 + 2] = positions[i * 3 + 2];

                    linePositions[lineIndex * 3 + 3] = positions[j * 3];
                    linePositions[lineIndex * 3 + 4] = positions[j * 3 + 1];
                    linePositions[lineIndex * 3 + 5] = positions[j * 3 + 2];
                    lineIndex += 2;
                }
            }
        }

        lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions.slice(0, lineIndex * 3), 3));
        lineRef.current.geometry.attributes.position.needsUpdate = true;
    });

    return (
        <group ref={ref}>
            {/* Particles */}
            {Array.from({ length: count }).map((_, i) => (
                <mesh key={i} position={[positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2]]}>
                    <sphereGeometry args={[0.015, 8, 8]} />
                    <meshBasicMaterial color="#fbbf24" transparent opacity={0.8} />
                </mesh>
            ))}
            {/* Lines */}
            <lineSegments ref={lineRef} geometry={lineGeometry}>
                <lineBasicMaterial color="#fbbf24" transparent opacity={0.15} linewidth={1} />
            </lineSegments>
        </group>
    );
}


export default function Hero3DBackground() {
    return (
        <div className="absolute inset-0 z-0">
            <Canvas camera={{ position: [0, 0, 2.5] }}>
                <Stars />
                <Connections />
            </Canvas>
        </div>
    );
}
