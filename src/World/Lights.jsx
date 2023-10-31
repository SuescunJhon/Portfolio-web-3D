
const Lights = () => {

    return (<>
        <ambientLight intensity={0.5} />
        <pointLight position={[-3, -1, 1]} />
        <pointLight position={[-1, -1, 3]} />
        <pointLight position={[.5, -1, 5]} />
        <pointLight position={[2, -1, 7]} />
        <pointLight position={[5, 5, 5]} intensity={30} castShadow />

    </>
    );
}
export default Lights;