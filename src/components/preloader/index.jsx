import './index.scss'
import $ from 'jquery'
const Preloader = () => {

    window.addEventListener('load', ()=>{
        $('.preloader').fadeOut("slow");   

    })

    return (
        <div className="preloader">
            <div className="sk-spinner sk-spinner-rotating-plane"/>
        </div>
    )
}

export default Preloader
