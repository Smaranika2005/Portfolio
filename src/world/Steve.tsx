import React from 'react'

const Steve = ({ position, rotation }: { position: [number, number, number], rotation: [number, number, number] }) => {
    return (
        <group position={position} rotation={rotation}>
            {/* Head */}
            <mesh position={[0, 1.5, 0]} castShadow receiveShadow>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color="#d1a17f" roughness={0.8} />
            </mesh>
            {/* Hair */}
            <mesh position={[0, 1.8, 0]} castShadow receiveShadow>
                <boxGeometry args={[1.05, 0.4, 1.05]} />
                <meshStandardMaterial color="#2d1c13" roughness={1} />
            </mesh>
            {/* Body */}
            <mesh position={[0, 0.25, 0]} castShadow receiveShadow>
                <boxGeometry args={[1, 1.5, 0.5]} />
                <meshStandardMaterial color="#00baba" roughness={0.7} />
            </mesh>
            {/* Left Arm */}
            <mesh position={[-0.75, 0.25, 0]} castShadow receiveShadow>
                <boxGeometry args={[0.5, 1.5, 0.5]} />
                <meshStandardMaterial color="#d1a17f" roughness={0.8} />
            </mesh>
            {/* Right Arm */}
            <mesh position={[0.75, 0.25, 0]} castShadow receiveShadow>
                <boxGeometry args={[0.5, 1.5, 0.5]} />
                <meshStandardMaterial color="#d1a17f" roughness={0.8} />
            </mesh>
            {/* Left Leg */}
            <mesh position={[-0.25, -1.25, 0]} castShadow receiveShadow>
                <boxGeometry args={[0.5, 1.5, 0.5]} />
                <meshStandardMaterial color="#3a2c85" roughness={0.8} />
            </mesh>
            {/* Right Leg */}
            <mesh position={[0.25, -1.25, 0]} castShadow receiveShadow>
                <boxGeometry args={[0.5, 1.5, 0.5]} />
                <meshStandardMaterial color="#3a2c85" roughness={0.8} />
            </mesh>
        </group>
    )
}

export default Steve
