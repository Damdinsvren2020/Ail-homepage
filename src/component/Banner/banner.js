import React, {Component, useState,useEffect} from 'react';
import axios from 'axios';

const Banner = () => {
    const [descriptions,setDescriptions] = useState([]);
    const [title,setTitle] = useState([]);
    const [image,setImage] = useState([]);
    useEffect(() => {
        axios
        .get(`${process.env.REACT_APP_API_URL}api/v1/Home_banner`)
        // console.log('pisda',process.env)
        .then((res) => {
            setDescriptions(res.data.data);
            console.log(res.data.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }, []);
    useEffect(() => {
        axios
        .get(`${process.env.REACT_APP_API_URL}api/v1/Home_banner`)
        .then((res) => {
            setTitle(res.data.data);
        })
        .catch((err) => {
            console.log(err);
        })
        axios
        .get(`${process.env.REACT_APP_API_URL}api/v1/Home_banner`)
        .then((res) => {
            setImage(res.data.data);
            console.log('pisda',res.data.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }, []);
    useEffect(() => {
        axios
        .get(`${process.env.REACT_APP_API_URL}api/v1/Home_banner`)
        .then((res) => {
            setImage(res.data.data);
            console.log('xaxa',res.data.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }, []);
    return (
        <section id="eight-banner" className="eight-banner-section position-relative">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="eight-banner-content">
                        <div className="banner-content-box appeight-headline pera-content">
                            
                            {title.map((title) => (
                                <h1 key={title.title}>{title.title}
                                 <span class="cd-words-wrapper">
                                        <b class="is-visible"></b>
                                        <b>showcase</b>
                                        <b>screenshoot</b>
                                 </span>
                                </h1>
                            ))}
                            {descriptions.map((description) => (
                                <p key={description.description}>{description.description}</p>
                            ))}
                             <div class="ei-banner-btn">
                                    <a href="#"><i class="fas fa-power-off"></i>Эхлэх</a>
                                    <a href="#"><span></span></a>
                                </div>
                                <div class="ei-banner-review pera-content ul-li">
                                    <ul>
                                        {/* <li><i class="fas fa-star"></i></li>
                                        <li><i class="fas fa-star"></i></li>
                                        <li><i class="fas fa-star"></i></li>
                                        <li><i class="fas fa-star"></i></li>
                                        <li><i class="fas fa-star"></i></li> */}
                                    </ul>
                                    <p> <span></span> </p>
                                </div>
                        </div>
                        <div className="ei-banner-mbl-mockup wow fadeInRight" data-wow-delay="600ms" data-wow-duration="1500ms">
                            {descriptions.map((description) => (
                                <img src={`${process.env.REACT_APP_API_URL}/ail-admin/storage/app/media${description.image}`} alt=""/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="waveWrapper waveAnimation">
            <div className="waveWrapperInner bgTop">
                <div className="wave waveTop" style={{backgroundImage: `url('assets/img/app-landing/shape/b-shapeup.png')`}}></div>
            </div>
            <div className="waveWrapperInner bgMiddle">
                <div className="wave waveMiddle" style={{backgroundImage: `url('assets/img/app-landing/shape/b-shapemiddle.png')`}}></div>
            </div>
            <div className="waveWrapperInner bgBottom">
                <div className="wave waveBottom" style={{backgroundImage:` url('assets/img/app-landing/shape/b-shapemiddle.png')`}}></div>
            </div>
        </div>
    </section>
    );
};

export default Banner;