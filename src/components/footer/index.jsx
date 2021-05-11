import './index.scss'

const Footer = () => {


    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12">
                        <h2 className="wow fadeIn" data-wow-delay="0.9s">Estamos en Contacto</h2>
                        <ul className="social-icon">
                            <li><a href="#" className="fab fa-facebook-f wow bounceIn" data-wow-delay="0.3s"></a></li>
                            <li><a href="#" className="fab fa-instagram wow bounceIn" data-wow-delay="0.6s"></a></li>
                            <li><a href="#" className="fab fa-whatsapp wow bounceIn" data-wow-delay="0.9s"></a></li>
                        </ul>
                    </div>
                    <div className="col-md-12 col-sm-12 copyright">
                        <p>Copyright © 2021 Belgica Saludable| Designe by <a target="_blank" rel="nofollow" href="http://">TaFura</a></p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
