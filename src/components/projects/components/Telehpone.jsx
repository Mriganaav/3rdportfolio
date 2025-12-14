import React from 'react'
import { useGLTF } from '@react-three/drei'

export function TelephoneModel(props) {
  const { nodes, materials } = useGLTF('/telehpone.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Phone_001_Plastic_003_0.geometry} material={materials.Plastic_003} scale={0.01} />
    </group>
  )
}

useGLTF.preload('/telehpone.glb')
