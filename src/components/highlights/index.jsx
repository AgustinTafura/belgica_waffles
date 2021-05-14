import './index.scss'

const HighLights = () => {
    const iconsNames = ['100 avena','stevia', 'sin harina', 'sin azucar', 'sin conservantes' ]

    return (
    <div id="highligths" className="container">
        {/* <hr /> */}
        <div className="row icon-group">

            {iconsNames.map((iconName, i)=>{
                return(
                <div key={i} className="icon-info col-4 col-sm-4 col-md-3 col-lg-2" >
                    <img src={`${process.env.PUBLIC_URL}/icon/${iconName.replaceAll(' ', '_')}.png`} alt={`waffles belgica saludable - ${iconName}`} />
                </div>
                )
            })}
        </div>
        {/* <hr /> */}
        
    </div>
    )
}

export default HighLights
