import { Text } from "@react-three/drei";

export default function Texto(props) {
    return (
        <Text
            fontSize={.6}
            rotation-y={-0.78}
            position-y={1.3}
            font="/assets/fonts/Agbalumo-Regular.ttf"
        >
            {props.message}
        </Text>
    )
}
