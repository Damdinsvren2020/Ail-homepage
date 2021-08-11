import React ,{Component} from 'react';
import axios from 'axios';
class Screenshot extends Component {
    constructor(props) {
        super(props)
        this.state = {
            zurguud: []
        }
    }
    componentDidMount() {
        axios.get('http://103.29.144.253:8092/api/v1/App_screenshot')
          .then(response => {
            const zurguud = response.data.data[0];
            this.setState({ zurguud: zurguud });
          })
          .catch(error => {
            console.log(error)
        })
    } 
    render(){
        return (
            <section id="ei-screenshots" className="ei-screenshots-section position-relative">
    <div className="container">
        <div className="eight-section-title appeight-headline pera-content text-center">
            <h2 style={{fontSize:"30px"}}>Системийн мэдээлэл 
            </h2>
            </div>

            <div className="row ei-appScreenshotCarousel-container swiper-container">
                <div className="ei-screen-mobile-image"></div>
                <div className="swiper-wrapper">
                    <div className="swiper-slide" style=
                        {
                            this.state.zurguud && this.state.zurguud.image_neg &&
                            {backgroundImage:`url(${process.env.REACT_APP_API_URL}/storage/app/media${this.state.zurguud.image_neg})`}                       

                        } 
                        >                       
                     </div>
                     <div className="swiper-slide" style=
                        {
                            this.state.zurguud && this.state.zurguud.image_neg &&
                            {backgroundImage:`url(${process.env.REACT_APP_API_URL}/storage/app/media${this.state.zurguud.image_hoyor})`}                       

                        } 
                        >                       
                     </div>
                     <div className="swiper-slide" style=
                        {
                            this.state.zurguud && this.state.zurguud.image_neg &&
                            {backgroundImage:`url(${process.env.REACT_APP_API_URL}/storage/app/media${this.state.zurguud.image_guraw})`}                       

                        } 
                        >                       
                     </div>
                     <div className="swiper-slide" style=
                        {
                            this.state.zurguud && this.state.zurguud.image_neg &&
                            {backgroundImage:`url(${process.env.REACT_APP_API_URL}/storage/app/media${this.state.zurguud.image_duruw})`}                       

                        } 
                        >                       
                     </div>
                     <div className="swiper-slide" style=
                        {
                            this.state.zurguud && this.state.zurguud.image_neg &&
                            {backgroundImage:`url(${process.env.REACT_APP_API_URL}/storage/app/media${this.state.zurguud.image_tav})`}                       

                        } 
                        >                       
                     </div>
                     <div className="swiper-slide" style=
                        {
                            this.state.zurguud && this.state.zurguud.image_neg &&
                            {backgroundImage:`url(${process.env.REACT_APP_API_URL}/storage/app/media${this.state.zurguud.image_zurgaa})`}                       

                        } 
                        >                       
                     </div>
                     <div className="swiper-slide" style=
                        {
                            this.state.zurguud && this.state.zurguud.image_neg &&
                            {backgroundImage:`url(${process.env.REACT_APP_API_URL}/storage/app/media${this.state.zurguud.image_doloo})`}                       

                        } 
                        >                       
                     </div>
                     <div className="swiper-slide" style=
                        {
                            this.state.zurguud && this.state.zurguud.image_neg &&
                            {backgroundImage:`url(${process.env.REACT_APP_API_URL}/storage/app/media${this.state.zurguud.image_naim})`}                       

                        } 
                        >                       
                     </div>
                     <div className="swiper-slide" style=
                        {
                            this.state.zurguud && this.state.zurguud.image_neg &&
                            {backgroundImage:`url(${process.env.REACT_APP_API_URL}/storage/app/media${this.state.zurguud.image_ys})`}                       

                        } 
                        >                       
                     </div>
                     <div className="swiper-slide" style=
                        {
                            this.state.zurguud && this.state.zurguud.image_neg &&
                            {backgroundImage:`url(${process.env.REACT_APP_API_URL}/storage/app/media${this.state.zurguud.image_araw})`}                       

                        } 
                        >                       
                     </div>
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
        )
    }
}

export default Screenshot;