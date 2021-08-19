import './index.scss'
import $ from 'jquery'
import { useEffect } from 'react'

const Faq = () => {

    // function setActive(e) {
    //     var controlSelected = e.target

    //     // controlSelected.classList.add('active')
    //     var controls = document.querySelectorAll('.accordion h5.card-header')
    //     console.log(controls)
    //     // controls.filter(control=>control!==controlSelected)
    //     // controls.forEach(control=>{
    //     //     control!==controlSelected && control.classList.remove('is-checked')
    //     // })
    // }


return (
    <>
        <section>
            <div className='container'>
                <h3>MAYORISTAS</h3>
                <hr/>
                <div className="accordion" id="accordionExample">
                    <div className="card">
                    <h5 className=" card-header collapsed" id="headingOne" type="button" data-toggle="collapse"
                            data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Collapsible Group Item #1
                        </h5>
                        <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                            <div className="card-body">
                                <p>

                                    Some placeholder content for the first accordion panel. This panel is shown by default, thanks to
                                    the <code>.show</code> class.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <h5 className=" card-header collapsed" id="headingTwo" type="button" data-toggle="collapse"
                            data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                            Collapsible Group Item #2
                        </h5>
                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                            <div className="card-body">
                                <p>

                                Some placeholder content for the second accordion panel. This panel is hidden by default.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <h5 className=" card-header collapsed" id="headingThree" type="button" data-toggle="collapse"
                            data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                            Collapsible Group Item #3
                        </h5>
                        <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                            <div className="card-body">
                                <p>
                                    And lastly, the placeholder content for the third and final accordion panel. This panel is hidden by
                                    default.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
)
}

export default Faq