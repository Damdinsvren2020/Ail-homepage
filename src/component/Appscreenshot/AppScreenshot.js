import React, { Component } from 'react';

class AppScreenshot extends Component {
    render() {
        return (
            <section id="ei-screenshots" class="ei-screenshots-section position-relative">
            <div class="container">
                <div class="eight-section-title appeight-headline pera-content text-center">
                    <span class="eg-title-tag"> App screenshots <i class="square-shape"> <i></i><i></i><i></i><i></i></i></span>
                    <h2>App screenshots is important to
                        <span>know properly the app!</span></h2>
                        <p>As a SAAS web crawler expert, I help organizations adjust to the expanding significance of internet promoting.</p>
                    </div>

                    <div class="row ei-appScreenshotCarousel-container swiper-container">
                        <div class="ei-screen-mobile-image"></div>
                        <div class="swiper-wrapper">
                            <div class="swiper-slide" style={{backgroundImage:`url:(assets/img/app-landing/screenshoot/screenshot01.png)`}}></div>
                            <div class="swiper-slide" style={{backgroundImage:`url:(assets/img/app-landing/screenshoot/screenshot02.png)`}}></div>
                            <div class="swiper-slide" style={{backgroundImage:`url:(assets/img/app-landing/screenshoot/screenshot03.png)`}}></div>
                            <div class="swiper-slide" style={{backgroundImage:`url:(assets/img/app-landing/screenshoot/screenshot04.png)`}}></div>
                            <div class="swiper-slide" style={{backgroundImage:`url:(assets/img/app-landing/screenshoot/screenshot01.png)`}}></div>
                            <div class="swiper-slide" style={{backgroundImage:`url:(assets/img/app-landing/screenshoot/screenshot02.png)`}}></div>
                            <div class="swiper-slide" style={{backgroundImage:`url:(assets/img/app-landing/screenshoot/screenshot02.png)`}}></div>
                            <div class="swiper-slide" style={{backgroundImage:`url:(assets/img/app-landing/screenshoot/screenshot02.png)`}}></div>
                            <div class="swiper-slide" style={{backgroundImage:`url:(assets/img/app-landing/screenshoot/screenshot02.png)`}}></div>
                            <div class="swiper-slide" style={{backgroundImage:`url:(assets/img/app-landing/screenshoot/screenshot02.png)`}}></div>
                        </div>
                    </div>
                    <div class="banner-navigation">
                        <div class="swiper-button-prev"><span class="fas fa-chevron-left"></span></div>
                        <div class="swiper-button-next"><span class="fas fa-chevron-right"></span></div>
                    </div>
                </div>
                <div class="screenshoot-vector screenshoot-shape1 position-absolute"> <img src="assets/img/app-landing/shape/ss-shape1.png" alt=""/></div>
                <div class="screenshoot-vector screenshoot-shape2 position-absolute"> <img src="assets/img/app-landing/shape/ss-shape2.png" alt=""/></div>
            </section>
        );
    }
}

export default AppScreenshot;