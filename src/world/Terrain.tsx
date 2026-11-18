import { useRef, useMemo, useEffect } from 'react'
import * as THREE from 'three'
import { RigidBody } from '@react-three/rapier'

const Terrain = () => {
    const gridSize = 40

    const { grassPositions, dirtPositions } = useMemo(() => {
        const gPos: [number, number, number][] = []
        const dPos: [number, number, number][] = []

        const noise = (x: number, z: number) => {
            return Math.floor(Math.sin(x * 0.1) * 2 + Math.cos(z * 0.1) * 2)
        }

        for (let x = -gridSize / 2; x < gridSize / 2; x++) {
            for (let z = -gridSize / 2; z < gridSize / 2; z++) {
                const y = noise(x, z)
                gPos.push([x, y, z])
                if (Math.random() > 0.5) {
                    dPos.push([x, y - 1, z])
                }
            }
        }
        return { grassPositions: gPos, dirtPositions: dPos }
    }, [gridSize])

    const grassRef = useRef<THREE.InstancedMesh>(null)
    const dirtRef = useRef<THREE.InstancedMesh>(null)

    useEffect(() => {
        const dummy = new THREE.Object3D()
        if (grassRef.current) {
            grassPositions.forEach((pos, i) => {
                dummy.position.set(...pos)
                dummy.updateMatrix()
                grassRef.current!.setMatrixAt(i, dummy.matrix)
            })
            grassRef.current.instanceMatrix.needsUpdate = true
        }
        if (dirtRef.current) {
            dirtPositions.forEach((pos, i) => {
                dummy.position.set(...pos)
                dummy.updateMatrix()
                dirtRef.current!.setMatrixAt(i, dummy.matrix)
            })
            dirtRef.current.instanceMatrix.needsUpdate = true
        }
    }, [grassPositions, dirtPositions])

    return (
        <group>
            {/* Invisible physics floor */}
            <RigidBody type="fixed" friction={2}>
                <mesh position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]} visible={false}>
                    <planeGeometry args={[1000, 1000]} />
                    <meshBasicMaterial transparent opacity={0.2} />
                </mesh>
            </RigidBody>

            {/* Optimized rendering with InstancedMesh */}
            <instancedMesh ref={grassRef} args={[undefined, undefined, grassPositions.length]} receiveShadow castShadow>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color="#4ade80" roughness={0.9} />
            </instancedMesh>

            <instancedMesh ref={dirtRef} args={[undefined, undefined, dirtPositions.length]} receiveShadow castShadow>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color="#8b5a2b" roughness={1.0} />
            </instancedMesh>
        </group>
    )
}

export default Terrain
