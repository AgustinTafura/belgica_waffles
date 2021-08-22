import './index.scss'
// import $ from 'jquery'
import Filterizr from 'filterizr';
import { useEffect } from 'react';
import AOS from 'aos';


const Sabores = () => {



    const lista = [
        {name:"banana", img:"banana.jpg", cat:"dulce, banana"},
        {name:"avena", img:"avena.jpg", cat:"dulce"},
        {name:"chia", img:"chia.jpg", cat:"dulce, chia"},
        {name:"banana & coco", img:"banana_coco.jpg", cat:"dulce, banana, coco"},
        {name:"cacao & banana", img:"cacao_banana.jpg", cat:"dulce, banana, cacao"},
        {name:"cacao amargo", img:"cacao_amargo.jpg", cat:"dulce, cacao"},
        {name:"espinaca", img: "espinaca_salados.jpg", cat:"salado, espinaca"}
    ]

    
    function setChecked(e) {
        var controlSelected = e.target
        controlSelected.classList.add('is-checked')
        var controls = document.querySelectorAll('.button-group span.btn')
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
	<section id="sabores" className="filter">
		<div className="container" >

            <h3 >SABORES</h3>
            <hr/>
            <div className="button-group filters-button-group" data-aos="fade-right">
                <span onClick={setChecked}  className="btn is-checked" data-filter="all"  data-toggle="modal" data-target="#exampleModal">TODOS LOS SABORES</span>
                <span onClick={setChecked} className="btn" data-filter="cacao">con CACAO</span>
                <span onClick={setChecked} className="btn" data-filter="banana">con BANANA</span>
                <span onClick={setChecked} className="btn" data-filter="espinaca">SALADOS</span>
            </div> 

            
            <div className="filter-container no-gutters row " style={{position:'unset'}} >

                {lista.map((elem,index)=>{
                    return(
                        <div data-toggle="modal" data-target="#exampleModal" key={index}   data-category={`${elem.cat}`} className={` col-6 col-md-3 filtr-item element-item`}>
                            <span className="popup-with-move-anim" href={elem.name} >
                                <div className="element-item-overlay" >
                                    <span >{elem.name}</span>
                                    </div>
                                <img src={`${process.env.PUBLIC_URL}/images/${elem.img}`} alt="alternative" />
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
