import { useTexture } from "@react-three/drei";

export default function Suelo(props) {
    const PATH = "/assets/textures/wood/"
    const propsTexture = useTexture({
        map: PATH + "laminate_floor_03_diff_2k.jpg",

    })

    return (
        <mesh {...props}>
            <planeGeometry args={[20, 10]} />
            <meshStandardMaterial {...propsTexture} />
        </mesh>
    );
}
