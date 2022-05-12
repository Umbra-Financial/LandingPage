import React from "react";
import {Link} from "react-router-dom";

function Header() {
    return (
        <header className="transition">
            <div className="container">
                <div className="row flex-align">
                    <div className="col-lg-3 col-md-3 col-8">
                        <div className="logo">
                            <Link to="/">
                                <img src="assets/images/right_version_4_logo.png"
                                     className="transition"
                                     alt="Umbra Financial"/></Link>
                        </div>
                    </div>
                    <div className="col-lg-9 col-md-9 col-4 text-right">
                        <div className="menu-toggle">
                            <span></span>
                        </div>
                        <div className="menu">
                            <ul className="d-inline-block">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/projects">Projects</Link></li>
                                <li><Link to="/services">Services</Link></li>
                                <li><Link to="/team">Team</Link></li>
                                <li><Link to="/consultation">Consultation</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
