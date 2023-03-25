import './index.scss'
// import $ from 'jquery'
import Filterizr from 'filterizr';
import { useEffect, useState } from 'react';
import data from "./data.json"
import ModalSabores from '../modalSabores';

const Sabores = () => {


    const lista = data.sabores
    const [saborSelected, setSaborSelected] = useState("")
    
    const setSabor = (e)=>{
        const name = e.target.textContent
        const sabor = lista.filter(e=>e.name === name)
        setSaborSelected(sabor[0])
    }

    function setChecked(e) {
        var controlSelected = e.target
        controlSelected.classList.add('is-checked')
        var controls = document.querySelectorAll('.button-group span.btn')
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
        <section id="sabores" className="filter" >
            <div className="container" >

                <h3 >SABORES</h3>
                <hr/>
                <div className="button-group filters-button-group" data-aos="fade-up" data-aos-duration="1000">
                    <span onClick={setChecked}  className="btn is-checked" data-filter="all">TODOS LOS SABORES</span>
                    <span onClick={setChecked} className="btn" data-filter="cacao">con CACAO</span>
                    <span onClick={setChecked} className="btn" data-filter="banana">con BANANA</span>
                    <span onClick={setChecked} className="btn" data-filter="salado">SALADOS</span>
                </div> 

                
                <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay='150' className="filter-container no-gutters row " style={{position:'unset'}} >

                    {lista.map((elem,index)=>{
                        return(
                                
                            <div data-toggle="modal" data-target="#saborModal" key={index} data-category={`${elem.cat}`} className={` col-6 col-md-3 filtr-item element-item`} onClick={setSabor}>
                                <span className="popup-with-move-anim" href={elem.name} >
                                    <div className="element-item-overlay" >
                                        <span>{elem.name}</span>
                                        </div>
                                    <img  src={`${process.env.PUBLIC_URL}/images/${elem.img}`} alt="alternative" />
                                </span>
                            </div>

                        )
                    })}

                </div>
            </div>
            <ModalSabores sabor={saborSelected}/>

        </section>

    )
}

export default Sabores
