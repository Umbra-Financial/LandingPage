import React, {useEffect} from 'react'
import { Link } from "react-router-dom";

export default function Projects() {

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
                                <h1 className="sub-banner-title">Project</h1>
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li>Project</li>
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
                                <label className="sub-heading">GET TO KNOW OUR PROJECTS</label>
                                <h2 className="heading-title">Our Projects</h2>
                                <p className="heading-des">Cryptocurrency has become a prominent up and coming space in
                                    tech in recent years. It is an
                                    ever-expanding sector of tech which is often daunting to newcomers. Umbra aims to
                                    facilitate a
                                    learning curve for those interested in joining the cryptocurrency ecosystem.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 pb-45 wow fadeInLeft">
                            <div className="team-box flex-align">
                                <div className="team-img">
                                    <a href="https://wyobiz.wyo.gov/Business/FilingDetails.aspx?eFNum=048087238023029128018231252110151199176011041045">
                                        <img src="assets/images/project_dao.png" alt="team member"/></a>
                                </div>
                                <div className="team-des">
                                    <a href="https://wyobiz.wyo.gov/Business/FilingDetails.aspx?eFNum=048087238023029128018231252110151199176011041045"
                                       className="member-name">Umbra DAO</a>
                                    <p className="member-des">Umbra DAO - Governance within Umbra Financial (To be
                                        released)</p>
                                    <ul className="pt-15">
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 pb-45 wow fadeInRight">
                            <div className="team-box flex-align">
                                <div className="team-img">
                                    <a href="https://blog.umbra.financial/">
                                        <img src="assets/images/project_blog.png" alt="Umbra Blog"/></a>
                                </div>
                                <div className="team-des">
                                    <a href="https://blog.umbra.financial/" className="member-name">Umbra Blog </a>
                                    <p className="member-des">Umbra Blog - Crypto News Consolidation Blog</p>
                                    <ul className="pt-15">
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 pb-45 wow fadeInLeft">
                            <div className="team-box flex-align">
                                <div className="team-img">
                                    <a href="https://github.com/phantasma-io/phantasma-ts">
                                        <img src="assets/images/phantasma.png" alt="Phantasma.io"/></a>
                                </div>
                                <div className="team-des">
                                    <a href="https://github.com/phantasma-io/phantasma-ts"
                                       className="member-name">Phantasma.io</a>
                                    <p className="member-des">Phantasma.io - Blockchain TypeScript SDK, Migration
                                        Contract and Dapp</p>
                                    <ul className="pt-15">
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 pb-45 wow fadeInRight">
                            <div className="team-box flex-align">
                                <div className="team-img">
                                    <a href="https://abracadabra.money/">
                                        <img src="assets/images/project_abracadabra.png" alt="Abracadabra.money"/></a>
                                </div>
                                <div className="team-des">
                                    <a href="https://abracadabra.money/" className="member-name">Abracadabra.money</a>
                                    <p className="member-des">Abracadabra.money - Leverage/Cauldron JS Notification Bot
                                    </p>
                                    <ul className="pt-15">
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 pb-45 wow fadeInRight">
                            <div className="team-box flex-align">
                                <div className="team-img">
                                    <a href="https://github.com/TheTwilightZone/Twilight-ZONE-Contracts">
                                        <img src="assets/images/project_twilightzone.png" alt="TwilightZone.Finance"/></a>
                                </div>
                                <div className="team-des">
                                    <a href="https://github.com/TheTwilightZone/Twilight-ZONE-Contracts"
                                       className="member-name">TwilightZone.Finance</a>
                                    <p className="member-des">TwilightZone.Finance - Smart Contract Development
                                    </p>
                                    <ul className="pt-15">
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 pb-45 wow fadeInRight">
                            <div className="team-box flex-align">
                                <div className="team-img">
                                    <a href="https://www.jtvcollective.io/">
                                        <img src="assets/images/project_jtv.png" alt="JTVCollection"/></a>
                                </div>
                                <div className="team-des">
                                    <a href="https://www.jtvcollective.io/" className="member-name">JTVCollection</a>
                                    <p className="member-des">JTVCollection - NFT Comic Style Gamel</p>
                                    <ul className="pt-15">
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 pb-45 wow fadeInRight">
                            <div className="team-box flex-align">
                                <div className="team-img">
                                    <a href="https://gnosis-safe.io/">
                                        <img src="assets/images/project_gnosis.jpg" alt="Organized DAO’s "/></a>
                                </div>
                                <div className="team-des">
                                    <a href="https://gnosis-safe.io/" className="member-name">Organized DAO’s </a>
                                    <p className="member-des">Organized DAO’s using Gnosis multi-signature wallets
                                    </p>
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
