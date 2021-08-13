import React from 'react';
import Header from "../../component/header";
import Banner from "../../component/Banner/banner";
import Featured from "../../component/Featured/featured";
import Showcase from "../../component/Showcase/showcase";
import Teams from "../../component/Teams/Team";
import Appdownload from "../../component/Appdownload/appdownload";
import Appscreenshot from "../../component/Appscreenshot/screenshot";
class Home extends React.Component{
    render() {
        return (
            <div>
            <div id="preloader" className="ei-preloader"></div>
    <div className="ei-up">
        <a href="ail.mn" id="scrollup" className="ei-scrollup text-center">
        <i className="fas fa-angle-up"></i>
        </a>
    </div>
       <Header/>
       <Banner/>
       <Featured/>
       <Showcase/>
       <Teams/>
       <Appdownload/>
       <Appscreenshot/>
        <section id="ei-footer" className="ei-footer-section position-relative">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="ei-footer-widget pera-content appeight-headline">
                            <div className="ei-footer-logo">
                            <img style={{maxWidth:"33%"}} src="assets/img/app-landing/logo/solution1.png" alt="footerlogo"/>
                            <div style={{marginTop:"16px"}}>
                            <span style={{fontSize:"14px",display:"grid",fontFamily:"ExtraRegular"}} >
                                Утасны дугаар: 7711 9660
                            </span>
                        </div>
                        <span style={{fontSize:"14px"}}>Монгол улс, Улаанбаатар 14200, Сүхбаатар дүүрэг, 8-р хороо, Сүхбаатарын талбай, Сентрал тауэр, 712 тоот</span>
                            </div>
                            <div className="ei-payment-mathod">
                            {/* <span>
                            </span> */}
                                {/* <img src="assets/img/app-landing/logo/paypal.png" alt=""/> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="ei-footer-widget appeight-headline ul-li-block" style={{margin:"0px 18.5 1px 126.5"}}>
                            <ul>
                                <li style={{fontFamily:"ExtraRegular"}}><a href="#eight-banner">Нүүр хуудас</a></li>
                            </ul>
                            <ul>
                                <li style={{fontFamily:"ExtraRegular"}}><a href="#feature-eight">Үйлчилгээ</a></li>
                            </ul>
                            <ul>
                                <li style={{fontFamily:"ExtraRegular"}}><a href="#eight-service">Бидний тухай</a></li>
                            </ul>
                            <ul>
                                <li style={{fontFamily:"ExtraRegular"}}><a href="#ei-screenshots">Аппликешн тухай</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4">
                         <div className="download-btn">
                                <a href="https://apps.apple.com/mn/app/ail/id1547983699"><img src="assets/img/app-landing/shape/btn2.png" alt=""/></a>
                            </div>
                        <div className="download-btn">
                            <a href="https://play.google.com/store/apps"><img src="assets/img/app-landing/shape/btn1.png" style={{marginTop:"12px"}} alt=""/></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ei-footer-copyright">
                <div className="container">
                    <div className="ei-footer-copyright-content">
                        <div className="row" style={{justifyContent:"center"}}>
                            <div className="col-md-4">
                                <div className="ei-copyright-text">
                                    <p style={{fontFamily:"ExtraRegular",fontSize:"14px"}}>© 2021 <a href="https://www.skypro.mn/skypro-solution">Sky professional solution</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ei-footer-shape1 position-absolute" data-parallax='{"x" : 60}'><img src="assets/img/app-landing/shape/fo-shape1.png" alt="xaxa"/></div>
            <div className="ei-footer-shape2 position-absolute" data-parallax='{"y" : 60}'><img src="assets/img/app-landing/shape/fo-shape2.png" alt="xaxa"/></div>
            <div className="ei-footer-shape3 position-absolute"><img src="assets/img/app-landing/shape/eimap.png" alt="xaxa"/></div>
        </section>
      {/* <!-- End of Footer  section
        ============================================= -->            

        <!-- JS library --> */}
       
            </div>
        )
    }
}

export default Home;