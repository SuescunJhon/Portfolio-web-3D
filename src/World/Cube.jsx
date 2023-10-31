import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";

export default function Cube(props) {
    const refCube = useRef();
    const [cont, setCont] = useState(0);
    useFrame(() => {
        setCont(cont + 0.01);
        refCube.current.position.y = Math.cos(cont);
    });

    return (
        <mesh {...props} ref={refCube}>
            <boxGeometry args={[0.8, .8, .8]} />
            <meshNormalMaterial color="hotpink" />
        </mesh>
    )
}   