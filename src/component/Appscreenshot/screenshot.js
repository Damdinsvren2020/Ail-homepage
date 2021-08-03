import React, {Component, useState,useEffect} from 'react';
import axios from 'axios';

const Screenshot = () => {
    const [image_neg,setImage_neg] = useState([]);
    useEffect(() => {
        axios
        .get(`${process.env.REACT_APP_API_URL}api/v1/App_screenshot`)
        .then((res) => {
            setImage_neg(res.data.data);
            console.log(res.data.data);
        })
        .catch((err) => {
            console.log(err);
        })
    });
   return (
    <section id="ei-screenshots" className="ei-screenshots-section position-relative">
    <div className="container">
        <div className="eight-section-title appeight-headline pera-content text-center">
            <span className="eg-title-tag"> Ail application <i className="square-shape"> <i></i><i></i><i></i><i></i></i></span>
            <h2>App screenshots 
                {/* <span>know properly the app!</span> */}
            </h2>
                {/* <p>As a SAAS web crawler expert, I help organizations adjust to the expanding significance of internet promoting.</p> */}
            </div>

            <div className="row ei-appScreenshotCarousel-container swiper-container">
                <div className="ei-screen-mobile-image"></div>
                <div className="swiper-wrapper">
                    <div className="swiper-slide" style={{backgroundImage:`url(assets/img/app-landing/screenshoot/screenshot01.png)`}}></div>
                    <div className="swiper-slide" style={{backgroundImage:`url(assets/img/app-landing/screenshoot/screenshot02.png)`}}></div>
                    <div className="swiper-slide" style={{backgroundImage:`url(assets/img/app-landing/screenshoot/screenshot03.png)`}}></div>
                    <div className="swiper-slide" style={{backgroundImage:`url(assets/img/app-landing/screenshoot/screenshot04.png)`}}></div>
                    <div className="swiper-slide" style={{backgroundImage:`url(assets/img/app-landing/screenshoot/search.png)`}}></div>
                    <div className="swiper-slide" style={{backgroundImage:`url(assets/img/app-landing/screenshoot/search.png)`}}></div>
                </div>
            </div>
            <div className="banner-navigation">
                <div className="swiper-button-prev"><span className="fas fa-chevron-left"></span></div>
                <div className="swiper-button-next"><span className="fas fa-chevron-right"></span></div>
            </div>
        </div>
        <div className="screenshoot-vector screenshoot-shape1 position-absolute"> <img src="assets/img/app-landing/shape/ss-shape1.png" alt=""/></div>
        <div className="screenshoot-vector screenshoot-shape2 position-absolute"> <img src="assets/img/app-landing/shape/ss-shape2.png" alt=""/></div>
    </section>
   );
}

export default Screenshot;