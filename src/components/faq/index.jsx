import './index.scss'


const Faq = () => {

return (
    <>
        <section id='faq'>
            <div className='container'>
                <h3>MAYORISTAS</h3>
                <hr/>
                <div className="accordion" id="accordion">
                    <div className="card">
                    <h5 className=" card-header collapsed" id="headingOne" data-toggle="collapse"
                            data-target="#collapseOne"  aria-controls="collapseOne">
                            Collapsible Group Item #1
                        </h5>
                        <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                            <div className="card-body">
                                <p>

                                    Some placeholder content for the first accordion panel. This panel is shown by default, thanks to
                                    the <code>.show</code> class.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <h5 className=" card-header collapsed" id="headingTwo" data-toggle="collapse"
                            data-target="#collapseTwo"  aria-controls="collapseTwo">
                            Collapsible Group Item #2
                        </h5>
                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                            <div className="card-body">
                                <p>

                                Some placeholder content for the second accordion panel. This panel is hidden by default.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <h5 className=" card-header collapsed" id="headingThree" data-toggle="collapse"
                            data-target="#collapseThree"  aria-controls="collapseThree">
                            Collapsible Group Item #3
                        </h5>
                        <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                            <div className="card-body">
                                <p>
                                    And lastly, the placeholder content for the third and final accordion panel. This panel is hidden by
                                    default.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-12 pt-5'>
                        <img  src={`${process.env.PUBLIC_URL}/images/icon_box.png`} alt="alternative" width={"100px"} style={{filter: "drop-shadow(3px 2px 4px gray)"}}  />
                    </div>
            </div>
        </section>
    </>
)
}

export default Faq