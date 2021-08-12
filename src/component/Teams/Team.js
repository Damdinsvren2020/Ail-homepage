import React ,{Component} from 'react';
import axios from 'axios';
class Team extends Component {
    constructor(props) {
        super(props)
        this.state = {
            teams_garchig: [],
            teams_zurag:[],
            zurag_neg:[],
            teams_zurattailbar:[]
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
        axios.get('http://103.29.144.253:8092/api/v1/Toon_vzvvlelt_zurag')
          .then(response => {
            const teams_zurag = response.data.data;
            this.setState({ teams_zurag: teams_zurag });
          })
          .catch(error => {
            console.log(error)
        })
        axios.get('http://103.29.144.253:8092/api/v1/Toon_vzvvlelt_zurag')
          .then(response => {
            const zurag_neg = response.data.data;
            this.setState({ zurag_neg: zurag_neg });
          })
          .catch(error => {
            console.log(error)
        })
        axios.get('http://103.29.144.253:8092/api/v1/Toon_vzvvlelt_zurag')
        .then(response => {
          const teams_zurattailbar = response.data.data[0];
          this.setState({ teams_zurattailbar: teams_zurattailbar });
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
                                {
                                    this.state.teams_zurag && this.state.teams_zurag.length > 0 ?
                                    this.state.teams_zurag.map((teams_zurag, index)=>
                                        <img key={teams_zurag.id} src={`${process.env.REACT_APP_API_URL}/storage/app/media${teams_zurag.image_neg}`} alt="teams_zurag_neg"/>
                                    )
                                 :
                                null
                                }         
                            </div>
                            <div className="fn-shape fn-shape-item1" data-parallax='{"y" : 50}'>
                            {
                                    this.state.zurag_neg && this.state.zurag_neg.length > 0 ?
                                    this.state.zurag_neg.map((zurag_neg, index)=>
                                        <img key={zurag_neg.id} src={`${process.env.REACT_APP_API_URL}/storage/app/media${zurag_neg.image_hoyor}`} alt="teams_zurag_hoyor"/>
                                    )
                                 :
                                null
                            }              
                            </div>
                            <div className="fn-shape fn-shape-item2" data-parallax='{"y" : 60}'>
                            {
                                    this.state.zurag_neg && this.state.zurag_neg.length > 0 ?
                                    this.state.zurag_neg.map((zurag_neg, index)=>
                                        <img key={zurag_neg.id} src={`${process.env.REACT_APP_API_URL}/storage/app/media${zurag_neg.image_guraw}`} alt="teams_zurag_hoyor"/>
                                    )
                                 :
                                null
                            }             
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
                                                <p style={{fontSize:"14px"}}>Application таталтын тоо</p>
                                            </div>
                                            <div className="eg-counter-number pera-content text-center">
                                                <span className="odometer" data-count="2000">10</span><strong>+</strong>
                                                <p style={{fontSize:"14px"}}>Нэвтрүүлсэн сөх тоо</p>
                                            </div>
                                            <div className="eg-counter-number pera-content text-center">
                                            <span className="odometer" data-count="5000">4108</span><strong>+</strong>
                                                <p style={{fontSize:"14px"}}>Нийт өрхын тоо</p>
                                            </div>
                                            <div className="eg-counter-number pera-content text-center">
                                            <span className="odometer" data-count="5000">10000</span><strong>+</strong>
                                                <p style={{fontSize:"14px"}}>Нийт хэрэглэгч</p>
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