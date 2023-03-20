import { useEffect } from 'react'
import './index.scss'




const ModalSabores = () => {

    useEffect(() => {
      const modal = document.getElementById("exampleModal")
      console.log(3213, modal)
      modal.addEventListener("show", (e)=>{
        console.log(123)
      })
    
      return () => {
      }
    }, [])
    

    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div className="modal-dialog modal-md modal-dialog-centered justify-content-center px-3" role="document">
                <div className="modal-content" >
                    {/* <div className="modal-header"> */}
                        {/* <h5 className="modal-title" id="exampleModalLabel">Modal title</h5> */}
                        <button type="button" className="close m-2" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    {/* </div> */}
                    <div className="modal-body">
                        <div></div>
                        <div className='row'>
                            <div className='col-9 bg-black'>
                                TITULO
                            </div>
                            <div className='col-3 bg-red'>
                                tabla
                            </div>

                        </div>
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