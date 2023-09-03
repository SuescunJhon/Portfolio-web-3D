import {createRoot} from "react-dom/client";
import Experience from "./Experience";
import "./styles.css";

const root = createRoot(document.getElementById('root'));

root.render(
    <Experience 
    title={'Portfolio - Jhon Suescun'}
    info={'Web 3D Developer'}/>
);