const Footer = ({children}) => {
    return (
        <section className="footer-wrapper pad-75 bg-lightblue">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 text-center">
                        <ul className="social-icons-two light list-inline">
                            <li className="list-inline-item"><a href="#"><i className="icon-google-plus"></i></a></li>
                            <li className="list-inline-item"><a href="#"><i className="icon-facebook"></i></a></li>
                            <li className="list-inline-item"><a href="#"><i className="icon-twitter"></i></a></li>
                            <li className="list-inline-item"><a href="#"><i className="icon-linedin"></i></a></li>
                            <li className="list-inline-item"><a href="#"><i className="icon-instagram"></i></a></li>
                        </ul>
                        <p className="copyright-text">Copyrights © 2018 <b>Cabe</b> Theme <br/> All Rights Reserved.</p>
                        <a href="#" className="back-top">BACK TO TOP</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer;