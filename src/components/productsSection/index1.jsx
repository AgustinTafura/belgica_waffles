import './index.scss'
import 'isotope-layout'
import $ from 'jquery'
import Isotope from 'isotope-layout' 
const imgName = ["banana", "avena", "chia", "banana coco", "cacao banana", "cacao amargo", "espinaca salados"]




const ProductsSection = () => {

    /* Filter - Isotope */
    $(window).on('load', function() {

        var $grid = new Isotope(  document.querySelector('.grid'), {
        
            // options
            itemSelector: '.element-item',
            layoutMode: 'fitRows'
        });

        // filter items on button click
        $('.filters-button-group').on( 'click', 'a', function() {
            var filterValue = $(this).attr('data-filter');
            console.log(document.querySelector('.grid'))
            console.log(new Isotope(document.querySelector('.grid'), {            itemSelector: '.element-item',
            layoutMode: 'fitRows', filter: filterValue }))
            new Isotope(document.querySelector('.grid'), {            itemSelector: '.element-item',
            layoutMode: 'fitRows', filter: filterValue });
        });
        
        // change is-checked class on buttons
        $('.button-group').each( function( i, buttonGroup ) {
            var $buttonGroup = $( buttonGroup );
            console.log($buttonGroup)
            $buttonGroup.on( 'click', 'a', function() {
                $buttonGroup.find('.is-checked').removeClass('is-checked');
                $( this ).addClass('is-checked');
            });	
        });
    });
    
    return (
	<div id="projects" className="filter">
		<div className="container">
            <div className="row">
                <div className="col-lg-12 position-static">
                    <div className="section-title ">PROJECTS</div>
                    <h2>Projects That We're Proud Of</h2>
                </div>
            </div>
            <div className="button-group filters-button-group">
                <a className="button is-checked" data-filter="*"><span>SHOW ALL</span></a>
                <a className="button" data-filter=".cacao"><span>CACAO</span></a>
                <a className="button" data-filter=".banana"><span>DEVELOPMENT</span></a>
                {/* <a className="button" data-filter=".marketing"><span>MARKETING</span></a>
                <a className="button" data-filter=".seo"><span>SEO</span></a> */}
            </div> 
            <div className="grid row no-gutters" style={{position: "relative"}}>

                {imgName.map((name,index)=>{
                    return(
                        <div key={index} style={{position: "relative"}} className={`col-6 col-md-4 col-lg-3 element-item ${name.replace('_', ' ')}`}>
                            <a className="popup-with-move-anim " href="#project-1" >
                                <div className="element-item-overlay">
                                    <span>Online Banking</span>
                                    </div>
                                <img src={`/images/${name}.jpg`} alt="alternative" />
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
