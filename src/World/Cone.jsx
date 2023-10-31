import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";

export default function Cone(props) {
    const refCone = useRef();
    const [cont, setCont] = useState(0);
    useFrame(() => {
        setCont(cont + 0.01);
        refCone.current.position.y = Math.sin(cont);
    });

    return (
        <mesh {...props} ref={refCone}>
            <coneGeometry args={[.5, 1, 32]} />
            <meshPhysicalMaterial color="lightgreen" />
        </mesh>
    )
}