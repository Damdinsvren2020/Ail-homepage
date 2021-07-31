import React, {Component, useState,useEffect} from 'react';
import axios from 'axios';
const Gishvvd = () => {
    const [gishvvd_title,setGishvvd_title] = useState([]);
    const [gishvvd_description,setGishvvd_description] = useState([]);
    useEffect(() => {
        axios
        .get("http://localhost/ail-admin/api/v1/teams_gishvvd_garchig")
        .then((res) => {
            setGishvvd_title(res.data.data);
            console.log(res.data.data);
        })
        .catch((err) => {
            console.log(err);
        })
    });
    useEffect(() => {
        axios
        .get("http://localhost/ail-admin/api/v1/teams_gishvvd_garchig")
        .then((res) => {
            setGishvvd_description(res.data.data);
            console.log(res.data.data);
        })
        .catch((err) => {
            console.log(err);
        })
    });
    return (
        <section id="ei-team" className="ei-team-section">
        <div className="container">
            <div className="eight-section-title appeight-headline pera-content text-center">
                <span className="eg-title-tag">Expert Team <i className="square-shape"><i></i><i></i><i></i><i></i></i></span>
                {gishvvd_title.map((gishvvd_title) => (
                                <h2 key={gishvvd_title.gishvvd_title}>{gishvvd_title.gishvvd_title}
                                </h2>
                            ))}
                            {gishvvd_description.map((gishvvd_description) => (
                                <p key={gishvvd_description.gishvvd_description}>{gishvvd_description.gishvvd_description}</p>
                            ))}
            </div>
            <div id="ei-team-slide" className="ei-team-content owl-carousel">
                <div className="ei-team-pic-text wow fadeFromLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                    <div className="ei-team-img position-relative">
                        <div className="team-mem-img-ei text-center position-relative">
                            <img src="assets/img/app-landing/team/tm1.png" alt=""/>
                            <span className="mshape-bg shape-bg1"><img src="assets/img/app-landing/team/msbg1.png" alt=""/></span>
                            <span className="mshape-bg shape-bg2"><img src="assets/img/app-landing/team/msbg2.png" alt=""/></span>
                        </div>
                        <div className="ei-team-social">
                            <a href="#"><i className="fab fa-facebook-f "></i></a>
                            <a href="#"><i className="fab fa-behance"></i></a>
                            <a href="#"><i className="fab fa-linkedin"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                        </div>
                    </div>
                    <div className="ei-team-text appeight-headline text-center pera-content">
                        <h3>Anita Bath</h3>
                        <p>Android Developer</p>
                    </div>
                </div>
                <div className="ei-team-pic-text wow fadeFromLeft" data-wow-delay="300ms" data-wow-duration="1500ms">
                    <div className="ei-team-img position-relative">
                        <div className="team-mem-img-ei text-center position-relative">
                            <img src="assets/img/app-landing/team/tm2.png" alt=""/>
                            <span className="mshape-bg shape-bg1"><img src="assets/img/app-landing/team/msbg1.png" alt=""/></span>
                            <span className="mshape-bg shape-bg2"><img src="assets/img/app-landing/team/msbg2.png" alt=""/></span>
                        </div>
                        <div className="ei-team-social">
                            <a href="#"><i className="fab fa-facebook-f "></i></a>
                            <a href="#"><i className="fab fa-behance"></i></a>
                            <a href="#"><i className="fab fa-linkedin"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                        </div>
                    </div>
                    <div className="ei-team-text appeight-headline text-center pera-content">
                        <h3>Bea Mine</h3>
                        <p>iOS Developer</p>
                    </div>
                </div>
                <div className="ei-team-pic-text wow fadeFromLeft" data-wow-delay="600ms" data-wow-duration="1500ms">
                    <div className="ei-team-img position-relative">
                        <div className="team-mem-img-ei text-center position-relative">
                            <img src="assets/img/app-landing/team/tm3.png" alt=""/>
                            <span className="mshape-bg shape-bg1"><img src="assets/img/app-landing/team/msbg1.png" alt=""/></span>
                            <span className="mshape-bg shape-bg2"><img src="assets/img/app-landing/team/msbg2.png" alt=""/></span>
                        </div>
                        <div className="ei-team-social">
                            <a href="#"><i className="fab fa-facebook-f "></i></a>
                            <a href="#"><i className="fab fa-behance"></i></a>
                            <a href="#"><i className="fab fa-linkedin"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                        </div>
                    </div>
                    <div className="ei-team-text appeight-headline text-center pera-content">
                        <h3>Skye Blue</h3>
                        <p>Windows Developer</p>
                    </div>
                </div>
                <div className="ei-team-pic-text">
                    <div className="ei-team-img position-relative">
                        <div className="team-mem-img-ei text-center position-relative">
                            <img src="assets/img/app-landing/team/tm1.png" alt=""/>
                            <span className="mshape-bg shape-bg1"><img src="assets/img/app-landing/team/msbg1.png" alt=""/></span>
                            <span className="mshape-bg shape-bg2"><img src="assets/img/app-landing/team/msbg2.png" alt=""/></span>
                        </div>
                        <div className="ei-team-social">
                            <a href="#"><i className="fab fa-facebook-f "></i></a>
                            <a href="#"><i className="fab fa-behance"></i></a>
                            <a href="#"><i className="fab fa-linkedin"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                        </div>
                    </div>
                    <div className="ei-team-text appeight-headline text-center pera-content">
                        <h3>Staum Clowd</h3>
                        <p>Android Developer</p>
                    </div>
                </div>
                <div className="ei-team-pic-text">
                    <div className="ei-team-img position-relative">
                        <div className="team-mem-img-ei text-center position-relative">
                            <img src="assets/img/app-landing/team/tm2.png" alt=""/>
                            <span className="mshape-bg shape-bg1"><img src="assets/img/app-landing/team/msbg1.png" alt=""/></span>
                            <span className="mshape-bg shape-bg2"><img src="assets/img/app-landing/team/msbg2.png" alt=""/></span>
                        </div>
                        <div className="ei-team-social">
                            <a href="#"><i className="fab fa-facebook-f "></i></a>
                            <a href="#"><i className="fab fa-behance"></i></a>
                            <a href="#"><i className="fab fa-linkedin"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                        </div>
                    </div>
                    <div className="ei-team-text appeight-headline text-center pera-content">
                        <h3>Dave Allippa</h3>
                        <p>iOS Developer</p>
                    </div>
                </div>
                <div className="ei-team-pic-text">
                    <div className="ei-team-img position-relative">
                        <div className="team-mem-img-ei text-center position-relative">
                            <img src="assets/img/app-landing/team/tm3.png" alt=""/>
                            <span className="mshape-bg shape-bg1"><img src="assets/img/app-landing/team/msbg1.png" alt=""/></span>
                            <span className="mshape-bg shape-bg2"><img src="assets/img/app-landing/team/msbg2.png" alt=""/></span>
                        </div>
                        <div className="ei-team-social">
                            <a href="#"><i className="fab fa-facebook-f "></i></a>
                            <a href="#"><i className="fab fa-behance"></i></a>
                            <a href="#"><i className="fab fa-linkedin"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                        </div>
                    </div>
                    <div className="ei-team-text appeight-headline text-center pera-content">
                        <h3>Mark Ateer</h3>
                        <p>Windows Developer</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );   
}

export default Gishvvd;