import './index.scss'
import $ from 'jquery'
import Filterizr from 'filterizr';
const imgName = ["banana", "avena banana", "chia", "banana coco", "cacao banana", "cacao amargo", "espinaca salados"]




const ProductsSection = () => {

    /* Filter - Isotope */
    window.addEventListener('load', function() {

        // Configure your options
        const options = { /* check next step for available options */ };
        // Adjust the CSS selector to match the container where
        // you set up your image gallery
        const filterizr = new Filterizr('.filter-container', {gutterPixels: -1});

    });
    
    return (
	<div id="projects" className="filter">
		<div className="container-fluid">
            <div className="row">
                <div className="col-lg-12 position-static">
                    <div className="section-title ">PROJECTS</div>
                    <h2>Projects That We're Proud Of</h2>
                </div>
            </div>
            <div className="button-group filters-button-group">
                <a className="button is-checked"data-filter="all"><span>SHOW ALL</span></a>
                <a className="button" data-filter="cacao"><span>CACAO</span></a>
                <a className="button" data-filter="banana"><span>DEVELOPMENT</span></a>
                {/* <a className="button" data-filter=".marketing"><span>MARKETING</span></a>
                <a className="button" data-filter=".seo"><span>SEO</span></a> */}
            </div> 
            <div className="filter-container no-gutters row " style={{position:'unset'}} >

                {imgName.map((name,index)=>{
                    return(
                        <div key={index}  data-category={`${name.replace(' ', ', ')}`} className={`col-6 col-md-3 filtr-item element-item`}>
                            <a className="popup-with-move-anim " href="#project-1" >
                                <div className="element-item-overlay">
                                    <span>{name}</span>
                                    </div>
                                <img src={`${process.env.PUBLIC_URL}/images/${name.replace(' ', '_')}.jpg`} alt="alternative" />
                            </a>
                        </div>

                    )
                })}

            </div>
		</div>
    </div>

    )
}

export default ProductsSection
