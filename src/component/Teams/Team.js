import React ,{Component} from 'react';
import axios from 'axios';
class Team extends Component {
    constructor(props) {
        super(props)
        this.state = {
            teams_garchig: []
        }
    }
    componentDidMount() {
        axios.get('http://103.29.144.253:8092/api/v1/Toon_vzvvlelt_zurag')
          .then(response => {
            const teams_garchig = response.data.data;
            this.setState({ teams_garchig: teams_garchig });
          })
          .catch(error => {
            console.log(error)
        })
    } 
    render() {
        return (
            <section id="fun-fact" className="eg-fun-fact-section position-relative">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="eg-funfact-content clearfix position-relative">
                            <div className="eg-fun-fact-mockup wow fadeFromLeft" data-wow-delay="300ms" data-wow-duration="1500ms">
                                <div className="main-mockup">
                                    {/* {
                                    this.state.teams_garchig && this.state.teams_garchig.length > 0 ?
                                        this.state.teams_garchig.map((teams_garchig, index)=>
                                            <img key={teams_garchig.id} src={`${process.env.REACT_APP_API_URL}/storage/app/media${teams_garchig.image_neg}`} alt="xaxa"/>
                                        )
                                    :
                                    null
                                    }         
                                    {
                                    this.state.teams_garchig && this.state.teams_garchig.length > 0 ?
                                        this.state.teams_garchig.map((teams_garchig, index)=>
                                            <img key={teams_garchig.id} src={`${process.env.REACT_APP_API_URL}/storage/app/media${teams_garchig.image_hoyor}`} alt="xaxa"/>
                                        )
                                    :
                                    null
                                    }          */}
                                  {/* {
                                 this.state.teams_garchig && this.state.teams_garchig.length > 0 ?
                                    this.state.teams_garchig.map((teams_garchig, index)=>
                                        <img key={teams_garchig.id} src={`${process.env.REACT_APP_API_URL}/storage/app/media${teams_garchig.image_guraw}`} alt="alt"/>
                                    )
                                 :
                                 null
                                }          */}
                                </div>
                                <div className="fn-shape fn-shape-item3" data-parallax='{"x" : -50}'>
                                    <img src="assets/img/app-landing/shape/fc1.png" alt="xaxa"/>
                                </div>
                                <div className="fn-shape fn-shape-item4" data-parallax='{"x" : -40}'>
                                    <img src="assets/img/app-landing/shape/fc2.png" alt="xaxa"/>
                                </div>
                            </div>
                            <div className="eg-funfact-text float-right wow fadeFromRight" data-wow-delay="300ms" data-wow-duration="1500ms">
                                <div className="eight-section-title appeight-headline pera-content text-left">
                                {
                                this.state.teams_garchig && this.state.teams_garchig.length > 0 ?
                                    this.state.teams_garchig.map((teams_garchig, index)=>
                                            <h2 key={teams_garchig.id}>{teams_garchig.teams_garchig}
                                            </h2>
                                    )
                                :
                                null
                                }
                                 {
                                this.state.teams_garchig && this.state.teams_garchig.length > 0 ?
                                    this.state.teams_garchig.map((teams_garchig, index)=>
                                            <p key={teams_garchig.id}>{teams_garchig.teams_tailbar}
                                            </p>
                                    )
                                :
                                null
                                }
                                </div>
                                        <div className="fun-fact-counter position-relative clearfix">
                                            <div className="eg-counter-number pera-content text-center">
                                                <span className="odometer" data-count="20">2000</span><strong>+</strong>
                                                <p>Application таталтын тоо</p>
                                            </div>
                                            <div className="eg-counter-number pera-content text-center">
                                                <span className="odometer" data-count="2000">3000</span><strong>+</strong>
                                                <p>Нэвтрүүлсэн сөх тоо</p>
                                            </div>
                                            <div className="eg-counter-number pera-content text-center">
                                            <span className="odometer" data-count="5000">4000</span><strong>+</strong>
                                                <p>Нийт өрхын тоо</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="fn-bg-shape position-absolute"><img src="assets/img/app-landing/shape/fns1.png" alt="xaxa"/></div>
                </section>
        )
    }
}

export default Team;