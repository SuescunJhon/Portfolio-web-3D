import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";

const MiFigura = ({geometria, material, movimiento}) => {
    const boxRef = useRef();
    let [grados, setGrados] = useState(0);
    useFrame((state, delta) => {
        setGrados(grados+1);
        boxRef.current.position.y = Math.sin(grados*(Math.PI/180));
        boxRef.current.position.x = Math.cos(grados*(Math.PI/180));
        });

        //<OrbitControls makeDefault />
    return(
        <>
            <ambientLight intensity={0.5}/>
            <directionalLight position={[10, 10, 5]} intensity={2}/>
            <mesh ref={boxRef} position={[0, 0, 0]}>
                {geometria}
                {material}
            </mesh>
        </>
    );
}

export default MiFigura;