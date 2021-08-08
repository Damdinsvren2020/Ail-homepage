import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <header id="header-eight" className="main-header-eight">
            <div className="appheader-content">
                <div className="site-logo float-left">
                    <a href="https://www.google.mn/">
                        <img src="assets/img/app-landing/logo/solution1.png" alt=""/>
                    </a>
                </div>
                <nav className="navigation-eight ul-li">
                    <ul>
                        <li><a className="nav-link" style={{fontSize:"20px",fontWeight:"100"}} href="#eight-banner">Нүүр хуудас</a></li>
                        <li><a className="nav-link" style={{fontSize:"20px",fontWeight:"100"}}  href="#feature-eight">Үйлчилгээ</a></li>
                        <li><a className="nav-link" style={{fontSize:"20px",fontWeight:"100"}}  href="#eight-service">Бидний тухай</a></li>
                        <li><a className="nav-link" style={{fontSize:"20px",fontWeight:"100"}}  href="#ei-screenshots">Системийн мэдээлэл</a></li>
                    </ul>
                </nav>
                <div className="h-eight-social ul-li float-right clearfix">
                    <ul>
                        <li><a href="https://www.facebook.com/AilSystems"><i className="fab fa-facebook-f"></i></a></li>
                    </ul>
                </div>
                <div className="sign-up-btn-eight text-center float-right clearfix">
                    <a href="http://ail.mn/login?redirect=%2F">Нэвтрэх</a>
                </div>
            </div>
            {/* <!-- /desktop-menu --> */}
            <div className="appi-ei-mobile_menu relative-position">
                <div className="appi-ei-mobile_menu_button appi-ei-open_mobile_menu">
                    <i className="fas fa-bars"></i>
                </div>
                <div className="appi-ei-mobile_menu_wrap">
                    <div className="mobile_menu_overlay appi-ei-open_mobile_menu"></div>
                    <div className="appi-ei-mobile_menu_content">
                        <div className="appi-ei-mobile_menu_close appi-ei-open_mobile_menu">
                            <i className="far fa-times-circle"></i>
                        </div>
                        {/* <div className="m-brand-logo text-center">
                            <img src="assets/img/app-landing/logo/f-logo.png" alt=""/>
                        </div> */}
                        <nav className="appi-ei-mobile-main-navigation  clearfix ul-li">
                            <ul id="main-nav" className="navbar-nav text-capitalize clearfix">
                                <li><a className="nav-link" style={{fontSize:"13px"}}  href="#eight-banner">Нүүр хуудас</a></li>
                                <li><a className="nav-link" style={{fontSize:"13px"}}  href="#feature-eight">Үйлчилгээ</a></li>
                                <li><a className="nav-link" style={{fontSize:"13px"}}  href="#eight-service">Бидний тухай</a></li>
                                <li><a className="nav-link" style={{fontSize:"13px"}}  href="#ei-screenshots">Системийн мэдээлэл</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            {/* <!-- /mobile-menu --> */}
        </header>
        )
    }
}
export default Header;