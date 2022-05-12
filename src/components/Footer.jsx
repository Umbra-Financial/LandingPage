import React from "react";
import {Link} from "react-router-dom";

function Footer() {
    return (
        <footer className="bg-pattern darkblue ptb-100">
            <div className="container">
                <div className="footer">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="footer-logo pb-25">
                                <Link to="/">
                                    <img src="assets/images/right_version_4_logo.png" alt="Umbra Financial"/>
                                </Link>
                            </div>
                            <div className="footer-icon">
                                <ul>
                                    <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="footer-link">
                                <ul>
                                    <li><Link to="/consultation">Contact</Link></li>
                                    <li><Link to="/projects">Projects</Link></li>
                                    <li><Link to="/team">Teams</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    <div className="row">
                        <div className="col-lg-6">
                            <p>© Umbra Financial all Rights Reserved.</p>
                        </div>
                        <div className="col-lg-6">
                            <ul>
                                <li><a href="#">Terms & Condition</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><Link to="/consultation">Contact Us</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
