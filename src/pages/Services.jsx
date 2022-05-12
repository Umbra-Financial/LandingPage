import React from 'react'
import { Link } from "react-router-dom";

export default function Services() {
    return (
        <>
            <section className="sub-page-banner parallax" id="banner">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 wow fadeInUp">
                            <div className="page-banner text-center">
                                <h1 className="sub-banner-title">Services</h1>
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li>Services</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="feature-part darkblue pt-100 pb-10">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 wow fadeInUp pb-80">
                            <div className="feature-box">
                                <div className="feature-icon">
                                    <img src="assets/images/feature-1.png" alt="Safe & Secure" />
                                </div>
                                <div className="feature-contain pt-25">
                                    <a href="feature.html" className="feature-title pb-15">Safe & Secure</a>
                                    <p className="feature-des">Lorem ipsum dolor sit amet, consectetur adipi-sicing elit, sed do eiusmod tempor incididunt ut labore et.Lorem ipsum dolor sit amet, labore et.Lorem ipsum dolor sit amet. </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 wow fadeInUp pb-80">
                            <div className="feature-box">
                                <div className="feature-icon">
                                    <a href="feature.html"><img src="assets/images/feature-2.png" alt="Early Bonus" /></a>
                                </div>
                                <div className="feature-contain pt-25">
                                    <a href="feature.html" className="feature-title pb-15">Early Bonus</a>
                                    <p className="feature-des">Lorem ipsum dolor sit amet, consectetur adipi-sicing elit, sed do eiusmod tempor incididunt ut labore et.Lorem ipsum dolor sit amet, labore et.Lorem ipsum dolor sit amet. </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 wow fadeInUp pb-80">
                            <div className="feature-box">
                                <div className="feature-icon">
                                    <a href="feature.html"><img src="assets/images/feature-3.png" alt="Univarsal Access" /></a>
                                </div>
                                <div className="feature-contain pt-25">
                                    <a href="feature.html" className="feature-title pb-15">Univarsal Access</a>
                                    <p className="feature-des">Lorem ipsum dolor sit amet, consectetur adipi-sicing elit, sed do eiusmod tempor incididunt ut labore et.Lorem ipsum dolor sit amet, labore et.Lorem ipsum dolor sit amet. </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 wow fadeInUp pb-80">
                            <div className="feature-box">
                                <div className="feature-icon">
                                    <a href="feature.html"><img src="assets/images/feature-4.png" alt="Secure Storage" /></a>
                                </div>
                                <div className="feature-contain pt-25">
                                    <a href="feature.html" className="feature-title pb-15">Secure Storage</a>
                                    <p className="feature-des">Lorem ipsum dolor sit amet, consectetur adipi-sicing elit, sed do eiusmod tempor incididunt ut labore et.Lorem ipsum dolor sit amet, labore et.Lorem ipsum dolor sit amet. </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 wow fadeInUp pb-80">
                            <div className="feature-box">
                                <div className="feature-icon">
                                    <a href="feature.html"><img src="assets/images/feature-5.png" alt="Low Cost" /></a>
                                </div>
                                <div className="feature-contain pt-25">
                                    <a href="feature.html" className="feature-title pb-15">Low Cost</a>
                                    <p className="feature-des">Lorem ipsum dolor sit amet, consectetur adipi-sicing elit, sed do eiusmod tempor incididunt ut labore et.Lorem ipsum dolor sit amet, labore et.Lorem ipsum dolor sit amet. </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 wow fadeInUp pb-80">
                            <div className="feature-box">
                                <div className="feature-icon">
                                    <a href="feature.html"><img src="assets/images/feature-6.png" alt="Several Profit" /></a>
                                </div>
                                <div className="feature-contain pt-25">
                                    <a href="feature.html" className="feature-title pb-15">Several Profit</a>
                                    <p className="feature-des">Lorem ipsum dolor sit amet, consectetur adipi-sicing elit, sed do eiusmod tempor incididunt ut labore et.Lorem ipsum dolor sit amet, labore et.Lorem ipsum dolor sit amet. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
