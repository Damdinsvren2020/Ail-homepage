import React ,{Component} from 'react';
import axios from 'axios';
class Showcase extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showcaseneg: [],
            showcasehoyor:[],
            showcasebanner:[],
        }
    }
    componentDidMount() {
        axios.get('http://103.29.144.253:8092/api/v1/Show_case_neg')
          .then(response => {
            const showcaseneg = response.data.data;
            this.setState({ showcaseneg: showcaseneg });
          })
          .catch(error => {
            console.log(error)
        })
        axios.get('http://103.29.144.253:8092/api/v1/Show_case_hoyor')
        .then(response => {
          const showcase_hoyor_garchig = response.data.data;
          this.setState({ showcase_hoyor_garchig: showcase_hoyor_garchig });
        })
        .catch(error => {
          console.log(error)
      })
      axios.get('http://103.29.144.253:8092/api/v1/Case_guraw')
      .then(response => {
        const case_garchig_guraw = response.data.data;
        this.setState({ case_garchig_guraw: case_garchig_guraw });
      })
      .catch(error => {
        console.log(error)
    })
    axios.get('http://103.29.144.253:8092/api/v1/show_case_banner')
      .then(response => {
        const show_case_banner_text = response.data.data;
        this.setState({ show_case_banner_text: show_case_banner_text });
      })
      .catch(error => {
        console.log(error)
    })
    }
    render() {
        return (
            <section id="eight-service" className="eight-service-section position-relative">
            <div className="container">
                <div className="eight-service-slide   clearfix wow fadeFromLeft" data-wow-delay="300ms" data-wow-duration="1500ms">
                    <div className="ei-service-slide-btn ul-li-block clearfix">
                        <div className="banner-pager clearfix" id="banner-pager">
                            <a href="http://app.ail.mn/login?redirect=%2F" className="pager" data-slide-index="0">
                                <div className="ei-service-icon-text text-right appeight-headline pera-content">
                                    <div className="ei-service-icon float-right text-center">
                                        <i className="flaticon-bug"></i>
                                    </div>
                                    <div className="ei-service-text">
                                    {
                            this.state.showcaseneg && this.state.showcaseneg.length > 0 ?
                                    this.state.showcaseneg.map((showcaseneg, index)=>
                                            <h3 key={showcaseneg.id}>{showcaseneg.showcase_neg_garchig}
                                            </h3>
                                    )
                              :
                              null
                            }  
                              {
                            this.state.showcaseneg && this.state.showcaseneg.length > 0 ?
                                    this.state.showcaseneg.map((showcaseneg, index)=>
                                            <p key={showcaseneg.id}>{showcaseneg.showcase_neg_tailbar}
                                            </p>
                                    )
                              :
                              null
                            }  
                                </div>
                                </div>
                            </a>
                            <a href="http://app.ail.mn/login?redirect=%2F" className="pager" data-slide-index="1">
                                <div className="ei-service-icon-text text-right appeight-headline pera-content">
                                    <div className="ei-service-icon float-right text-center">
                                        <i className="flaticon-crop"></i>
                                    </div>
                                    <div className="ei-service-text">
                                    {
                            this.state.showcase_hoyor_garchig && this.state.showcase_hoyor_garchig.length > 0 ?
                                    this.state.showcase_hoyor_garchig.map((showcase_hoyor_garchig, index)=>
                                            <h3 key={showcase_hoyor_garchig.id}>{showcase_hoyor_garchig.showcase_hoyor_garchig}
                                            </h3>
                                    )
                            :
                            null
                            }  
                               {
                            this.state.showcase_hoyor_garchig && this.state.showcase_hoyor_garchig.length > 0 ?
                                    this.state.showcase_hoyor_garchig.map((showcase_hoyor_garchig, index)=>
                                            <p key={showcase_hoyor_garchig.id}>{showcase_hoyor_garchig.showcase_hoyor_tailbar}
                                            </p>
                                    )
                            :
                            null
                            }  
                                </div>
                                </div>
                            </a>
                            <a href="http://app.ail.mn/login?redirect=%2F" className="pager" data-slide-index="2">
                                <div className="ei-service-icon-text text-right appeight-headline pera-content">
                                    <div className="ei-service-icon float-right text-center">
                                        <i className="flaticon-web-development"></i>
                                    </div>
                                    <div className="ei-service-text">
                                    {
                            this.state.case_garchig_guraw && this.state.case_garchig_guraw.length > 0 ?
                                    this.state.case_garchig_guraw.map((case_garchig_guraw, index)=>
                                            <h3 key={case_garchig_guraw.id}>{case_garchig_guraw.case_garchig_guraw}
                                            </h3>
                                    )
                               :
                               null
                            }  
   {
                            this.state.case_garchig_guraw && this.state.case_garchig_guraw.length > 0 ?
                                    this.state.case_garchig_guraw.map((case_garchig_guraw, index)=>
                                            <p key={case_garchig_guraw.id}>{case_garchig_guraw.case_tailbar_guraw}
                                            </p>
                                    )
                               :
                               null
                            }  
        
                                 </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="eight-service-text position-relative appeight-headline wow fadeFromRight" data-wow-delay="300ms" data-wow-duration="1500ms">
                    <div class="ei-service-slide-mbl">
                         {
                    this.state.show_case_banner_text && this.state.show_case_banner_text.length > 0 ?
                            this.state.show_case_banner_text.map((show_case_banner_text, index)=>
                                <img key={show_case_banner_text.id} src={`${process.env.REACT_APP_API_URL}/storage/app/media${show_case_banner_text.image}`} alt="bannerzurag oruulah"/>
                            )
                                  :
                                 null
                                  }                 
                    </div>
                    {
                            this.state.show_case_banner_text && this.state.show_case_banner_text.length > 0 ?
                                    this.state.show_case_banner_text.map((show_case_banner_text, index)=>
                                            <h2 key={show_case_banner_text.id}>{show_case_banner_text.show_case_banner_text}
                                            </h2>
                                    )
                               :
                            null
                    }  
                </div>
            </div>
            <div className="s-shape-bg1" data-parallax='{"x" : -70}'>
                <img src="assets/img/app-landing/shape/s-shape3.png" alt="xaxa"/>
            </div>
            <div className="s-shape-bg2 text-center">
                <img src="assets/img/app-landing/shape/s-shape4.png" alt="xaxa"/>
            </div>
        </section>  
        )
    } 
}

export default Showcase;