const Lights = () => {

    return (<>
        <ambientLight intensity={0.5}/>
        <directionalLight castShadow position={[7, 10, 7]} intensity={1.5} color={'yellow'}/>
    </>
    );
}
export default Lights;