import { Canvas } from "@react-three/fiber";
import Info from "./Info";
import Experience from "./Experience";
import MiFigura from "./MiFigura";

const App = () => {
    return(
        <>
        <Info
            nombre={'Jhon Suescun'}
            biografia={'Estudiante de sexto semetre de ingenieria de sistemas en la Universidad del Valle.'}/>
        <Canvas camera={{position: [0, 0, 5]}}>
            <MiFigura 
            geometria={<boxGeometry args={[1, 1, 1]} />}
            material={<meshStandardMaterial color="yellow"/>}
            />
        </Canvas>
        </>
    );
}

export default App;