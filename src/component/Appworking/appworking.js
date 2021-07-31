import React, {Component} from 'react';
const Appworking = () => {
    return (
        <section id="eg-how-work" className="eg-how-work-section position-relative">
            <div className="how-work-bg-shape position-absolute"><img src="assets/img/app-landing/shape/hws.png" alt=""/></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="ei-how-work-content-item wow fadeFromUp" data-wow-delay="300ms" data-wow-duration="1500ms">
                            <div className="eight-section-title appeight-headline pera-content text-left">
                                <span className="eg-title-tag">
                                    How this app is working?<i className="square-shape"><i></i><i></i><i></i><i></i></i>
                                </span>
                                <h2>This app is working by
                                    <span>some steps!</span>
                                </h2>
                            </div>
                            <div id="how-workscrollbar" className="how-work-scroller">
                                <div className="eg-how-work-content">
                                    <div className="eg-how-work-icon-text position-relative">
                                        <span className="scroller-no">1</span>
                                        <div className="eg-how-work-icon float-left text-center">
                                            <i className="flaticon-verified-user"></i>
                                        </div>
                                        <div className="eg-how-work-text appeight-headline pera-content">
                                            <h3>Make a profile</h3>
                                            <p>As a app web crawler expert, I help organizations adjusting.</p>
                                        </div>
                                    </div>
                                    <div className="eg-how-work-icon-text position-relative">
                                        <span className="scroller-no">2</span>
                                        <div className="eg-how-work-icon float-left text-center">
                                            <i className="flaticon-download"></i>
                                        </div>
                                        <div className="eg-how-work-text appeight-headline pera-content">
                                            <h3>Download it for Free</h3>
                                            <p>As a app web crawler expert, I help organizations adjusting.</p>
                                        </div>
                                    </div>
                                    <div className="eg-how-work-icon-text position-relative">
                                        <span className="scroller-no">3</span>
                                        <div className="eg-how-work-icon float-left text-center">
                                            <i className="flaticon-corporate-identity"></i>
                                        </div>
                                        <div className="eg-how-work-text appeight-headline pera-content">
                                            <h3>Input Identity</h3>
                                            <p>As a app web crawler expert, I help organizations adjusting.</p>
                                        </div>
                                    </div>
                                    <div className="eg-how-work-icon-text position-relative">
                                        <span className="scroller-no">4</span>
                                        <div className="eg-how-work-icon float-left text-center">
                                            <i className="flaticon-text"></i>
                                        </div>
                                        <div className="eg-how-work-text appeight-headline pera-content">
                                            <h3>Write Details</h3>
                                            <p>As a app web crawler expert, I help organizations adjusting.</p>
                                        </div>
                                    </div>
                                    <div className="eg-how-work-icon-text position-relative">
                                        <span className="scroller-no">5</span>
                                        <div className="eg-how-work-icon float-left text-center">
                                            <i className="flaticon-idea"></i>
                                        </div>
                                        <div className="eg-how-work-text appeight-headline pera-content">
                                            <h3>Now Use It</h3>
                                            <p>As a app web crawler expert, I help organizations adjusting.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="how-work-mockup position-relative wow fadeFromUp" data-wow-delay="600ms" data-wow-duration="1500ms">
                            <div className="hw-mockup-img">
                                <img src="assets/img/app-landing/mockup/hw.gif" alt=""/>
                            </div>
                            <div className="hw-shape1 position-absolute" data-parallax='{"x" : 40}'><img src="assets/img/app-landing/shape/fc1.png" alt=""/></div>
                            <div className="hw-shape2 position-absolute" data-parallax='{"x" : -30}'><img src="assets/img/app-landing/shape/fc2.png" alt=""/></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>    
    );
}

export default Appworking;