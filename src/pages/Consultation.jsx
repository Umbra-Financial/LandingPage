import React from 'react'
import { Link } from "react-router-dom";
import {useEffect} from "react";

export default function Consultation() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <section className="sub-page-banner parallax" id="banner">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 wow fadeInUp">
                            <div className="page-banner text-center">
                                <h1 className="sub-banner-title">Consultation</h1>
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
                                <p className="heading-des">Interested in learning the cryptocurrency ecosystem for the
                                    first time?
                                    Our experts are here to
                                    assist you and navigate you through the ins and outs of cryptocurrency.
                                </p>
                            </div>
                            <ul className="contact-detail">
                                <li><i className="fa fa-envelope" aria-hidden="true"></i> <a
                                    href="mailto:info@example.com">
                                    Email contact@umbra.financial for any inquiries
                                </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6 wow fadeInRight">
                            <h3 className="blog-comment-heading">Leave a message here</h3>
                            <form className="" id="searchForm" method="post" action="#">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control" id="name" placeholder="Name*"
                                                   required=""/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control" id="email" placeholder="Email*"
                                                   required=""/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control" id="subject"
                                                   placeholder="Subject*" required=""/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control" id="phone" placeholder="Phone*"
                                                   required=""/>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <textarea className="form-control" placeholder="Massage*" id="message"
                                                      required></textarea>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <button className="btn" id="sendEmail">submit</button>
                                    </div>
                                    <div className="col-md-12" id="emailBox">

                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
