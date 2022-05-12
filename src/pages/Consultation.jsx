import React from 'react'
import { Link } from "react-router-dom";

export default function Consultation() {
    return (
        <>
            <section className="sub-page-banner parallax" id="banner">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 wow fadeInUp">
                            <div className="page-banner text-center">
                                <h1 className="sub-banner-title">Contact</h1>
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li>Contact</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="contact-form skyblue ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 wow fadeInLeft">
                            <div className="section-heading">
                                <h2 className="heading-title-2 pb-20">Contact Us</h2>
                                <p className="heading-des">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. dolore eu fugiat nulla pariatur. </p>
                            </div>
                            <ul className="contact-detail">
                                <li><i className="fa fa-phone" aria-hidden="true"></i> <a href="tel:123456789">+91 123 456 789</a></li>
                                <li><i className="fa fa-envelope" aria-hidden="true"></i> <a href="mailto:info@example.com">info@example.com</a></li>
                                <li><i className="fa fa-map-marker" aria-hidden="true"></i> <span>Headley Ln, Dorking RH5 6DF, UK 7M7P+96 Leatherhead, United Kingdom</span></li>
                            </ul>
                        </div>
                        <div className="col-md-6 wow fadeInRight">
                            <h3 className="blog-comment-heading">Leave a message here</h3>
                            <form>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Name*" required="" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Email*" required="" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Subject*" required="" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Phone*" required="" />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <textarea className="form-control" placeholder="Massage*" required></textarea>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <button className="btn">submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="row pt-100">
                        <div className="col-md-12 wow fadeInUp">
                            <div className="contact-map">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.1812836849363!2d144.95343106869794!3d-37.81739907631358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4dd5a05d97%3A0x3e64f855a564844d!2s121+King+St%2C+Melbourne+VIC+3000%2C+Australia!5e0!3m2!1sen!2sin!4v1562916623921!5m2!1sen!2sin"
                                    height="500" style={{ border: "0", width: "100%" }} allowFullScreen=""></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
