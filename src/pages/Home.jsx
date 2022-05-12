import React from 'react'
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>
            <section className="home-banner parallax" id="banner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 position-u flex-align wow fadeInLeft">
                            <div className="banner-contain">
                                <h1 className="banner-heading">Digital Asset & Blockchain Consulting</h1>
                                <p className="banner-des">Umbra Financial offers consulting services for everyone.
                                    Ranging from enterprise to retail
                                    investors, we are here to offer key input and advice relating to blockchain
                                    technology</p>
                                <Link to="/consultation" className="btn">Get Consultation</Link>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 position-u wow fadeInRight">
                            <div className="banner-img">
                                <img src="assets/images/home_image.png" alt="banner"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="work-part darkblue ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 wow fadeInUp">
                            <div className="section-heading text-center pb-65">
                                <label className="sub-heading">What is Umbra Financial</label>
                                <h2 className="heading-title">What is Crypto?</h2>
                                <p className="heading-des">Crypto Currency is a Digital Asset logged and backed by a
                                    trustless and decentralized ledger network.
                                    This technology allows payments, transactions, and data transfer, to be done in a
                                    permanant, redudant, and publically verifiable way.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 text-center flex-align justify-center wow fadeInLeft">
                            <div className="work-box">
                                <img src="assets/images/how_it_works.png" className="" alt="Work Process"/>
                            </div>
                        </div>
                        <div className="col-md-6 flex-align wow fadeInRight">
                            <div className="work-box">
                                <h3 className="work-process-title pb-25">Why is Crypto is Worth Anything?</h3>
                                <p className="work-des pb-20">A good way to think about most cryptocurrency is by
                                    calling it a commodity. Just like
                                    any other commodity, It derives its value from people buying and selling on the open
                                    market. Some crypto are worth more than others, and this is because each coin has
                                    its
                                    own unique price and utility within it's ecosystem.
                                </p>

                                <ul className="check-list">
                                    <li><span><i className="fa fa-check" aria-hidden="true"></i></span>
                                        <p> Just like Gold or Silver, most crypto currency has a finite amount of
                                            coins that can be generated.</p></li>
                                    <li><span><i className="fa fa-check" aria-hidden="true"></i></span>
                                        <p> Each individual coin has scarcity and
                                            balances its price through supply and demand.</p></li>
                                    <li><span><i className="fa fa-check" aria-hidden="true"></i></span>
                                        <p> Crypto Currency has many options that standard finances simply lack. Born on
                                            the internet,
                                            it has access to Trustless Financial Tools that normal financial markets
                                            lack.</p></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="feature-part skyblue bg-pattern pt-100 pb-10">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 wow fadeInUp">
                            <div className="section-heading text-center pb-65">
                                <label className="sub-heading">Umbra Financial Usecase</label>
                                <h2 className="heading-title">Services Offered</h2>
                                <p className="heading-des">Take control of new emerging Crypto Currency market and
                                    Blockchain Technology to support your financial growth.
                                    Ranging from enterprise to retail
                                    investors, Umbra is here to offer key input, development, and advice in all things
                                    relating to Blockchain Technology.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 wow fadeInUp pb-80">
                            <div className="feature-box">
                                <div className="feature-icon">
                                    <img src="assets/images/feature-1.png" alt="Safe & Secure"/>
                                </div>
                                <div className="feature-contain pt-25">
                                    <Link to="/services" className="feature-title">Crypto Coaching</Link>
                                    <p className="feature-des">We offer Cryptocurrency coaching for Private firms and
                                        individuals. Our coaching ranges from the basics of setting up a
                                        secure wallet to competitive solutions and approaches for your
                                        blockchain needs.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 wow fadeInUp pb-80">
                            <div className="feature-box">
                                <div className="feature-icon">
                                    <Link to="/services"><img src="assets/images/feature-2.png" alt="Early Bonus"/></Link>
                                </div>
                                <div className="feature-contain pt-25">
                                    <Link to="/services" className="feature-title">Blockchain Use cases</Link>
                                    <p className="feature-des">Interested in integrating blockchain into your business?
                                        We are
                                        here to assist on how blockchain can change your everyday life.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 wow fadeInUp pb-80">
                            <div className="feature-box">
                                <div className="feature-icon">
                                    <Link to="/services"><img src="assets/images/feature-3.png" alt="Univarsal Access"/></Link>
                                </div>
                                <div className="feature-contain pt-25">
                                    <Link to="/services" className="feature-title pb-15">Custom Business Solutions</Link>
                                    <p className="feature-des">We offer custom devlopment solutions for your business in
                                        regards to anything
                                        Blockchain or Crypto Currency related. We also offer development resources for
                                        standard tech related devlopment. </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 wow fadeInUp pb-80">
                            <div className="feature-box">
                                <div className="feature-icon">
                                    <Link to="/services"><img src="assets/images/feature-3.png" alt="Univarsal Access"/></Link>
                                </div>
                                <div className="feature-contain pt-25">
                                    <Link to="/services" className="feature-title">Custom Token Creation</Link>
                                    <p className="feature-des">We offer Token Creation services to private firms and
                                        individuals. Together we can curate the coin for you with
                                        help from our experts.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 wow fadeInUp pb-80">
                            <div className="feature-box">
                                <div className="feature-icon">
                                    <Link to="/services"><img src="assets/images/feature-5.png" alt="Low Cost"/></Link>
                                </div>
                                <div className="feature-contain pt-25">
                                    <Link to="/services" className="feature-title pb-15">Investment Strategy
                                        Analysis</Link>
                                    <p className="feature-des"> Our experts will assist you in anyalyzing your crypto
                                        investment
                                        strategy to help you customize your risk profile.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 wow fadeInUp pb-80">
                            <div className="feature-box">
                                <div className="feature-icon">
                                    <Link to="/services"><img src="assets/images/feature-4.png" alt="Secure Storage"/></Link>
                                </div>
                                <div className="feature-contain pt-25">
                                    <Link to="/services" className="feature-title">Yield Farming Strategy Analysis</Link>
                                    <p className="feature-des">Our experts will assist you through investment
                                        philosophies and help tailor a customized investment
                                        strategy depending on your needs and risk profile.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
