import { useState } from 'react'
import emailjs from 'emailjs-com'
import './index.scss'
import {toast} from 'react-toastify'
const Contacto = () => {

  const [mailSent, setMailSent] = useState(0)

  function formSubmitHandler(e) {

      e.preventDefault()

      console.log(e)
      const submitter = e.nativeEvent.submitter
      const inputName = document.querySelector('#inputName').value
      const inputEmail = document.querySelector('#inputEmail').value
      const inputMessage = document.querySelector('#inputMessage').value


      const emailData = {
        from_name: inputName,
        from_email: inputEmail,
        from_message: inputMessage,
        to_email: 'belgicasaludable@gmail.com',
      }

      submitter.classList.add('disabled')

      if (mailSent < 2) {
        console.log('mailSent', mailSent)
        emailjs.send(
          'service_qypcsv9',
          'template_lvlt6p9',
          emailData,
          'user_GB4V2Gwxj1dBgqqL4sveF',
        ).then(() => {
          toast("¡Gracias por Escribirnos! Te responderemos a la brevedad")
          console.log('222', mailSent)
          setMailSent(mailSent + 1)
          mailSent === 0 && submitter.classList.remove('disabled')
        }).catch((err) => {
          toast.error("Error de Registro, inténtalo nuevamente")
        })
      }
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
                <input required id='inputName' minLength='3' type="text" className="form-control" placeholder="Nombre"/>
                <input required id='inputEmail' type="email" className="form-control" placeholder="Email"/>
                <textarea required id='inputMessage' minLength='3' className="form-control" placeholder="Mensaje" rows="6"></textarea>
                <input type="submit" className="btn form-control" value="ENVIAR MENSAJE"/>
              </form>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Contacto
