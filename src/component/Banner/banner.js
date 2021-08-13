import React ,{Component} from 'react';
import  './banner.css';
import axios from 'axios';

class Banner extends Component {
    constructor(props) {
        super(props)
        this.state = {
            banners: []
        }
    }
    componentDidMount() {
        axios.get('http://103.29.144.253:8092/api/v1/Home_banner')
          .then(response => {
            const banners = response.data.data;
            this.setState({ banners: banners });
          })
          .catch(error => {
            console.log(error)
        })
      } 
    render() {
        return (
            <section id="eight-banner" className="eight-banner-section position-relative">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="eight-banner-content">
                            <div className="banner-content-box appeight-headline pera-content">
                            {
                            this.state.banners && this.state.banners.length > 0 ?
                                    this.state.banners.map((banner, index)=>
                                            <h1 key={banner.id}>{banner.title}
                                                <span className="cd-words-wrapper">
                                                    <b className="is-visible"></b>
                                                    <b>showcase</b>
                                                    <b>screenshoot</b>
                                                </span>
                                            </h1>
                                    )
                            :
                            null
                            }
                             {
                            this.state.banners && this.state.banners.length > 0 ?
                                    this.state.banners.map((banner, index)=>
                                            <p key={banner.id}>{banner.description}
                                            </p>
                                    )
                            :
                            null
                            }
                            <div className="app-down-btn" style={{marginTop:"30px"}}>
                                <a href="https://play.google.com/store/apps"><img src="assets/img/app-landing/shape/btn1.png" alt="xaxa"/></a>
                                <a href="https://apps.apple.com/mn/app/ail/id1547983699" style={{margin:"13px"}}><img src="assets/img/app-landing/shape/btn2.png" alt="xaxa"/></a>
                            </div>
                                  
                            </div>
                            <div className="ei-banner-mbl-mockup wow fadeInRight" data-wow-delay="600ms" data-wow-duration="1500ms">
                            {
                            this.state.banners && this.state.banners.length > 0 ?
                                    this.state.banners.map((banner, index)=>
                                        <img key={banner.id} src={`${process.env.REACT_APP_API_URL}/storage/app/media${banner.image}`} alt="bannerzurag oruulah"/>
                                    )
                            :
                            null
                            }
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
        )
    }
}

export default Banner;