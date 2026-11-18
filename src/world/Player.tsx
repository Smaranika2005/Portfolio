import React, { useRef, useEffect, useState } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { useKeyboardControls } from '@react-three/drei'
import { RigidBody, RapierRigidBody, CapsuleCollider, useRapier } from '@react-three/rapier'
import * as THREE from 'three'
import { useStore } from '../store/useStore'

const SPEED = 8
const RUN_SPEED = 14
const JUMP_FORCE = 10

const Player = ({ position }: { position: [number, number, number] }) => {
    const rigidBody = useRef<RapierRigidBody>(null)
    const [, getKeys] = useKeyboardControls()
    const { camera, gl } = useThree()
    const { rapier, world } = useRapier()

    const activeSection = useStore((state) => state.activeSection)
    const started = useStore((state) => state.started)

    // To handle mouse movement dynamically for slow panning camera
    const timeRef = useRef(0)

    useFrame((state, delta) => {
        // We completely shut off physics walking and simply provide a cinematic orbit

        if (!started) {
            // Landing screen static cinematic setup
            camera.position.set(0, 3, 0)
            camera.lookAt(-10, 2, -10)
        } else {
            // HomePage dynamic panning orbit background
            timeRef.current += delta * 0.1
            const x = Math.sin(timeRef.current) * 15
            const z = Math.cos(timeRef.current) * 15

            camera.position.set(x - 5, 8, z - 10)
            camera.lookAt(-10, 2, -10)
        }
    })

    return (
        <RigidBody ref={rigidBody} colliders={false} mass={1} type="dynamic" position={position} enabledRotations={[false, false, false]}>
            {/* Player hitbox */}
            <CapsuleCollider args={[0.5, 0.5]} position={[0, 0, 0]} />
        </RigidBody>
    )
}

export default Player
