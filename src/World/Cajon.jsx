
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Cajon(props) {
    const { nodes, materials } = useGLTF("/assets/models/cajon/cajonBlender.glb");
    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube_1.geometry}
                material={materials.Material}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube_2.geometry}
                material={materials.metal}
            />
        </group>
    );
}

useGLTF.preload("/assets/models/cajon/cajonBlender.glb");