import './index.scss'

const Contact = () => {


    return (
        <section id="contact">
        <div className="container">
          <div className="row">
            <div className=" col-12 col-md-6 title">
              <h2>Escribinos</h2>
              <hr/>
              <p>Dejanos tu mensaje y nos contactaremos a la brevedad.</p>
            </div>
            <div className="col-12 col-md-6 contact-form wow fadeInUp" data-wow-delay="0.9s">
              <form action="#" method="post">
                <input type="text" className="form-control" placeholder="Nombre"/>
                <input type="email" className="form-control" placeholder="Email"/>
                <textarea className="form-control" placeholder="Mensaje" rows="6"></textarea>
                <input type="submit" className="form-control" value="ENVIAR EMAIL"/>
              </form>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Contact
