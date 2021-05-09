import './index.scss'
// import video from 'mp4:./waffles_cooking.mp4'
import { jarallax, jarallaxVideo } from 'jarallax';

const VideoParallax = () => {
    window.addEventListener('load', ()=>{

        jarallaxVideo();
    
        jarallax(document.querySelectorAll('.jarallax'), {
            speed: 0.2,
            videoSrc: "mp4:./video/waffles_cooking.mp4",
            // disableParallax: /iPad|iPhone|iPod|Android/,
            // disableVideo: /iPad|iPhone|iPod|Android/,
            type: "scroll-opacity",
            imgSrc: "./images/banana.jpg"
            
        });
    })

    return (
        <>
            <div style={{position:"relative"}}>
            <div className="nk-awb-overlay" style={{backgroundColor: "rgba(0, 0, 0, 0.7)",height: "100%",zIndex: "1000",width: "100%",position: "absolute"}}>
            </div>
            <div className="jarallax"  style={{height: '70vh', width: '100%'}}> </div>

            </div>

        </>
    )
}

export default VideoParallax