import React, {Component, useState,useEffect} from 'react';
import axios from 'axios';
const Appdownload = () => {
    const [appdownload_title,setAppdownload_title] = useState([]);
    const [appdownload_description,setAppdownload_description] = useState([]);
    const [appdownload_image,setAppdownload_image] = useState([]);
    useEffect(() => {
        axios
        .get(`${process.env.REACT_APP_API_URL}api/v1/App_download`)
        // .get("http://localhost/ail-admin/api/v1/App_download")
        .then((res) => {
            setAppdownload_title(res.data.data);
            console.log(res.data.data);
        })
        .catch((err) => {
            console.log(err);
        })
    });
    useEffect(() => {
        axios
        .get(`${process.env.REACT_APP_API_URL}api/v1/App_download`)
        .then((res) => {
            setAppdownload_description(res.data.data);
            console.log(res.data.data);
        })
        .catch((err) => {
            console.log(err);
        })
    });
    useEffect(() => {
        axios
        .get(`${process.env.REACT_APP_API_URL}api/v1/App_download`)
        .then((res) => {
            setAppdownload_image(res.data.data);
            console.log(res.data.data);
        })
        .catch((err) => {
            console.log(err);
        })
    });
    return (
        <section id="ei-appdownload" className="ei-appdownload-section position-relative" data-background="assets/img/app-landing/background/appbg1.png">
        <div className="container">
            <div className="ei-appdownload-content">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="ei-app-mockup-img  wow fadeFromRight" data-wow-delay="300ms" data-wow-duration="1500ms">
                            {/* <img src="assets/img/app-landing/mockup/amu1.png" alt=""/> */}
                            {appdownload_image.map((appdownload_image) => (
                                <img src={`${process.env.REACT_APP_API_URL}/ail-admin/storage/app/media${appdownload_image.appdownload_image}`} alt=""/>
                            ))}
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="ei-app-down-text wow fadeFromLeft" data-wow-delay="600ms" data-wow-duration="1500ms">
                            <div className="eight-section-title appeight-headline pera-content text-left">
                                <span className="eg-title-tag">
                                    Application татах<i className="square-shape"><i></i><i></i><i></i><i></i></i>
                                </span>
                                {appdownload_title.map((appdownload_title) => (
                                <h2 key={appdownload_title.appdownload_title}>{appdownload_title.appdownload_title}
                                </h2>
                            ))}
                             {appdownload_description.map((appdownload_description) => (
                                <p key={appdownload_description.appdownload_description}>{appdownload_description.appdownload_description}</p>
                            ))}
                            </div>
                            <div className="app-down-btn">
                                <a href="#"><img src="assets/img/app-landing/shape/btn1.png" alt=""/></a>
                                <a href="https://apps.apple.com/mn/app/ail/id1547983699"><img src="assets/img/app-landing/shape/btn2.png" alt=""/></a>
                            </div>
                            {/* <div className="ei-download-btn pera-content">
                                <div className="download-icon float-left"><i className="flaticon-idea"></i></div>
                                <p>Are you interested for this app?</p>
                                <a href="#">Learn More </a>
                            </div>   */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="ei-appdownloaad-shape app-shape1" data-parallax='{"y" : -100}'><img src="assets/img/app-landing/background/apps1.png" alt=""/></div>
        <div className="ei-appdownloaad-shape app-shape2" data-parallax='{"x" : -120}'><img src="assets/img/app-landing/background/apps2.png" alt=""/></div>
        <div className="ei-appdownloaad-shape app-shape3" data-parallax='{"y" : -100}'><img src="assets/img/app-landing/background/apps3.png" alt=""/></div>
    </section>
    )
}

export default Appdownload;