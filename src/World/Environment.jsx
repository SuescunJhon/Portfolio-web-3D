import { Sky, Sparkles, Stars } from "@react-three/drei";

const Environment = () => {
    return(<>
        <Stars
                radius={100} // Radius of the inner sphere (default=100)
                depth={50} // Depth of area where stars should fit (default=50)
                count={5000} // Amount of stars (default=5000)
                factor={2} // Size factor (default=4)
                saturation={0} // Saturation 0-1 (default=0)
            />
            <Sky
                sunPosition={[0, 0, 0]} // Coloca el sol debajo del horizonte
                inclination={0.2}       // Ajusta la inclinación para simular el atardecer
                azimuth={180}          // Ajusta el ángulo azimutal para cambiar la dirección de la luz
                mieCoefficient={0.005}  // Ajusta la dispersión atmosférica
                elevation={5}           // Ajusta la elevación del sol
                mieDirectionalG={0.07}   // Ajusta la luminosidad del sol
                rayleigh={3}        // Ajusta la dispersión de Rayleigh
                turbidity={10}         // Ajusta la claridad del cielo]
                exposure={0.5}
            />
    </>);
}
export default Environment;