import { Canvas } from "@react-three/fiber"
import Experience from "./Experience"
import Info from "./Info/Info"

const App = () => {
    const cameraSettings = {
        position: [-9, 5, 9],
        fov: 80}

    return (<>
        <Info name={"Jhon Suescun"} biography={"Portfolio"}/>
        <Canvas shadows camera={cameraSettings}>
            <Experience/>
        </Canvas>
    </>
    )
}

export default App