const Pared = (props) => {
    return (
        <mesh  position={props.position} rotation={props.rotation}>
            <planeGeometry attach="geometry" args={props.args} />
            <meshStandardMaterial attach="material" color="white" roughness={0} />
        </mesh> 
    )
}

export default Pared;