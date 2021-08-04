import React, {Component, useState,useEffect} from 'react';
import axios from 'axios';

const Team = () => {
    const [image_neg,setImage_neg] = useState([]);
    const [image_hoyor,setImage_hoyor] = useState([]);
    const [image_guraw,setImage_guraw] = useState([]);
    const [teams_garchig,setTeams_garchig] = useState([]);
    const [teams_tailbar,setTeams_tailbar] = useState([]);
    useEffect(() => {
        axios
        // .get("http://localhost/ail-admin/api/v1/Toon_vzvvlelt_zurag")
        .get(`${process.env.REACT_APP_API_URL}api/v1/Toon_vzvvlelt_zurag`)
        .then((res) => {
            setImage_neg(res.data.data);
        })
        .catch((err) => {
            console.log(err);
        })
    });
    useEffect(() => {
        axios
        .get(`${process.env.REACT_APP_API_URL}api/v1/Toon_vzvvlelt_zurag`)
        .then((res) => {
            setImage_hoyor(res.data.data);
        })
        .catch((err) => {
            console.log(err);
        })
    });
    useEffect(() => {
        axios
        .get(`${process.env.REACT_APP_API_URL}api/v1/Toon_vzvvlelt_zurag`)
        .then((res) => {
            setImage_guraw(res.data.data);
        })
        .catch((err) => {
            console.log(err);
        })
    });
    useEffect(() => {
        axios
        .get(`${process.env.REACT_APP_API_URL}api/v1/Toon_vzvvlelt_zurag`)
        .then((res) => {
            setTeams_garchig(res.data.data);
        })
        .catch((err) => {
            console.log(err);
        })
    });
    useEffect(() => {
        axios
        .get(`${process.env.REACT_APP_API_URL}api/v1/Toon_vzvvlelt_zurag`)
        .then((res) => {
            setTeams_tailbar(res.data.data);
        })
        .catch((err) => {
            console.log(err);
        })
    });
    return (
        <section id="fun-fact" className="eg-fun-fact-section position-relative">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="eg-funfact-content clearfix position-relative">
                        <div className="eg-fun-fact-mockup wow fadeFromLeft" data-wow-delay="300ms" data-wow-duration="1500ms">
                            <div className="main-mockup">
                            {image_neg.map((image_neg) => (
                                <img src={`${process.env.REACT_APP_API_URL}/storage/app/media${image_neg.image_neg}`} alt=""/>
                            ))}
                            {image_hoyor.map((image_hoyor) => (
                                <img src={`${process.env.REACT_APP_API_URL}/storage/app/media${image_hoyor.image_hoyor}`} alt=""/>
                            ))}                            </div>
                            <div className="fn-shape fn-shape-item1" data-parallax='{"y" : 50}'>
                            {image_guraw.map((image_guraw) => (
                                <img src={`${process.env.REACT_APP_API_URL}/storage/app/media${image_guraw.image_guraw}`} alt=""/>
                            ))}                              </div>
                            <div className="fn-shape fn-shape-item2" data-parallax='{"y" : 60}'>
                            {image_guraw.map((image_guraw) => (
                                <img src={`${process.env.REACT_APP_API_URL}/storage/app/media${image_guraw.image_guraw}`} alt=""/>
                            ))}                             </div>
                            <div className="fn-shape fn-shape-item3" data-parallax='{"x" : -50}'>
                                <img src="assets/img/app-landing/shape/fc1.png" alt=""/>
                            </div>
                            <div className="fn-shape fn-shape-item4" data-parallax='{"x" : -40}'>
                                <img src="assets/img/app-landing/shape/fc2.png" alt=""/>
                            </div>
                        </div>
                        <div className="eg-funfact-text float-right wow fadeFromRight" data-wow-delay="300ms" data-wow-duration="1500ms">
                            <div className="eight-section-title appeight-headline pera-content text-left">
                                {/* <span className="eg-title-tag"> Fun facts
                                    <i className="square-shape"><i></i><i></i><i></i><i></i></i></span> */}
                                    {/* <h2>We have some awesome
                                        <span>funfacts for clients.</span></h2> */}
                                        {teams_garchig.map((teams_garchig) => (
                                <h2 key={teams_garchig.teams_garchig}>{teams_garchig.teams_garchig}
                                </h2>
                            ))}
                            {teams_tailbar.map((teams_tailbar) => (
                                <p key={teams_tailbar.teams_tailbar}>{teams_tailbar.teams_tailbar}</p>
                            ))}                                    </div>
                                    <div className="fun-fact-counter position-relative clearfix">
                                        <div className="eg-counter-number pera-content text-center">
                                            <span className="odometer" data-count="20">00</span><strong>+</strong>
                                            <p>Awesome
                                            Integratios</p>
                                        </div>
                                        <div className="eg-counter-number pera-content text-center">
                                            <span className="odometer" data-count="2000">00</span><strong>+</strong>
                                            <p>Active
                                            users</p>
                                        </div>
                                        <div className="eg-counter-number pera-content text-center">
                                            <span className="odometer" data-count="5000">00</span><strong>+</strong>
                                            <p>Downloads
                                            done</p>
                                        </div>
                                        {/* <div className="eg-counter-number pera-content text-center">
                                            <span className="odometer" data-count="2500">00</span><strong>+</strong>
                                            <p>5 stars
                                            ratings</p>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="fn-bg-shape position-absolute"><img src="assets/img/app-landing/shape/fns1.png" alt=""/></div> */}
            </section>
    );
}

export default Team;