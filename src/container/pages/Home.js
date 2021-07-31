import React, {Component} from 'react';
import Header from "../../component/header";
import Banner from "../../component/Banner/banner";
import Featured from "../../component/Featured/featured";
import Showcase from "../../component/Showcase/showcase";
import Teams from "../../component/Teams/Team";
import Appdownload from "../../component/Appdownload/appdownload";
// import Appworking from "../../component/Appworking/appworking";
// import Gishvvd from "../../component/Bagiingishvvd/Gishvvd";
import Screenshot from "../../component/Appscreenshot/screenshot";
class Home extends React.Component{
    render() {
        return (
            <div>
            <div id="preloader" className="ei-preloader"></div>
    <div className="ei-up">
        <a href="#" id="scrollup" className="ei-scrollup text-center">
        <i className="fas fa-angle-up"></i>
        </a>
    </div>
    {/* <!-- Start of header section
        ============================================= --> */}
       <Header/>
    {/* <!-- End of header section
        ============================================= -->


    <!-- Start of Banner section
        ============================================= --> */}
       <Banner/>
    {/* <!-- End of Banner section
        ============================================= --> 

    <!-- Start of Featured  section
        ============================================= --> */}
       <Featured/>
    {/* <!-- End of Featured section
        ============================================= --> 

    <!-- Start of service  section
        ============================================= --> */}
        <Showcase/>
    {/* <!-- End of service  section
        ============================================= -->

    <!-- Start of Fun fact   section
        ============================================= --> */}
        <Teams/>   
    
    {/* <!-- End of Fun fact  section
        ============================================= --> 

    <!-- Start of How work  section
        ============================================= --> */}

        {/* <Appworking/> */}
    {/* <!-- End  of How work  section
        ============================================= -->   


    <!-- Start of App Download  section
        ============================================= --> */}

        <Appdownload/>
       
    {/* <!-- End of App Download section
        ============================================= -->   


    <!-- Start of team section
        ============================================= --> */}
      
        {/* <Gishvvd/> */}

     {/* <!-- End  of team section
        ============================================= -->                                           

    <!-- Start of Faq section
        ============================================= --> */}
        {/* <section id="ei-faq" className="ei-faq-section position-relative">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="ei-faq-content">
                            <div className="ei-title-faq pera-content">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="eight-section-title appeight-headline pera-content text-left">
                                            <span className="eg-title-tag">
                                                Frequently asked Question<i className="square-shape"><i></i><i></i> <i></i><i></i></i>
                                            </span>
                                            <h2>Learn about features
                                                <span>from FAQ!</span></h2>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <p>As a SAAS web crawler expert, I help organizations  to the expanding significance of internet promoting.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="ei-faq-queans">
                                    <div className="accordion" id="accordionExample">
                                        <div className="ei-faq faq_bg">
                                            <div className="ei-faq-header" id="headingOne">
                                                <button className="" data-toggle="collapse" data-target="#collapseOne" aria-controls="collapseOne">
                                                    What should I include in App?
                                                </button>
                                            </div>
                                            <div id="collapseOne" className="collapse show" data-parent="#accordionExample">
                                                <div className="ei-faq-body">
                                                    Lorem ipsum dolor sit amet consecte tur adipiscing elit sed <a href="#">eiusmod tempor incididunt</a> ut labore. In order to design a mobile app that is going to be module downloaded.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ei-faq">
                                            <div className="ei-faq-header" id="headingtwo">
                                                <button className="collapsed" data-toggle="collapse" data-target="#collapsetwo" aria-controls="collapsetwo">
                                                    How does the Moodle app work?
                                                </button>
                                            </div>
                                            <div id="collapsetwo" className="collapse" data-parent="#accordionExample">
                                                <div className="ei-faq-body">
                                                    Lorem ipsum dolor sit amet consecte tur adipiscing elit sed <a href="#">eiusmod tempor incididunt</a> ut labore. In order to design a mobile app that is going to be module downloaded.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ei-faq">
                                            <div className="ei-faq-header" id="headingthree">
                                                <button className="collapsed" data-toggle="collapse" data-target="#collapsethree" aria-controls="collapsethree">
                                                    Can users choose to install the app?
                                                </button>
                                            </div>
                                            <div id="collapsethree" className="collapse" data-parent="#accordionExample">
                                                <div className="ei-faq-body">
                                                    Lorem ipsum dolor sit amet consecte tur adipiscing elit sed <a href="#">eiusmod tempor incididunt</a> ut labore. In order to design a mobile app that is going to be module downloaded.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ei-faq">
                                            <div className="ei-faq-header" id="headingfour">
                                                <button className="collapsed" data-toggle="collapse" data-target="#collapsefour" aria-controls="collapsefour">
                                                    How do I disable installed apps?
                                                </button>
                                            </div>
                                            <div id="collapsefour" className="collapse" data-parent="#accordionExample">
                                                <div className="ei-faq-body">
                                                    Lorem ipsum dolor sit amet consecte tur adipiscing elit sed <a href="#">eiusmod tempor incididunt</a> ut labore. In order to design a mobile app that is going to be module downloaded.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <span className="ei-faq-shape fq-shape-style1" data-parallax='{"x" : 50}'><img src="assets/img/app-landing/shape/fq-shape1.png" alt=""/></span>
                <span className="ei-faq-shape fq-shape-style2"><img src="assets/img/app-landing/shape/fq-shape2.png" alt=""/></span>
                <span className="ei-faq-shape fq-shape-style3"><img src="assets/img/app-landing/shape/fq-shape3.png" alt=""/></span>
                <span className="ei-faq-shape fq-shape-style4" data-parallax='{"y" : 60}'><img src="assets/img/app-landing/shape/fq-shape4.png" alt=""/></span>
                <span className="ei-faq-shape fq-shape-style5"><img src="assets/img/app-landing/shape/fq-shape5.png" alt=""/></span>
                <span className="ei-faq-shape fq-shape-style6"><img src="assets/img/app-landing/shape/fq-shape6.png" alt=""/></span>
                <span className="ei-faq-shape fq-shape-style8"><img src="assets/img/app-landing/shape/fq-shape8.png" alt=""/></span>
                <span className="ei-faq-shape fq-shape-style7"><img src="assets/img/app-landing/shape/fq-shape7.png" alt=""/><img src="assets/img/app-landing/shape/fq-shape7.png" alt=""/>
                    <img src="assets/img/app-landing/shape/fq-shape7.png" alt=""/></span>
                </section> */}
    {/* <!-- End of Faq section
        ============================================= --> 


    <!-- Start of screen-shoot section
        ============================================= --> */}
    <Screenshot/>
    {/* <!-- End of screen-shoot section
        ============================================= --> 


   <!-- Start of Testimonial section
    ============================================= --> */}
    {/* <section id="ei-testimonial" className="ei-testimonial-section position-relative" data-background="assets/img/app-landing/background/tbg.jpg">
        <div className="container">
            <div className="eight-section-title appeight-headline pera-content text-center">
                <span className="eg-title-tag">
                    Testimonials<i className="square-shape"> <i></i><i></i><i></i><i></i> </i>
                </span>
                <h2>
                    Client’s review for
                    <span>work satisfaction.</span>
                </h2>
                <p>As a SAAS web crawler expert, I help organizations adjust to the expanding significance of internet promoting.</p>
            </div>
            <div className="ei-testimonial-content">
                <div id="testimonial-scroller" className="testimonial-scroller-area owl-carousel">
                    <div className="ei-testimonial-img-text position-relative">
                        <div className="test--quote-icon">
                            <i className="fas fa-quote-right"></i>
                        </div>
                        <div className="ei-testimonial-img float-left text-center">
                            <img src="assets/img/app-landing/testimonial/tst1.jpg" alt=""/>
                        </div>
                        <div className="ei-testimonial-text">
                            <div className="ei-testimonial-name appeight-headline pera-content">
                                <h3>Liana Zhu</h3>
                                <span>Senior Director</span>
                            </div>
                            <p>As a app web crawler expert, I help organizations adjust to the expanding significance of internet promoting.</p>
                            <div className="ei-testi-rate ul-li clearfix">
                                <ul>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="ei-testimonial-img-text position-relative">
                        <div className="test--quote-icon">
                            <i className="fas fa-quote-right"></i>
                        </div>
                        <div className="ei-testimonial-img float-left text-center">
                            <img src="assets/img/app-landing/testimonial/tst2.jpg" alt=""/>
                        </div>
                        <div className="ei-testimonial-text">
                            <div className="ei-testimonial-name appeight-headline pera-content">
                                <h3>Liana Zhu</h3>
                                <span>Senior Director</span>
                            </div>
                            <p>As a app web crawler expert, I help organizations adjust to the expanding significance of internet promoting.</p>
                            <div className="ei-testi-rate ul-li clearfix">
                                <ul>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="ei-testimonial-img-text position-relative">
                        <div className="test--quote-icon">
                            <i className="fas fa-quote-right"></i>
                        </div>
                        <div className="ei-testimonial-img float-left text-center">
                            <img src="assets/img/app-landing/testimonial/tst1.jpg" alt=""/>
                        </div>
                        <div className="ei-testimonial-text">
                            <div className="ei-testimonial-name appeight-headline pera-content">
                                <h3>Liana Zhu</h3>
                                <span>Senior Director</span>
                            </div>
                            <p>As a app web crawler expert, I help organizations adjust to the expanding significance of internet promoting.</p>
                            <div className="ei-testi-rate ul-li clearfix">
                                <ul>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="testimonial-floatingimg testimonial-float-img1 ul-li-block">
            <ul>
                <li><img src="assets/img/app-landing/testimonial/tf1.jpg" alt=""/></li>
                <li><img src="assets/img/app-landing/testimonial/tf3.jpg" alt=""/></li>
                <li><img src="assets/img/app-landing/testimonial/tst1.jpg" alt=""/></li>
                <li><img src="assets/img/app-landing/testimonial/tst2.jpg" alt=""/></li>
            </ul>
        </div>
        <div className="testimonial-floatingimg testimonial-float-img2 ul-li-block">
            <ul>
                <li><img src="assets/img/app-landing/testimonial/tf1.jpg" alt=""/></li>
                <li><img src="assets/img/app-landing/testimonial/tf3.jpg" alt=""/></li>
                <li><img src="assets/img/app-landing/testimonial/tst1.jpg" alt=""/></li>
                <li><img src="assets/img/app-landing/testimonial/tst2.jpg" alt=""/></li>
            </ul>
        </div>
    </section> */}
   {/* <!-- End of Testimonial section
    ============================================= -->

     <!-- Start of Partner  section
        ============================================= --> */}
        {/* <section id="ei-partner" className="ei-partner-section">
            <div className="container">
                <div className="ei-partner-content">
                    <div id="ei-partner-slide" className="partner-slide-area owl-carousel">
                        <div className="partner-img">
                            <img src="assets/img/app-landing/partner/p1.png" alt=""/>
                        </div>
                        <div className="partner-img">
                            <img src="assets/img/app-landing/partner/p2.png" alt=""/>
                        </div>
                        <div className="partner-img">
                            <img src="assets/img/app-landing/partner/p3.png" alt=""/>
                        </div>
                        <div className="partner-img">
                            <img src="assets/img/app-landing/partner/p4.png" alt=""/>
                        </div>

                        <div className="partner-img">
                            <img src="assets/img/app-landing/partner/p2.png" alt=""/>
                        </div>
                        <div className="partner-img">
                            <img src="assets/img/app-landing/partner/p3.png" alt=""/>
                        </div>
                    </div>
                    <div className="ei-partner-text appeight-headline pera-content">
                        <div className="ei-partner-icon text-center float-left">
                            <i className="fas fa-gem"></i>
                        </div>
                        <h4>Trusted by 12,00 companies!</h4>
                        <p>We have more than 1200+ trusted clients around World wide.</p>
                    </div>
                </div>
            </div>
        </section> */}
     {/* <!-- End  of Partner  section
        ============================================= -->  

     <!-- Start of Newslatter  section
        ============================================= --> */}
        {/* <section id="ei-newslatter" className="ei-newslatter-section position-relative">
            <div className="ei-newslatter-box position-relative">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="ei-newslatter-contnet appeight-headline pera-content">
                                <h3>Subscribe to our <span>newsletter!</span></h3>
                                <div className="ei-newslatter-form position-relative">
                                    <form action="#">
                                        <input className="email" name="email" type="email" placeholder="Enter your email address"/>
                                        <div className="nws-button position-absolute text-capitalize">
                                            <button className="hover-btn" type="submit" value="Submit"> Subscribe Now</button>
                                        </div>
                                        <p>* Your mail address will be fully secure . We don’t share!</p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ei-news-vector1 position-absolute"><img src="assets/img/app-landing/shape/n-shape1.png" alt=""/></div>
                <div className="ei-news-vector2 position-absolute"><img src="assets/img/app-landing/shape/n-shape2.png" alt=""/></div>
                <div className="ei-news-vector3 position-absolute" data-parallax='{"x" : 50}'><img src="assets/img/app-landing/shape/n-shape3.png" alt=""/></div>
            </div>
            <div className="ei-newslatter-mockup">
                <img src="assets/img/app-landing/mockup/n-mockup.png" alt=""/>
            </div>
        </section> */}
     {/* <!-- End of Newslatter  section
        ============================================= -->

      <!-- Start of Footer  section
        ============================================= --> */}
        <section id="ei-footer" className="ei-footer-section position-relative">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="ei-footer-widget pera-content appeight-headline">
                            <div className="ei-footer-logo">
                                <img src="assets/img/app-landing/logo/Solution.png" alt=""/>
                            </div>
                            <p>
                                Айл систем.
                            </p>
                            <div className="ei-payment-mathod">
                                {/* <img src="assets/img/app-landing/logo/paypal.png" alt=""/> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="ei-footer-widget appeight-headline ul-li-block">
                            {/* <h3 className="ei-widget-title">Useful link:</h3> */}
                            <ul>
                                <li><a href="#">Нүүр хуудас</a></li>
                                {/* <li><a href="#">Team</a></li> */}
                                {/* <li><a href="#">Servce</a></li>
                                <li><a href="#">FAQ</a></li> */}
                                {/* <li><a href="#">About Us</a></li> */}
                                {/* <li><a href="#">Gallery</a></li>
                                <li><a href="#">Testimonials</a></li>
                                <li><a href="#">Contact</a></li>
                                <li><a href="#">News</a></li>
                                <li><a href="#">Portfolio</a></li> */}
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="ei-footer-widget appeight-headline  ul-li-block">
                            <h3 className="ei-widget-title">Холбоо барих:</h3>
                            <h4>
                                <i className="fas fa-phone"></i>
                                Утасны дугаар: 7711 9660
                                <span>(Даваа - Баасан)</span>
                            </h4>
                            <h4>
                               <i className="fas fa-map-marker-alt"></i>
                               Монгол улс, Улаанбаатар 14200, Сүхбаатар дүүрэг, 8-р хороо, Сүхбаатарын талбай, Сентрал тауэр, 712 тоот                                
                            </h4>
                            <div className="download-btn">
                                <a href="#"><img src="assets/img/app-landing/logo/app1.png" alt=""/></a>
                                <a href="https://apps.apple.com/mn/app/ail/id1547983699"><img src="assets/img/app-landing/logo/gp1.png" alt=""/></a>
                            </div>
                            <div className="ei-footer-social">
                                <a href="https://www.facebook.com/AilSystems"><i className="fab fa-facebook-f "></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ei-footer-copyright">
                <div className="container">
                    <div className="ei-footer-copyright-content">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="ei-copyright-text">
                                    <p>© 2020 <a href="#">Sky pro solution</a></p>
                                </div>
                            </div>
                            {/* <div className="col-md-8">
                                <div className="ei-copyright-menu">
                                    <a href="#">Help</a>
                                    <a href="#">Terms & Conditions </a>
                                    <a href="#">Privacy </a>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="ei-footer-shape1 position-absolute" data-parallax='{"x" : 60}'><img src="assets/img/app-landing/shape/fo-shape1.png" alt=""/></div>
            <div className="ei-footer-shape2 position-absolute" data-parallax='{"y" : 60}'><img src="assets/img/app-landing/shape/fo-shape2.png" alt=""/></div>
            <div className="ei-footer-shape3 position-absolute"><img src="assets/img/app-landing/shape/eimap.png" alt=""/></div>
        </section>
      {/* <!-- End of Footer  section
        ============================================= -->            

        <!-- JS library --> */}
       
            </div>
        )
    }
}

export default Home;