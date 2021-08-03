import React, {Component, useState,useEffect} from 'react';
import axios from 'axios';

const Section = () => {
    const [descriptions,setDescriptions] = useState([]);
    const [title,setTitle] = useState([]);
    const [shaltgaan_neg_garchig,setShaltgaan_neg_garchig] = useState([]);
    const [shaltgaan_neg_tailbar,setShaltgaan_neg_tailbar] = useState([]);
    const [shaltgaan_hoyr_garchig,setShaltgaan_hoyr_garchig] = useState([]);
    const [shaltgaan_hoyr_tailbar,setShaltgaan_hoyr_tailbar] = useState([]);
    const [shaltgaan_guraw_garchig,setShaltgaan_guraw_garchig] = useState([]);
    const [shaltgaan_guraw_tailbar,setShaltgaan_guraw_tailbar] = useState([]);
    const [shaltgaan_duruw_garchig,setShaltgaan_duruw_garchig] = useState([]);
    const [shaltgaan_duruw_tailbar,setShaltgaan_duruw_tailbar] = useState([]);
    useEffect(() => {
        axios
        .get(`${process.env.REACT_APP_API_URL}api/v1/Bidniig_songoh_shaltaan`)
        .then((res) => {
            setDescriptions(res.data.data);
            console.log(res.data.data);
        })
        .catch((err) => {
            console.log(err);
        })
    });
    useEffect(() => {
        axios
        .get(`${process.env.REACT_APP_API_URL}api/v1/Bidniig_songoh_shaltaan`)
        .then((res) => {
            setTitle(res.data.data);
            console.log(res.data.data);
        })
        .catch((err) => {
            console.log(err);
        })
    });
    useEffect(() => {
        axios
        .get(`${process.env.REACT_APP_API_URL}api/v1/shaltgaan_aguulga_neg`)
        .then((res) => {
            setShaltgaan_neg_garchig(res.data.data);
            console.log(res.data.data);
        })
        .catch((err) => {
            console.log(err);
        })
    });
    useEffect(() => {
        axios
        .get(`${process.env.REACT_APP_API_URL}api/v1/shaltgaan_aguulga_neg`)
        .then((res) => {
            setShaltgaan_neg_tailbar(res.data.data);
            console.log(res.data.data);
        })
        .catch((err) => {
            console.log(err);
        })
    });
    useEffect(() => {
        axios
        .get(`${process.env.REACT_APP_API_URL}api/v1/aguulga_hoyr`)
        .then((res) => {
            setShaltgaan_hoyr_garchig(res.data.data);
            console.log(res.data.data);
        })
        .catch((err) => {
            console.log(err);
        })
    });
    useEffect(() => {
        axios
        .get(`${process.env.REACT_APP_API_URL}api/v1/aguulga_hoyr`)
        .then((res) => {
            setShaltgaan_hoyr_tailbar(res.data.data);
            console.log(res.data.data);
        })
        .catch((err) => {
            console.log(err);
        })
    });
    useEffect(() => {
        axios
        .get(`${process.env.REACT_APP_API_URL}api/v1/aguulga_guraw`)
        .then((res) => {
            setShaltgaan_guraw_garchig(res.data.data);
            console.log(res.data.data);
        })
        .catch((err) => {
            console.log(err);
        })
    });
    useEffect(() => {
        axios
        .get(`${process.env.REACT_APP_API_URL}api/v1/aguulga_guraw`)
        .then((res) => {
            setShaltgaan_guraw_tailbar(res.data.data);
            console.log(res.data.data);
        })
        .catch((err) => {
            console.log(err);
        })
    });
    useEffect(() => {
        axios
        .get(`${process.env.REACT_APP_API_URL}api/v1/aguulga_duruw`)
        .then((res) => {
            setShaltgaan_duruw_garchig(res.data.data);
            console.log(res.data.data);
        })
        .catch((err) => {
            console.log(err);
        })
    });
    useEffect(() => {
        axios
        .get(`${process.env.REACT_APP_API_URL}api/v1/aguulga_duruw`)
        .then((res) => {
            setShaltgaan_duruw_tailbar(res.data.data);
            console.log(res.data.data);
        })
        .catch((err) => {
            console.log(err);
        })
    });
    return (
        <section id="feature-eight" className="feature-eight-section position-relative">
        <div className="container">
            <div className="eight-section-title appeight-headline pera-content text-center">
                <span className="eg-title-tag">
                    {/* Fetaured services <i className="square-shape"><i></i><i></i> <i></i> <i></i> </i> */}
                </span>
                {title.map((title) => (
                                <h2 key={title.title}>{title.title}
                                {/* <span>our software?</span> */}
                                </h2>
                            ))}
                {/* <h2>Why you will choose
                    <span>our software?</span></h2> */}
                    {descriptions.map((description) => (
                                <p key={description.description}>{description.description}</p>
                            ))}
                </div>
                <div className="eight-feature-content">
                    <div className="row justify-content-md-center">
                        <div className="col-lg-3 col-md-6  wow fadeFromUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                            <div className="eight-feature-box text-center position-relative">
                                <div className="feature-icon8 position-relative">
                                    <i className="flaticon-logo"></i>
                                    <span className="ei-icon-bg"></span>
                                </div>
                                <div className="feature-text8 appeight-headline pera-content">
                                    {/* <h3>Branding</h3> */}
                                    {shaltgaan_neg_garchig.map((shaltgaan_neg_garchig) => (
                                <h3 key={shaltgaan_neg_garchig.shaltgaan_neg_garchig}>{shaltgaan_neg_garchig.shaltgaan_neg_garchig}</h3>
                            ))}                                   
                                    {shaltgaan_neg_tailbar.map((shaltgaan_neg_tailbar) => (
                                <p key={shaltgaan_neg_tailbar.shaltgaan_neg_tailbar}>{shaltgaan_neg_tailbar.shaltgaan_neg_tailbar}</p>
                            ))}
                                </div>
                                <div className="ei-feature-more">
                                    <a href="#"><i className="fas fa-plus"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeFromUp" data-wow-delay="300ms" data-wow-duration="1500ms">
                            <div className="eight-feature-box text-center position-relative">
                                <div className="feature-icon8 position-relative">
                                    <i className="flaticon-computer"></i>
                                    <span className="ei-icon-bg"></span>
                                </div>
                                <div className="feature-text8 appeight-headline pera-content">
                                    {/* <h3>Web Design</h3> */}
                                    {shaltgaan_hoyr_garchig.map((shaltgaan_hoyr_garchig) => (
                                <h3 key={shaltgaan_hoyr_garchig.shaltgaan_hoyr_garchig}>{shaltgaan_hoyr_garchig.shaltgaan_hoyr_garchig}
                                </h3>
                            ))}
                                    {shaltgaan_hoyr_tailbar.map((shaltgaan_hoyr_tailbar) => (
                                <p key={shaltgaan_hoyr_tailbar.shaltgaan_hoyr_tailbar}>{shaltgaan_hoyr_tailbar.shaltgaan_hoyr_tailbar}</p>
                            ))}
                                </div>
                                <div className="ei-feature-more">
                                    <a href="#"><i className="fas fa-plus"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeFromUp" data-wow-delay="900ms" data-wow-duration="1500ms">
                            <div className="eight-feature-box text-center position-relative">
                                <div className="feature-icon8 position-relative">
                                    <i className="flaticon-pen-tool"></i>
                                    <span className="ei-icon-bg"></span>
                                </div>
                                <div className="feature-text8 appeight-headline pera-content">
                                {shaltgaan_guraw_garchig.map((shaltgaan_guraw_garchig) => (
                                <h3 key={shaltgaan_guraw_garchig.shaltgaan_guraw_garchig}>{shaltgaan_guraw_garchig.shaltgaan_guraw_garchig}
                                </h3>
                            ))}
                                {shaltgaan_guraw_tailbar.map((shaltgaan_guraw_tailbar) => (
                                <p key={shaltgaan_guraw_tailbar.shaltgaan_guraw_tailbar}>{shaltgaan_guraw_tailbar.shaltgaan_guraw_tailbar}</p>
                            ))}
                                </div>
                                <div className="ei-feature-more">
                                    <a href="#"><i className="fas fa-plus"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeFromUp" data-wow-delay="1200ms" data-wow-duration="1500ms">
                            <div className="eight-feature-box text-center position-relative">
                                <div className="feature-icon8 position-relative">
                                    <i className="flaticon-layers"></i>
                                    <span className="ei-icon-bg"></span>
                                </div>
                                <div className="feature-text8 appeight-headline pera-content">
                                {shaltgaan_duruw_garchig.map((shaltgaan_duruw_garchig) => (
                                <h3 key={shaltgaan_duruw_garchig.shaltgaan_duruw_garchig}>{shaltgaan_duruw_garchig.shaltgaan_duruw_garchig}
                                </h3>
                            ))}
                                {shaltgaan_duruw_tailbar.map((shaltgaan_duruw_tailbar) => (
                                <p key={shaltgaan_duruw_tailbar.shaltgaan_duruw_tailbar}>{shaltgaan_duruw_tailbar.shaltgaan_duruw_tailbar}</p>
                            ))}
                                </div>
                                <div className="ei-feature-more">
                                    <a href="#"><i className="fas fa-plus"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ei-feature-shape"><img src="assets/img/app-landing/shape/f-shape1.png" alt=""/>
        </div>
        </section>
    );
};

export default Section;