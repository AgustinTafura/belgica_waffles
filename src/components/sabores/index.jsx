import './index.scss'
// import $ from 'jquery'
import Filterizr from 'filterizr';
import { useEffect } from 'react';
const imgName = ["banana", "avena", "chia", "banana coco", "cacao banana", "cacao amargo", "espinaca salados"]


const Sabores = () => {

    
    function setChecked(e) {
        var controlSelected = e.target
        controlSelected.classList.add('is-checked')
        var controls = document.querySelectorAll('.button-group a')
        // controls.filter(control=>control!==controlSelected)
        controls.forEach(control=>{
            control!==controlSelected && control.classList.remove('is-checked')
        })
    }
    
    
    useEffect(() => {
        //Filtering controls
        new Filterizr('.filter-container',  {
            gutterPixels: -1,  
            callbacks: {},
        });


        
    }, [])
    
    return (
	<section id="projects" className="filter">
		<div className="container">

            <h3>SABORES</h3>
            <hr/>
            <div className="button-group filters-button-group">
                <span onClick={setChecked} className="btn is-checked" data-filter="all">TODOS LOS SABORES</span>
                <span onClick={setChecked} className="btn" data-filter="cacao">CACAO</span>
                <span onClick={setChecked} className="btn" data-filter="banana">BANANA</span>
                <span onClick={setChecked} className="btn" data-filter="salados">SALADOS</span>
            </div> 

            
            <div className="filter-container no-gutters row " style={{position:'unset'}} >

                {imgName.map((name,index)=>{
                    return(
                        <div key={index}  data-category={`${name.replace(' ', ', ')}`} className={`col-6 col-md-3 filtr-item element-item`}>
                            <span className="popup-with-move-anim" to="#project-1" >
                                <div className="element-item-overlay">
                                    <span>{name}</span>
                                    </div>
                                <img src={`${process.env.PUBLIC_URL}/images/${name.replace(' ', '_')}.jpg`} alt="alternative" />
                            </span>
                        </div>

                    )
                })}

            </div>
		</div>
        
    </section>

    )
}

export default Sabores
