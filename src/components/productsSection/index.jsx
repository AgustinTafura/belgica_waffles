import './index.scss'
// import $ from 'jquery'
import Filterizr from 'filterizr';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
const imgName = ["banana", "avena", "chia", "banana coco", "cacao banana", "cacao amargo", "espinaca salados"]




const ProductsSection = () => {

    
    function setChecked(e) {
        var controlSelected = e.target
        controlSelected.classList.add('is-checked')
        var controls = document.querySelectorAll('.filters-button-group a')
        // controls.filter(control=>control!==controlSelected)
        controls.forEach(control=>{
            control!==controlSelected && control.classList.remove('is-checked')
        })
    }
    
    
    useEffect(() => {
        //Filtering controls
        const filterizr = new Filterizr('.filter-container',  {
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
                <a onClick={setChecked} className="button is-checked" data-filter="all">TODOS LOS SABORES</a>
                <a onClick={setChecked} className="button" data-filter="cacao">CACAO</a>
                <a onClick={setChecked} className="button" data-filter="banana">BANANA</a>
                <a onClick={setChecked} className="button" data-filter="salados">SALADOS</a>
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

export default ProductsSection
