import { useState } from 'react'
import { Sky, Environment, Cloud, Stars } from '@react-three/drei'
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing'
import Player from './Player'
import Terrain from './Terrain'
import Steve from './Steve'
import { useStore } from '../store/useStore'
import { RigidBody } from '@react-three/rapier'

// Simple placeholder for interactive locations
const LocationBox = ({ position, color, name }: { position: [number, number, number], color: string, name: string }) => {
    const setActiveSection = useStore((state) => state.setActiveSection)
    const activeSection = useStore((state) => state.activeSection)
    const [hovered, setHovered] = useState(false)

    // When player collides or interacts, we can open section. For now, simple click to open.
    // In a real voxel game, interaction happens when near and pressing E.
    // We'll use simple raycast click for demonstration of interactions.
    const handleInteract = () => {
        if (!activeSection) {
            setActiveSection(name)
            // Usually would release pointer lock here, we handle in Player
        }
    }

    return (
        <group position={position}>
            <RigidBody type="fixed" colliders="cuboid">
                <mesh
                    onClick={(e) => {
                        e.stopPropagation()
                        // Check distance to player in a real scenario
                        handleInteract()
                    }}
                    onPointerOver={() => setHovered(true)}
                    onPointerOut={() => setHovered(false)}
                    castShadow
                    receiveShadow
                >
                    <boxGeometry args={[4, 4, 4]} />
                    <meshStandardMaterial color={hovered ? '#fff' : color} roughness={0.7} />
                </mesh>
            </RigidBody>

            {/* Label above the box */}
            <mesh position={[0, 4, 0]}>
                {/* Simple text or just a hovering visual cue */}
            </mesh>
        </group>
    )
}

const World = () => {
    return (
        <>
            <Sky sunPosition={[100, 20, 100]} turbidity={0.1} rayleigh={0.5} />
            <ambientLight intensity={0.3} />
            <directionalLight
                castShadow
                position={[10, 20, 10]}
                intensity={1.5}
                shadow-mapSize={[2048, 2048]}
                shadow-camera-left={-20}
                shadow-camera-right={20}
                shadow-camera-top={20}
                shadow-camera-bottom={-20}
            />

            <Environment preset="forest" />
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

            {/* Clouds */}
            <Cloud position={[-10, 15, -10]} speed={0.2} opacity={0.5} />
            <Cloud position={[20, 15, 10]} speed={0.2} opacity={0.5} />

            <Player position={[0, 10, 0]} />

            <Steve position={[-10, 2, -10]} rotation={[0, -Math.PI / 4, 0]} />

            <Terrain />

            {/* Locations */}
            {/* About Me - Cabin */}
            <LocationBox position={[-15, 2, -15]} color="#8B4513" name="about" />

            {/* Projects - Village */}
            <LocationBox position={[20, 2, -10]} color="#A9A9A9" name="projects" />

            {/* Skills - Mine */}
            <LocationBox position={[0, -5, 20]} color="#2F4F4F" name="skills" />

            {/* Experience - Portal */}
            <LocationBox position={[-20, 2, 15]} color="#4B0082" name="experience" />

            {/* Contact - Floating Island */}
            <LocationBox position={[10, 10, 25]} color="#E6E6FA" name="contact" />

            {/* Post Processing for Cinematic Feel */}
            <EffectComposer>
                <Bloom luminanceThreshold={1} mipmapBlur intensity={1.5} />
                <Vignette eskil={false} offset={0.1} darkness={1.1} />
            </EffectComposer>
        </>
    )
}

export default World
