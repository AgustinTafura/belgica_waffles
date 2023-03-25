import { useEffect } from 'react'
import './index.scss'
import { nutlabels } from "../sabores/data.json"



const ModalSabores = ({...props}) => {

    const {sabor} = props

    return (
        sabor &&
        <div className="modal fade" id="saborModal" tabIndex="-1" role="dialog" aria-labelledby="saborModalLabel"
            aria-hidden="true" >
            <div className="modal-dialog modal-md modal-dialog-centered justify-content-center px-3" role="document">
                <div className="modal-content" >
                    {/* <div className="modal-header"> */}
                        {/* <h5 className="modal-title" id="saborModalLabel">Modal title</h5> */}
                        <button type="button" className="close m-2" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    {/* </div> */}
                    <div className="modal-body  pt-3 px-4 px-sm-5">
                        <div style={{ maxWidth: "348px",display: "inline-block" }}>
                            <div className='px-sm-3'>
                                <h4 className='text-left border-3 d-flex justify-content-between ' style={{fontFamily:"FjallaOne Regular", borderBottom:"4px solid #303030"}}>
                                    <div className='align-self-end'> {sabor.title} </div>
                                    <img className='' width={"50px"}  src={`${process.env.PUBLIC_URL}/images/toaster_time.png`} alt="alternative" />
                                    </h4>
                            </div>
                            <div className=' bg-black px-sm-3'>
                                <table className='table mt-3' style={{fontSize:"12px", borderBottom: "1px solid #dee2e6"}}>
                                    <thead>
                                        <tr>
                                            <th scope="col" className='border-0 p-1' style={{width:"43%"}}></th>
                                            <th scope="col" className='border-0 px-0 py-1' style={{width:"37%"}}>Porción 85gr.</th>
                                            <th scope="col" className='border-0 p-1' style={{width:"20%"}}>%VD</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            nutlabels.map((label,index)=>{return(
                                                <>
                                                    <tr>
                                                        <td className='pl-1 py-1 pr-0 text-left text-capitalize ' style={{width:"43%"}}>{label}</td>
                                                        <td className='px-0 py-1' style={{width:"37%"}}>{sabor.nutInfo[index][0]}</td>
                                                        <td className='p-1' style={{width:"20%"}}>{sabor.nutInfo[index][1]}</td>
                                                    </tr>
                                                </>
                                            )})
                                        }
                                    </tbody>
                                </table>
                                <div className='text-left' style={{fontFamily:"Montserrat", fontSize:"11px"}}>
                                    <div>
                                        <b>Ingredientes:</b> { sabor?.ing.join(", ") }.
                                    </div>
                                    <div className='mt-1 text-uppercase'>
                                        <b>RNPA:</b> { sabor.rnpa }
                                    </div>
                                    <div className='mt-1 '>
                                        <b>Características:</b> 
                                            Waffle { sabor.cat.includes("dulce") ? "Dulce" : "Salado" }
                                            {sabor.nutInfo[3][1] >= 6 && ", Fuente de Proteínas" }
                                            {sabor.nutInfo[7][1] >= 3 && ", Fuente de Fibra Alimentaria" }.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalSabores