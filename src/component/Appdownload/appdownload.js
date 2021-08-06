import React ,{Component} from 'react';
import axios from 'axios';

class Appdownload extends Component {
    constructor(props) {
        super(props)
        this.state = {
            appdownload_title: []
        }
    }
    componentDidMount() {
        axios.get('http://103.29.144.253:8092/api/v1/App_download')
          .then(response => {
            const appdownload_title = response.data.data;
            this.setState({ appdownload_title: appdownload_title });
          })
          .catch(error => {
            console.log(error)
        })
      } 
    render() {
        return (
            <section id="ei-appdownload" className="ei-appdownload-section position-relative" data-background="assets/img/app-landing/background/appbg1.png">
        <div className="container">
            <div className="ei-appdownload-content">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="ei-app-mockup-img  wow fadeFromRight" data-wow-delay="300ms" data-wow-duration="1500ms">
                            <img src="assets/img/app-landing/mockup/amu2.png" alt=""/>
                            {/* {
                            this.state.appdownload_title && this.state.appdownload_title.length > 0 ?
                                    this.state.appdownload_title.map((appdownload_title, index)=>
                                        <img key={appdownload_title.id} src={`${process.env.REACT_APP_API_URL}/storage/app/media${appdownload_title.appdownload_image}`} alt=""/>
                                    )
                            :
                            null
                            } */}
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="ei-app-down-text wow fadeFromLeft" data-wow-delay="600ms" data-wow-duration="1500ms">
                            <div className="eight-section-title appeight-headline pera-content text-left">
                                <span className="eg-title-tag">
                                {
                            this.state.appdownload_title && this.state.appdownload_title.length > 0 ?
                                    this.state.appdownload_title.map((appdownload_title, index)=>
                                            <h2 key={appdownload_title.id}>{appdownload_title.appdownload_title}
                                            </h2>
                                    )
                            :
                            null
                            }      Application татах<i className="square-shape"><i></i><i></i><i></i><i></i></i>
                                </span>
                              
                            {
                            this.state.appdownload_title && this.state.appdownload_title.length > 0 ?
                                    this.state.appdownload_title.map((appdownload_title, index)=>
                                            <p key={appdownload_title.id}>{appdownload_title.appdownload_description}
                                            </p>
                                    )
                            :
                            null
                            }
                            </div>
                            <div className="app-down-btn">
                                <a href="https://apps.apple.com/mn/app/ail/id1547983699"><img src="assets/img/app-landing/shape/btn1.png" alt=""/></a>
                                <a href="https://apps.apple.com/mn/app/ail/id1547983699"><img src="assets/img/app-landing/shape/btn2.png" alt=""/></a>
                            </div>
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
}

export default Appdownload;