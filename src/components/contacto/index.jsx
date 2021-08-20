import { Link } from 'react-router-dom'
import './index.scss'

const Contacto = () => {

    function formSubmitHandler(e) {
        
        e.preventDefault()
        console.log(e)

        // const emailData = {
        //   from_email: inputEmail.value,
        //   to_email: 'solbruzzone@hotmail.com',
        //   user_type: radioUser
        // }
  
        // if (mailSent < 3) {
        //   emailjs.send(
        //     'service_wpi3el2',
        //     'template_94btwpw',
        //     emailData,
        //     'user_d5kbEdnEX8hB4qeX7oMCf',
        //   ).then((result) => {
        //     toast("¡Gracias! Registramos tu Email")
        //     setMailSent(mailSent + 1)
        //   }).catch((err) => {
        //     console.log(err)
        //     toast.error("Error de Registro, inténtalo nuevamente")
        //   })
        // }
    }

    return (
        <section id="contacto">
        <div className="container">
          <div className="row">
            <div className=" col-12 col-md-6 title">
              <h3>Escribinos</h3>
              <hr/>
              <p>¿Tienes una <span className="fjalaone"> tienda </span> en cualquier ciudad de Argentina, y te gustaría distribuir nuestros productos?</p>
              <ul className="social-icon">
                  <li><a href="https://www.facebook.com/belgicasaludable" target='_blank' className="fab fa-facebook-f wow bounceIn" data-wow-delay="0.3s"></a></li>
                  <li><a href="https://www.instagram.com/wafflesbelgica/" target='_blank' className="fab fa-instagram wow bounceIn" data-wow-delay="0.6s"></a></li>
                  <li><a href="https://api.whatsapp.com/send?phone=5402244474768" target='_blank' className="fab fa-whatsapp wow bounceIn" data-wow-delay="0.9s"></a></li>
              </ul>
            </div>
            <div className="col-12 col-md-6 contact-form wow fadeInUp" data-wow-delay="0.9s">
              <form  method="post" onSubmit={formSubmitHandler}>
                <input required minLength='3' type="text" className="form-control" placeholder="Nombre"/>
                <input required type="email" className="form-control" placeholder="Email"/>
                <textarea required minLength='3' className="form-control" placeholder="Mensaje" rows="6"></textarea>
                <input type="submit" className="btn form-control" value="ENVIAR MENSAJE"/>
              </form>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Contacto
