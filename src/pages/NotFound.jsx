import React, {useEffect} from "react";
import {Link} from "react-router-dom";

function NotFound() {

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
                                <h4 className="sub-banner-title">Page not found</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default NotFound;
