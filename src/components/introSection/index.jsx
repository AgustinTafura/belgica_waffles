import './index.scss'

const IntroSection = () => {

    return (
        /* <!-- intro section --> */
        <section id="intro">
            <div className="container">
                <div className="row">
                    <div className="col-md-offset-2 col-md-8 col-sm-offset-1 col-sm-10 title">
                    <p style={{paddingTop:"0px", paddingBottom:'0px', marginBottom:'0px',}}>
                        CON NUESTROS
                    </p>
                        <div className="flamReg" > WAFFLES </div>
                    <p style={{paddingTop:"0px"}}>
                        HACÉ MÁS
                        <br/> 
                        <span className='fjalaone'> FÁCILES Y RÁPIDOS </span>
                        <br/>
                        TUS
                        <br/>
                        <span className='fjalaone'> DESAYUNOS, ALMUERZOS Y MERIENDAS</span>
                    </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default IntroSection
