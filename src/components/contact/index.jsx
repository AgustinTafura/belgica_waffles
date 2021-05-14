import './index.scss'

const Contact = () => {


    return (
        <section id="contacto">
        <div className="container">
          <div className="row">
            <div className=" col-12 col-md-6 title">
              <h3>Escribinos</h3>
              <hr/>
              <p>¿Tienes una <span class="fjalaone"> tienda </span> en cualquier ciudad de Argentina, y te gustaría distribuir nuestros productos?</p>
              <ul className="social-icon">
                  <li><a href="#" className="fab fa-facebook-f wow bounceIn" data-wow-delay="0.3s"></a></li>
                  <li><a href="#" className="fab fa-instagram wow bounceIn" data-wow-delay="0.6s"></a></li>
                  <li><a href="#" className="fab fa-whatsapp wow bounceIn" data-wow-delay="0.9s"></a></li>
              </ul>
            </div>
            <div className="col-12 col-md-6 contact-form wow fadeInUp" data-wow-delay="0.9s">
              <form action="#" method="post">
                <input type="text" className="form-control" placeholder="Nombre"/>
                <input type="email" className="form-control" placeholder="Email"/>
                <textarea className="form-control" placeholder="Mensaje" rows="6"></textarea>
                <input type="submit" className="form-control" value="ENVIAR MENSAJE"/>
              </form>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Contact
