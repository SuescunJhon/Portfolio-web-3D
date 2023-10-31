import { OrbitControls, SpotLight } from "@react-three/drei";
import Fox from "./World/Fox";
import Suelo from "./World/Suelo";
import Pared from "./World/Pared";
import Lights from "./World/Lights";
import Environment from "./World/Environment";
import Sphere from "./World/Sphere";
import Cube from "./World/Cube";
import Cone from "./World/Cone";
import Torus from "./World/Torus";

const Experience = () => {

    return (
        <>
            <OrbitControls makeDefault />
            <Lights />
            <Environment />
            <Sphere position={[-3, 0, 1]} castShadow />
            <Cube position={[-1, 0, 3]} castShadow />
            <Cone position={[.5, 0, 5]} castShadow />
            <Torus position={[2, 0, 7]} rotation={[0, -.78, 0]} />
            <Fox position={[5, 1.5, 5]} scale={0.6} rotation-y={5} />
            <Suelo position={[5, -2, 5]} rotation={[-Math.PI / 2, 0, -Math.PI / 4]} receiveShadow />
            <Pared position={[9, 2, 2]} args={[20, 8]} rotation={[0, -0.78, 0]} receiveShadow />
            <Pared position={[12, 2, 12]} args={[10, 8]} rotation={[0, -2.35, 0]} receiveShadow />
        </>
    );
}

export default Experience;