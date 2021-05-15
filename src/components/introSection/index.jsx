import './index.scss'

const IntroSection = () => {

    return (
        <section id="intro">
            <div className="container">
                <div className="row">
                    <div className="col-md-offset-2 col-md-8 col-sm-offset-1 col-sm-10 title">
                    <p style={{margin:0, padding:0}}>
                        CON NUESTROS
                    </p>
                        <div className="flamReg" > WAFFLES </div>
                    <p style={{paddingTop:"0px"}}>
                        HACÉ MÁS
                        <br/> 
                        <span className='fjalaone'> FÁCIL Y RÁPIDO </span>
                        <br/>
                        TUS
                        <br/>
                        <span className='fjalaone'> DESAYUNOS, ALMUERZOS Y MERIENDAS</span>
                    </p>
                    </div>
                </div>

                <div class="tabs row">

                    <div class="area-1 col-12 col-lg-6">
                        <div class="tabs-container">
                            
                            
                            {/* <!-- Tabs Links --> */}
                            <ul class="nav nav-tabs" id="ariaTabs" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link" id="nav-tab-1" data-toggle="tab" href="#tab-1" role="tab" aria-controls="tab-1" aria-selected="false"><i class="fas fa-th"></i>CALIDAD</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="nav-tab-2" data-toggle="tab" href="#tab-2" role="tab" aria-controls="tab-2" aria-selected="false"><i class="fas fa-th"></i>INSUMOS</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active" id="nav-tab-3" data-toggle="tab" href="#tab-3" role="tab" aria-controls="tab-3" aria-selected="true"><i class="fas fa-th"></i>CONSERVACIÓN</a>
                                </li>
                            </ul>
                            
                            
                            {/* <!-- Tabs Content --> */}
                            <div class="tab-content" id="ariaTabsContent">

                                {/* <!-- Tab --> */}
                                <div class="tab-pane fade" id="tab-1" role="tabpanel" aria-labelledby="tab-1">
                                    <p>
                                        SELECCIONAMOS ESPECIALMENTE MATERIAS PRIMAS DE ALTA CALIDAD NUTRICIONAL 
                                        PORQUE CREEMOS QUE UNA ALIMENTACION SALUDABLE ES BENEFICIOSA PARA CONSEGUIR 
                                        UN BIENESTAR FÍSICO Y MENTAL.
                                    </p>                    
                                </div> 

                                <div class="tab-pane fade" id="tab-2" role="tabpanel" aria-labelledby="tab-2">
                                    <p>
                                        ELABORAMOS NUESTROS PRODUCTOS TOTALEMENTE A BASE DE AVENA Y 
                                        ENDULZAMOS CON STEVIA, NO CONTIENEN HARINA DE TRIGO NI AZUCAR AGREGADA.
                                    </p>
                                </div> 


                                
                                {/* <!-- Tab --> */}
                                <div class="tab-pane fade active show" id="tab-3" role="tabpanel" aria-labelledby="tab-3">
                                    <p>
                                    NO UTILIZAMOS ADITIVOS NI CONSERVANTES ARTIFICIALES, 
                                    SU MÉTODO DE PRESERVACIÓN ES EN FREEZER PARA QUE PUEDAN SER 
                                    CONSERVADOS HASTA 3 MESES SIN PERDER SUS CUALIDADES NUTRICIONALES.
                                    </p>
                                </div> 

                            </div> 


                        </div> 

                    </div>

                    <div class="area-2 col-12 col-lg-6">
                    </div> 
                </div>
            </div>
            <img src={`${process.env.PUBLIC_URL}/images/Sin título-2.png`} alt=""  style={{width:'100%'}}/>
        </section>
    )
}

export default IntroSection
