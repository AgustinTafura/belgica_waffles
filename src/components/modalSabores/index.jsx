import { useEffect } from 'react'
import './index.scss'




const ModalSabores = ({...props}) => {

    const {sabor} = props

    useEffect(() => {
      const modal = document.getElementById("saborModal")
      modal.addEventListener("show", (e)=>{
        console.log(123,e)
      })
    
      return () => {
      }
    }, [])
    

    return (
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
                        <div className='px-sm-3'>
                            <h4 className='text-left border-3 d-flex justify-content-between ' style={{fontFamily:"FjallaOne Regular", borderBottom:"4px solid #303030"}}>
                                <div className='align-self-end'> {sabor.title} </div>
                                <img className='' width={"50px"}  src={`${process.env.PUBLIC_URL}/images/toaster_time.png`} alt="alternative" />
                                </h4>
                        </div>
                        {/* <div className='row'> */}
                            <div className=' bg-black px-sm-3'>
                                <table className='table mt-4' style={{fontSize:"12px"}}>
                                    <thead>
                                        <tr>
                                            <th scope="col" className='border-0 p-1' style={{width:"42%"}}></th>
                                            <th scope="col" className='border-0 p-1' style={{width:"40%"}}>Porción de 85gr.</th>
                                            <th scope="col" className='border-0 p-1' style={{width:"18%"}}>%VD (*)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className='p-1 text-left' style={{width:"42%"}}>Valor energético</td>
                                            <td className='p-1' style={{width:"40%"}}>97 Kcal/406 Kj</td>
                                            <td className='p-1' style={{width:"18%"}}>5</td>
                                        </tr>
                                    </tbody>

                                </table>
                            </div>
                            {/* <div className='col-3 bg-red'>
                                tabla
                            </div> */}

                        {/* </div> */}
                        {/* <div>
                            ingredientes
                        </div> */}
                    </div>
                    {/* <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default ModalSabores