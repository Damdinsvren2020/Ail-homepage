import React, {Component, useState,useEffect} from 'react';
import axios from 'axios';
const Showcase = () => {
    const [showcase_neg_garchig,setShowcase_neg_garchig] = useState([]);
    const [showcase_neg_tailbar,setShowcase_neg_tailbar] = useState([]);
    const [showcase_hoyor_garchig,setShowcase_hoyor_garchig] = useState([]);
    const [showcase_hoyor_tailbar,setShowcase_hoyor_tailbar] = useState([]);
    const [case_garchig_guraw,setCase_garchig_guraw] = useState([]);
    const [case_tailbar_guraw,setCase_tailbar_guraw] = useState([]);
    const [show_case_banner_text,setShow_case_banner_text] = useState([]);
    // const [image,setImage] = useState([]);
    useEffect(() => {
        axios
        .get("http://localhost/ail-admin/api/v1/Show_case_neg")
        .then((res) => {
            setShowcase_neg_garchig(res.data.data);
            console.log(res.data.data);
        })
        .catch((err) => {
            console.log(err);
        })
    });
    useEffect(() => {
        axios
        .get("http://localhost/ail-admin/api/v1/Show_case_neg")
        .then((res) => {
            setShowcase_neg_tailbar(res.data.data);
            console.log(res.data.data);
        })
        .catch((err) => {
            console.log(err);
        })
    });
    useEffect(() => {
        axios
        .get("http://localhost/ail-admin/api/v1/Show_case_hoyor")
        .then((res) => {
            setShowcase_hoyor_garchig(res.data.data);
            console.log(res.data.data);
        })
        .catch((err) => {
            console.log(err);
        })
    });
    useEffect(() => {
        axios
        .get("http://localhost/ail-admin/api/v1/Show_case_hoyor")
        .then((res) => {
            setShowcase_hoyor_tailbar(res.data.data);
            console.log(res.data.data);
        })
        .catch((err) => {
            console.log(err);
        })
    });
    useEffect(() => {
        axios
        .get("http://localhost/ail-admin/api/v1/Case_guraw")
        .then((res) => {
            setCase_garchig_guraw(res.data.data);
            console.log(res.data.data);
        })
        .catch((err) => {
            console.log(err);
        })
    });
    useEffect(() => {
        axios
        .get("http://localhost/ail-admin/api/v1/Case_guraw")
        .then((res) => {
            setCase_tailbar_guraw(res.data.data);
            console.log(res.data.data);
        })
        .catch((err) => {
            console.log(err);
        })
    });
    useEffect(() => {
        axios
        .get("http://localhost/ail-admin/api/v1/show_case_banner")
        .then((res) => {
            setShow_case_banner_text(res.data.data);
            console.log(res.data.data);
        })
        .catch((err) => {
            console.log(err);
        })
    });
    // useEffect(() => {
    //     axios
    //     .get("http://localhost/ail-admin/api/v1/show_case_banner")
    //     .then((res) => {
    //         setImage(res.data.data);
    //         console.log(res.data.data);
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //     })
    // });
   return (
    <section id="eight-service" className="eight-service-section position-relative">
    <div className="container">
        <div className="eight-service-slide   clearfix wow fadeFromLeft" data-wow-delay="300ms" data-wow-duration="1500ms">
            <div className="ei-service-slide-btn ul-li-block clearfix">
                <div className="banner-pager clearfix" id="banner-pager">
                    <a className="pager" data-slide-index="0">
                        <div className="ei-service-icon-text text-right appeight-headline pera-content">
                            <div className="ei-service-icon float-right text-center">
                                <i className="flaticon-bug"></i>
                            </div>
                            <div className="ei-service-text">
                            {showcase_neg_garchig.map((showcase_neg_garchig) => (
                                <h3 key={showcase_neg_garchig.showcase_neg_garchig}>{showcase_neg_garchig.showcase_neg_garchig}
                                </h3>
                            ))}                                
                        {showcase_neg_tailbar.map((showcase_neg_tailbar) => (
                                <p key={showcase_neg_tailbar.showcase_neg_tailbar}>{showcase_neg_tailbar.showcase_neg_tailbar}</p>
                            ))}                           
                        </div>
                        </div>
                    </a>

                    <a className="pager" data-slide-index="1">
                        <div className="ei-service-icon-text text-right appeight-headline pera-content">
                            <div className="ei-service-icon float-right text-center">
                                <i className="flaticon-crop"></i>
                            </div>
                            <div className="ei-service-text">
                            {showcase_hoyor_garchig.map((showcase_hoyor_garchig) => (
                                <h3 key={showcase_hoyor_garchig.showcase_hoyor_garchig}>{showcase_hoyor_garchig.showcase_hoyor_garchig}
                                </h3>
                            ))}          
                            {showcase_hoyor_tailbar.map((showcase_hoyor_tailbar) => (
                                <p key={showcase_hoyor_tailbar.showcase_hoyor_tailbar}>{showcase_hoyor_tailbar.showcase_hoyor_tailbar}</p>
                            ))}                                 </div>
                        </div>
                    </a>

                    <a className="pager" data-slide-index="2">
                        <div className="ei-service-icon-text text-right appeight-headline pera-content">
                            <div className="ei-service-icon float-right text-center">
                                <i className="flaticon-web-development"></i>
                            </div>
                            <div className="ei-service-text">
                                {case_garchig_guraw.map((case_garchig_guraw) => (
                                <h3 key={case_garchig_guraw.case_garchig_guraw}>{case_garchig_guraw.case_garchig_guraw}
                                </h3>
                            ))}       
                            {case_tailbar_guraw.map((case_tailbar_guraw) => (
                                <p key={case_tailbar_guraw.case_tailbar_guraw}>{case_tailbar_guraw.case_tailbar_guraw}</p>
                            ))}                               </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        <div className="eight-service-text position-relative appeight-headline wow fadeFromRight" data-wow-delay="300ms" data-wow-duration="1500ms">
            <div className="ei-service-slide-mbl"data-background="assets/img/app-landing/mockup/smu1.png">
                <div className="slide-inner">
                    <div className="ei-service-slide">
                        <div className="slide-item">
                            <div className="image">
                                <img src="assets/img/app-landing/screenshoot/slider-01.jpg" alt="" />
                            </div>
                        </div>
                        <div className="slide-item">
                            <div className="image">
                                <img src="assets/img/app-landing/screenshoot/slider-01.jpg" alt="" />
                            </div>
                        </div>
                        <div className="slide-item">
                            <div className="image">
                                <img src="assets/img/app-landing/screenshoot/slider-01.jpg" alt="" />
                            </div>
                        </div>
                        <div className="slide-item">
                            <div className="image">
                                <img src="assets/img/app-landing/screenshoot/slider-01.jpg" alt="" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {show_case_banner_text.map((show_case_banner_text) => (
                <h2 key={show_case_banner_text.show_case_banner_text}>{show_case_banner_text.show_case_banner_text}
                </h2>
            ))}       
        </div>
    </div>
    <div className="s-shape-bg1" data-parallax='{"x" : -70}'><img src="assets/img/app-landing/shape/s-shape3.png" alt=""/></div>
    <div className="s-shape-bg2 text-center">
        <img src="assets/img/app-landing/shape/s-shape4.png" alt=""/>
    </div>
</section>
   );
}

export default Showcase;