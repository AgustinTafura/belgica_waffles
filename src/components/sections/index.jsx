import Home from "../home"
// import VideoParallax from "../videoParallax"
import Sabores from '../sabores';
import Contacto from "../contacto";
import Nosotros from "../nosotros";
import Faq from "../faq";
import VideoParallax from "../videoParallax";

const Sections = () => {


    return (
        <>
        <Home/>
        <hr className="border-0" style={{height:"80px"}}/>
        <Sabores/>
        <hr className="border-0"/>
        <Nosotros/>
        <VideoParallax/>
        <Faq/>
        {/* <hr className="border-0"/>
        <hr className="border-0" id="contacto"/> */}

        <Contacto/>
        </>
    )
}

export default Sections
