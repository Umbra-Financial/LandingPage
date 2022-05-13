import React, {useEffect} from 'react'
import { Link } from "react-router-dom";

export default function Team() {

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
                                <h1 className="sub-banner-title">Team</h1>
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li>Team</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="team-part skyblue bg-pattern pt-100 pb-55">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 wow fadeInUp">
                            <div className="section-heading text-center pb-65">
                                <label className="sub-heading">Meet our Team</label>
                                <h2 className="heading-title">Our Team</h2>
                                <p className="heading-des">Is your business interested in getting involved with
                                    blockchain? Our experts will offer valuable
                                    advice and strategies to help your business venture into the digital asset
                                    ecosystem.
                                    Here are the brains behind the operation, our experts.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 pb-45 wow fadeInRight">
                            <div className="team-box flex-align">
                                <div className="team-img">
                                    <a href="https://www.linkedin.com/in/noahwardell/" target="_blank">
                                        <img src="assets/images/noah_wardell.jpg" alt="Noah Wardell (CEO)"/></a>
                                </div>
                                <div className="team-des">
                                    <a href="https://www.linkedin.com/in/noahwardell/" target="_blank" className="member-name">Noah
                                        Wardell (CEO)</a>
                                    <p className="member-des">Experienced Business Executive with many years of crucial
                                        tech knowledge relating to Crypto Currency and diffrent Blockchain Technologies.
                                        In charge of general business managment for Umbra</p>
                                    <ul className="pt-15">
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 pb-45 wow fadeInLeft">
                            <div className="team-box flex-align">
                                <div className="team-img">
                                    <a href="https://www.linkedin.com/in/dominickbello/" target="_blank">
                                        <img src="assets/images/dominick_bello.jpg"  alt="Dominick Bello (COO)"/></a>
                                </div>
                                <div className="team-des">
                                    <a href="https://www.linkedin.com/in/dominickbello/" target="_blank" className="member-name">Dominick
                                        Bello (COO)</a>
                                    <p className="member-des">Crypto Enthusiast with specialized knowledge in
                                        Decentralized Finance and manages the daily operations of Umbra Finance</p>
                                    <ul className="pt-15">
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 pb-45 wow fadeInLeft">
                            <div className="team-box flex-align">
                                <div className="team-img">
                                    <a href="https://www.linkedin.com/in/joseph-scalera-87a778205/" target="_blank">
                                        <img src="assets/images/joseph_scalera.jpg" target="_blank" alt="Joseph Scalera (CTO)"/></a>
                                </div>
                                <div className="team-des">
                                    <a href="https://www.linkedin.com/in/joseph-scalera-87a778205/"
                                       className="member-name">Joseph Scalera (CTO)</a>
                                    <p className="member-des">Tech Entrepreneur and Full Stack Developer with a focus on
                                        designing distributed systems and cloud infrastructure. I oversee the
                                        technological operations of Umbra</p>
                                    <ul className="pt-15">
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 pb-45 wow fadeInLeft">
                            <div className="team-box flex-align">
                                <div className="team-img">
                                    <a href="https://www.linkedin.com/in/jamesgreagan/" target="_blank">
                                        <img src="assets/images/james_reagan.jpg" alt="James Reagan (CFO)"/></a>
                                </div>
                                <div className="team-des">
                                    <a href="https://www.linkedin.com/in/jamesgreagan/" target="_blank" className="member-name">James
                                        Reagan (CFO)</a>
                                    <p className="member-des">An avid crypto investor and hobbyist since 2016. Focuses
                                        on Financial management and business operations at Umbra</p>
                                    <ul className="pt-15">
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 pb-45 wow fadeInRight">
                            <div className="team-box flex-align">
                                <div className="team-img">
                                    <a href="https://www.linkedin.com/in/jaydip-bhingradiya-5a34a4ab/" target="_blank">
                                        <img src="assets/images/jaydip_bhingradiya.jpg" alt="Jaydip Bhingradiya"/></a>
                                </div>
                                <div className="team-des">
                                    <a href="https://www.linkedin.com/in/jaydip-bhingradiya-5a34a4ab/" target="_blank"
                                       className="member-name">Jaydip Bhingradiya (Lead Developer)</a>
                                    <p className="member-des">Full stack developer with more than 6+ years experience
                                        with different development technologies. Handles project devlopment at Umbra</p>
                                    <ul className="pt-15">
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
