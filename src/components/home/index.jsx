import './index.scss'
import $ from 'jquery'
import { useEffect, useState } from 'react'

const Home = () => {
    const [state, setState] = useState(0)
    const iconsNames = [
        '100 avena',
        'stevia',
        // 'sin harina',
        'sin azucar',
        'sin conservantes' 
    ]

    const data = [
        {title:"calidad", info:"SELECCIONAMOS ESPECIALMENTE MATERIAS PRIMAS DE ALTA CALIDAD NUTRICIONAL PORQUE CREEMOS QUE UNA ALIMENTACION SALUDABLE ES BENEFICIOSA PARA CONSEGUIR UN BIENESTAR FÍSICO Y MENTAL."},
        {title:"insumos", info:"ELABORAMOS NUESTROS PRODUCTOS TOTALEMENTE A BASE DE AVENA Y ENDULZAMOS CON STEVIA, NO CONTIENEN HARINA DE TRIGO NI AZUCAR AGREGADA."},
        {title:"conservación", info:"NO UTILIZAMOS ADITIVOS NI CONSERVANTES ARTIFICIALES, SU MÉTODO DE PRESERVACIÓN ES EN FREEZER PARA QUE PUEDAN SER CONSERVADOS HASTA 3 MESES SIN PERDER SUS CUALIDADES NUTRICIONALES."}
    ]
    const [shouldCount, setShouldCount] = useState(true);
    const [progressValue, setProgressValue] = useState(1);
    useEffect(() => {
        document.querySelectorAll('.nav-link')[0].click()
        if (shouldCount){
            const interval = setInterval(() => {
                setProgressValue(progressValue + 1)
                document.querySelectorAll('.nav-link')[progressValue%3].click()
            },8000);
            
            return () => clearInterval(interval);
        }
    }, [progressValue]);

    return (
        <section id="home">
            <div className="container">
                <div className="row">
                    <div className="col-md-offset-2 col-md-8 col-sm-offset-1 col-sm-10 title">
                        {/* <p style={{margin:0, padding:0}}>
                            CON NUESTROS
                        </p> */}
                        <div className="flamReg"> WAFFLES </div>
                        <p style={{paddingTop:"0px"}}>
                            HACÉ MÁS
                            <br />
                            <span className='fjalaone'> FÁCIL Y RÁPIDO </span>
                            <br />
                            TUS
                            <br />
                            <span className='fjalaone'> DESAYUNOS, ALMUERZOS Y MERIENDAS</span>
                        </p>
                    </div>
                </div>
                <div className="tabs row">
                    <div className="area-1 col-12 col-lg-6">
                        <div className="tabs-container">                            
                            {/* <!-- Tabs Links --> */}
                            <ul className="nav nav-tabs" id="ariaTabs" role="tablist">
                                {data.map((el,index)=>
                                    <li key={Math.random()} className="nav-item">
                                        <span className={`nav-link`} id={`nav-tab-${index}`} data-toggle="tab" href={`#tab-${index}`} role="tab" aria-controls={`tab-${index}`} aria-selected="false"><i className="fas fa-th"></i>{el.title}</span>
                                    </li>  
                                )}
                            </ul>
                            
                            {/* <!-- Tabs Content --> */}
                            <div className="tab-content" id="ariaTabsContent">
                                {data.map((el,index)=>
                                    <div key={Math.random()} className="tab-pane fade" id={`tab-${index}`} role="tabpanel" aria-labelledby={`tab-${index}`}>
                                        <p> {el.info} </p>                    
                                    </div>                         
                                )}
                            </div> 
                        </div> 
                    </div>
                    <div className="area-2 col-12 col-lg-6">
                        <div id="highligths" className="container">
                            <div className="row icon-group">
                                {iconsNames.map((iconName, i)=>{
                                    return(
                                    <div key={i} className="icon-info col-4 col-sm-2" >
                                        <img src={`${process.env.PUBLIC_URL}/icon/${iconName.replaceAll(' ', '_')}.png`} alt={`waffles belgica saludable - ${iconName}`} />
                                    </div>
                                    )
                                })}
                            </div>                            
                        </div>
                    </div> 
                </div>
            </div>
            <img src={`${process.env.PUBLIC_URL}/images/Sin título-1.png`} alt=""  style={{width:'100%'}}/>
        </section>
    )
}

export default Home
