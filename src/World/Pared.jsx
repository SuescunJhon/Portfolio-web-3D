const Pared = (props) => {
    return (
        <mesh position={props.position} rotation={props.rotation}>
            <planeGeometry attach="geometry" args={props.args} />
            <meshStandardMaterial attach="material" color="lightblue" />
        </mesh>
    )
}

export default Pared;