import './index.scss'


import { jarallax, jarallaxVideo } from 'jarallax';

const VideoParallax = () => {
    window.addEventListener('load', ()=>{

        jarallaxVideo();
        const videoPath = `mp4:${process.env.PUBLIC_URL}/video/waffles_cooking.mp4`;
        jarallax(document.querySelectorAll('.jarallax'), {
            speed: 0.2,
            videoSrc: videoPath,
            // disableParallax: /iPad|iPhone|iPod|Android/,
            // disableVideo: /iPad|iPhone|iPod|Android/,
            // type: "scroll-opacity",
            // imgSrc: "./images/banana.jpg"
            
        });
    })

    return (
        <>
            <div style={{position:"relative"}}>
                <div className="nk-awb-overlay" style={{backgroundColor: "rgba(0, 0, 0, 0.2)",height: "100%",zIndex: "1000",width: "100%",position: "absolute"}}>
                </div>
                <div className="jarallax"  style={{height: '50vh', width: '50%'}}> </div>

            </div>

        </>
    )
}

export default VideoParallax