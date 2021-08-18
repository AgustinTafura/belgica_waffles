import './index.scss'
import $ from 'jquery'
import Filterizr from 'filterizr';
const imgName = ["banana", "avena", "chia", "banana coco", "cacao banana", "cacao amargo", "espinaca salados"]




const ProductsSection = () => {

    /* Filter - Isotope */
    window.addEventListener('load', function() {

        // Configure your options
        const options = { /* check next step for available options */ };
        // Adjust the CSS selector to match the container where
        // you set up your image gallery
        const filterizr = new Filterizr('.filter-container', {gutterPixels: -1,  callbacks: {
            onFilteringStart: function(e) {
                e.stopPropagation()
            }
        }});
        

    });
    
    return (
	<div id="projects" className="filter">
		<div className="container">
            <div className="button-group filters-button-group">
                <a className="button is-checked"data-filter="all"><span>TODOS LOS SABORES</span></a>
                <a className="button" data-filter="cacao"><span>CACAO</span></a>
                <a className="button" data-filter="banana"><span>BANANA</span></a>
                <a className="button" data-filter="salados"><span>SALADOS</span></a>
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
