import React, {useEffect} from 'react'
import { Link } from "react-router-dom";

export default function Services() {
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
                                    <img src="assets/images/feature-1.png" alt="Safe & Secure"/>
                                </div>
                                <div className="feature-contain pt-25">
                                    <a href="#" className="feature-title pb-15">Crypto Coaching</a>
                                    <p className="feature-des">We offer Cryptocurrency coaching for Private firms and
                                        individuals. Our
                                        coaching ranges from the basics of setting up a secure wallet to
                                        competitive solutions and approaches for your blockchain needs</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 wow fadeInUp pb-80">
                            <div className="feature-box">
                                <div className="feature-icon">
                                    <a href="#"><img src="assets/images/feature-2.png" alt="Early Bonus"/></a>
                                </div>
                                <div className="feature-contain pt-25">
                                    <a href="#" className="feature-title pb-15">Blockchain Use cases</a>
                                    <p className="feature-des">Interested in integrating blockchain technology into your
                                        business? We
                                        are here to assist on how blockchain technology can change your everyday
                                        life. </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 wow fadeInUp pb-80">
                            <div className="feature-box">
                                <div className="feature-icon">
                                    <a href="#"><img src="assets/images/feature-3.png" alt="Univarsal Access"/></a>
                                </div>
                                <div className="feature-contain pt-25">
                                    <a href="#" className="feature-title pb-15">Custom Business Solutions</a>
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
                                    <a href="#"><img src="assets/images/feature-3.png" alt="Univarsal Access"/></a>
                                </div>
                                <div className="feature-contain pt-25">
                                    <a href="#" className="feature-title pb-15">Custom Token Creation</a>
                                    <p className="feature-des">We offer Token Creation services to private firms and
                                        individuals. Together
                                        we can curate the coin for you with help from our experts. </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 wow fadeInUp pb-80">
                            <div className="feature-box">
                                <div className="feature-icon">
                                    <a href="#"><img src="assets/images/feature-4.png" alt="Secure Storage"/></a>
                                </div>
                                <div className="feature-contain pt-25">
                                    <a href="#" className="feature-title pb-15">Yield Farming Strategy
                                        Analysis
                                    </a>
                                    <p className="feature-des">Our experts will assist you through investment
                                        philosophies and help tailor
                                        a customized investment strategy depending on your needs and risk profile. </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 wow fadeInUp pb-80">
                            <div className="feature-box">
                                <div className="feature-icon">
                                    <a href="#"><img src="assets/images/feature-5.png" alt="Low Cost"/></a>
                                </div>
                                <div className="feature-contain pt-25">
                                    <a href="#" className="feature-title pb-15">Wallet Management and
                                        Security</a>
                                    <p className="feature-des"> Umbra offers a multitude of services to help secure your
                                        digital assets.
                                        We can architect solutions for individuals planning to secure their assets,
                                        as well as solutions such as multi-signature wallets for businesses in
                                        order to ensure their assets are safely held on the blockchain.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 wow fadeInUp pb-80">
                            <div className="feature-box">
                                <div className="feature-icon">
                                    <a href="#"><img src="assets/images/feature-6.png" alt="Several Profit"/></a>
                                </div>
                                <div className="feature-contain pt-25">
                                    <a href="#" className="feature-title pb-15">Crypto Exchange and Wallet
                                        Setup</a>
                                    <p className="feature-des">Keeping your digital assets safe is a crucial part of
                                        investing in
                                        cryptocurrency. Umbra enables our clients with many safe solutions to
                                        suite the needs of our clients.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 wow fadeInUp pb-80">
                            <div className="feature-box">
                                <div className="feature-icon">
                                    <a href="#"><img src="assets/images/feature-6.png" alt="Several Profit"/></a>
                                </div>
                                <div className="feature-contain pt-25">
                                    <a href="#" className="feature-title pb-15">Crypto Related News
                                        Consolidation</a>
                                    <p className="feature-des">Cryptocurrency is an ever changing fast-paced asset
                                        class. At umbra we
                                        stay up to date on the latest happenings of the cryptocurrency ecosystem,
                                        from tax policy to the newest blockchain solutions. This enables us to help
                                        our clients benefit and to stay informed</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 wow fadeInUp pb-80">
                            <div className="feature-box">
                                <div className="feature-icon">
                                    <a href="#"><img src="assets/images/feature-6.png" alt="Several Profit"/></a>
                                </div>
                                <div className="feature-contain pt-25">
                                    <a href="#" className="feature-title pb-15">Solidity Smart Contract
                                        Development and Protocol Development
                                    </a>
                                    <p className="feature-des"> Looking to create your own Protocol? Let us help.
                                        Connect
                                        with one of our representatives today!</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 wow fadeInUp pb-80">
                            <div className="feature-box">
                                <div className="feature-icon">
                                    <a href="#"><img src="assets/images/feature-6.png" alt="Several Profit"/></a>
                                </div>
                                <div className="feature-contain pt-25">
                                    <a href="#" className="feature-title pb-15">Revenue Stream Strategy
                                        Analysis</a>
                                    <p className="feature-des">Customize an investment strategy depending on your needs
                                        and risk
                                        profile. Find out about new potential revenue streams for your portfolio
                                        today.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 wow fadeInUp pb-80">
                            <div className="feature-box">
                                <div className="feature-icon">
                                    <a href="#"><img src="assets/images/feature-5.png" alt="Low Cost"/></a>
                                </div>
                                <div className="feature-contain pt-25">
                                    <a href="#" className="feature-title pb-15">Investment Strategy
                                        Analysis</a>
                                    <p className="feature-des"> Our experts will assist you in anyalyzing your crypto
                                        investment
                                        strategy to help you customize your risk profile.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
