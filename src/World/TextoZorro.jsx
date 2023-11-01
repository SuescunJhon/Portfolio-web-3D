import { Text } from "@react-three/drei";

export default function TextoZorro(props) {
    return (
        <Text
            fontSize={.8}
            position-y={3}
            font="/assets/fonts/Agbalumo-Regular.ttf"
            color={"black"}
        >
            {props.message}
        </Text>
    )
}