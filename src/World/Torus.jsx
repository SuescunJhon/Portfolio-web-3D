import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";

export default function Torus(props) {
    const refTorus = useRef();
    const [cont, setCont] = useState(0);
    useFrame(() => {
        setCont(cont + 0.01);
        refTorus.current.position.y = Math.cos(cont);
    });

    return (
        <mesh {...props} ref={refTorus}>
            <torusGeometry args={[0.5, 0.2, 16, 100]} />
            <meshPhongMaterial color="red" />
            {props.children}
        </mesh>
    )
}
