import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";

export default function Sphere(props) {
    const refSphere = useRef();
    const [cont, setCont] = useState(0);
    useFrame(() => {
        setCont(cont + 0.01);
        refSphere.current.position.y = Math.sin(cont);
    });

    return (
        <mesh {...props} ref={refSphere}>
            <sphereGeometry args={[0.5, 20, 20]} />
            <meshToonMaterial color="lightblue" />
        </mesh>
    );
}