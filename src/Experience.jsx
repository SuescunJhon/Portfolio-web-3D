import {OrbitControls} from "@react-three/drei";
import Fox from "./World/Fox";
import Suelo from "./World/Suelo";
import Pared from "./World/Pared";
import Lights from "./World/Lights";
import Environment from "./World/Environment";

const Experience = () => {
    return(
    <>
        <OrbitControls makeDefault/>
        <Lights/>
        <Environment/>
        <Fox position={[5,1.5,5]} scale={0.6} rotation-y={5}/>
        <Suelo/>
        <Pared position={[5, 2, 0]} args={[10,8]}/>
        <Pared position={[10,2,5]} args={[10,8]} rotation={[0, -Math.PI/2, 0]}/>
    </>
    );
}

export default Experience;