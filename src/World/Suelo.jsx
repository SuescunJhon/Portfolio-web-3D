import { useTexture } from "@react-three/drei";

const Suelo = () => {
    const PATH = "/assets/textures/wood/"
    const propsTexture = useTexture({
        map: PATH + "laminate_floor_03_diff_2k.jpg",
        
    })

    return (
        <mesh  position={[5, -2, 5]}  rotation-x={-Math.PI / 2} receiveShadow>
            <planeGeometry attach="geometry" args={[10,10]} />
            <meshStandardMaterial {...propsTexture}/>
        </mesh> 
    )    
}

export default Suelo;