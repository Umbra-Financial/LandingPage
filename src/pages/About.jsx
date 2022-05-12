import React from 'react'
import {Link} from "react-router-dom";

export default function About() {
    return (
        <>

            <section className="sub-page-banner parallax" id="banner">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-banner text-center">
                                <h1 className="sub-banner-title">About Us</h1>
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li>About us</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-main skyblue ptb-100">
                <div className="container">
                    <div className="row">
                        <div
                            className="col-lg-6 col-md-12 text-center flex-align justify-center order-r-2 wow fadeInLeft">
                            <div className="work-box w-100">
                                <img src="assets/images/how_process.png" className="" alt="Work Process"/>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 flex-align order-r-1 mb-r-30 wow fadeInRight">
                            <div className="work-box">
                                <h3 className="work-process-title pb-25">Why would I want to invest in Blockchain
                                    technology?</h3>
                                <p className="work-des pb-20">Blockchain technology is revolutionizing data transfer and
                                    the transfer of value on the global internet.
                                    To stay relevant, it's important to engage and understand the latest blockchain
                                    developments to take advantage of lucrative markets.
                                    Understanding Blockchain technology and how it can be used, will help you surpass
                                    your competition and increase revenue for your portfolio.
                                </p>

                                <ul className="check-list">
                                    <li><span><i className="fa fa-check" aria-hidden="true"></i></span>
                                        <p>Portfolio Diversification</p></li>
                                    <li><span><i className="fa fa-check" aria-hidden="true"></i></span>
                                        <p>Business Solutions</p></li>
                                    <li><span><i className="fa fa-check" aria-hidden="true"></i></span>
                                        <p>Fund Raising and Seed Capital</p></li>
                                    <li><span><i className="fa fa-check" aria-hidden="true"></i></span>
                                        <p>New Unique Investment strategies</p></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-main darkblue ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 flex-align mb-r-30 wow fadeInLeft">
                            <div className="work-box">
                                <h3 className="work-process-title pb-25">Our Mission</h3>
                                <p className="work-des"> Umbra Financial strives to lighten the dark mystery of the
                                    cryptocurrency
                                    world through Encouraging, Educating, and Connecting our clients on this
                                    emerging industry and asset class.</p>
                                <p className="work-des mt-3">Cryptocurrency has become a prominent up and coming space
                                    in tech in recent years. It is an
                                    ever-expanding sector of tech which is often daunting to newcomers. Umbra aims to
                                    facilitate a
                                    learning curve for those interested in joining the cryptocurrency ecosystem.</p>
                                <p className="work-des mt-3">Greatness is made from a collection of entities, just as
                                    our community is assembled to
                                    expedite the growth of learning to propel everyone further in their journey of the
                                    cryptocurrency
                                    market. Through cooperative methods we connect you with individuals just like you to
                                    expedite
                                    the knowledge of everyone around us.</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 text-center flex-align justify-center wow fadeInRight">
                            <div className="work-box video-box">
                                <img src="assets/images/our_mission.png" alt="Work Process"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="feature-main skyblue ptb-100">
                <div className="container">
                    <div className="row">
                        <div
                            className="col-lg-6 col-md-12 text-center flex-align justify-center order-r-2 wow fadeInLeft">
                            <div className="work-box">
                                <img src="assets/images/why_choose_us.png" alt="Work Process"/>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 flex-align order-r-1 mb-r-30 wow fadeInRight">
                            <div className="work-box">
                                <h3 className="work-process-title pb-25">Why Choose Us?</h3>
                                <p className="work-des pb-20">Umbra Financial strives to lighten the dark mystery of the
                                    cryptocurrency world through
                                    Encouraging, Educating, and Connecting our clients on this emerging industry and
                                    asset class.</p>

                                <ul className="check-list">
                                    <li><span><i className="fa fa-check" aria-hidden="true"></i></span>
                                        <p>Cryptocurrency has become a prominent up and coming space in tech in recent
                                            years. It is an
                                            ever-expanding sector of tech which is often daunting to newcomers.</p></li>
                                    <li><span><i className="fa fa-check" aria-hidden="true"></i></span>
                                        <p>Umbra aims to facilitate a
                                            learning curve for those interested in joining the cryptocurrency
                                            ecosystem.</p></li>
                                    <li><span><i className="fa fa-check" aria-hidden="true"></i></span>
                                        <p>Greatness is made from a collection of entities, just as our community is
                                            assembled to
                                            expedite the growth of learning to propel everyone further in their journey
                                            of the cryptocurrency
                                            market. </p></li>
                                    <li><span><i className="fa fa-check" aria-hidden="true"></i></span>
                                        <p>Through cooperative methods we connect you with individuals just like you to
                                            expedite
                                            the knowledge of everyone around us.</p></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
