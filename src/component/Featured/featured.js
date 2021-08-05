import React ,{Component} from 'react';
import axios from 'axios';

class Featured extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Songohshaltgaan: [],
            Songohshaltgaanneg:[],
            Songohshaltgaanhoyor:[],
            Songohshaltgaanguraw:[],
            Songohshaltgaanduruw:[],
        }
    }
    componentDidMount() {
        axios.get(`${process.env.REACT_APP_API_URL}api/v1/Bidniig_songoh_shaltaan`)          
        .then(response => {
            const Songohshaltgaan = response.data.data;
            this.setState({ Songohshaltgaan: Songohshaltgaan });
          })
          .catch(error => {
            console.log(error)
        })
        axios.get(`${process.env.REACT_APP_API_URL}api/v1/shaltgaan_aguulga_neg`) 
        .then(response => {
            const Songohshaltgaanneg = response.data.data;
            this.setState({ Songohshaltgaanneg: Songohshaltgaanneg });
          })
          .catch(error => {
            console.log(error)
        })    
        axios.get(`${process.env.REACT_APP_API_URL}api/v1/aguulga_hoyr`) 
        .then(response => {
            const Songohshaltgaanhoyor = response.data.data;
            this.setState({ Songohshaltgaanhoyor: Songohshaltgaanhoyor });
          })
          .catch(error => {
            console.log(error)
        })    
        axios.get(`${process.env.REACT_APP_API_URL}api/v1/aguulga_hoyr`) 
        .then(response => {
            const Songohshaltgaanhoyor = response.data.data;
            this.setState({ Songohshaltgaanhoyor: Songohshaltgaanhoyor });
          })
          .catch(error => {
            console.log(error)
        })    
        axios.get(`${process.env.REACT_APP_API_URL}api/v1/aguulga_guraw`) 
        .then(response => {
            const Songohshaltgaanguraw = response.data.data;
            this.setState({ Songohshaltgaanguraw: Songohshaltgaanguraw });
          })
          .catch(error => {
            console.log(error)
        })    
        axios.get(`${process.env.REACT_APP_API_URL}api/v1/aguulga_duruw`) 
        .then(response => {
            const Songohshaltgaanduruw = response.data.data;
            this.setState({ Songohshaltgaanduruw: Songohshaltgaanduruw });
          })
          .catch(error => {
            console.log(error)
        })    
    } 
    render() {
        return (
            <section id="feature-eight" className="feature-eight-section position-relative">
        <div className="container">
            <div className="eight-section-title appeight-headline pera-content text-center">
                <span className="eg-title-tag">
                    {/* Fetaured services <i className="square-shape"><i></i><i></i> <i></i> <i></i> </i> */}
                </span>
                        {
                            this.state.Songohshaltgaan && this.state.Songohshaltgaan.length > 0 ?
                                    this.state.Songohshaltgaan.map((Songohshaltgaan, index)=>
                                            <h2 key={Songohshaltgaan.id}>{Songohshaltgaan.title}
                                            </h2>
                                    )
                            :
                            null
                        }
                           {
                            this.state.Songohshaltgaan && this.state.Songohshaltgaan.length > 0 ?
                                    this.state.Songohshaltgaan.map((Songohshaltgaan, index)=>
                                            <h2 key={Songohshaltgaan.id}>{Songohshaltgaan.description}
                                            </h2>
                                    )
                            :
                            null
                        }
                </div>
                <div className="eight-feature-content">
                    <div className="row justify-content-md-center">
                        <div className="col-lg-3 col-md-6  wow fadeFromUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                            <div className="eight-feature-box text-center position-relative">
                                <div className="feature-icon8 position-relative">
                                    <i className="flaticon-logo"></i>
                                    <span className="ei-icon-bg"></span>
                                </div>
                                <div className="feature-text8 appeight-headline pera-content">
                                {
                            this.state.Songohshaltgaanneg && this.state.Songohshaltgaanneg.length > 0 ?
                                    this.state.Songohshaltgaanneg.map((Songohshaltgaanneg, index)=>
                                            <h2 key={Songohshaltgaanneg.id}>{Songohshaltgaanneg.shaltgaan_neg_garchig}
                                            </h2>
                                    )
                            :
                            null
                           }
                            {
                            this.state.Songohshaltgaanneg && this.state.Songohshaltgaanneg.length > 0 ?
                                    this.state.Songohshaltgaanneg.map((Songohshaltgaanneg, index)=>
                                            <h3 key={Songohshaltgaanneg.id}>{Songohshaltgaanneg.shaltgaan_neg_tailbar}
                                            </h3>
                                    )
                            :
                            null
                           }
                                </div>
                                <div className="ei-feature-more">
                                    <a href="ail.mn"><i className="fas fa-plus"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeFromUp" data-wow-delay="300ms" data-wow-duration="1500ms">
                            <div className="eight-feature-box text-center position-relative">
                                <div className="feature-icon8 position-relative">
                                    <i className="flaticon-computer"></i>
                                    <span className="ei-icon-bg"></span>
                                </div>
                                <div className="feature-text8 appeight-headline pera-content">
                                    {
                            this.state.Songohshaltgaanhoyor && this.state.Songohshaltgaanhoyor.length > 0 ?
                                    this.state.Songohshaltgaanhoyor.map((Songohshaltgaanhoyor, index)=>
                                            <h2 key={Songohshaltgaanhoyor.id}>{Songohshaltgaanhoyor.shaltgaan_hoyr_garchig}
                                            </h2>
                                    )
                            :
                            null
                           }
                             {
                            this.state.Songohshaltgaanhoyor && this.state.Songohshaltgaanhoyor.length > 0 ?
                                    this.state.Songohshaltgaanhoyor.map((Songohshaltgaanhoyor, index)=>
                                            <p key={Songohshaltgaanhoyor.id}>{Songohshaltgaanhoyor.shaltgaan_hoyr_tailbar}
                                            </p>
                                    )
                            :
                            null
                           }
                                </div>
                                <div className="ei-feature-more">
                                    <a href="ail.mn"><i className="fas fa-plus"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeFromUp" data-wow-delay="900ms" data-wow-duration="1500ms">
                            <div className="eight-feature-box text-center position-relative">
                                <div className="feature-icon8 position-relative">
                                    <i className="flaticon-pen-tool"></i>
                                    <span className="ei-icon-bg"></span>
                                </div>
                                <div className="feature-text8 appeight-headline pera-content">
                                {
                            this.state.Songohshaltgaanguraw && this.state.Songohshaltgaanguraw.length > 0 ?
                                    this.state.Songohshaltgaanguraw.map((Songohshaltgaanguraw, index)=>
                                            <h2 key={Songohshaltgaanguraw.id}>{Songohshaltgaanguraw.shaltgaan_guraw_garchig}
                                            </h2>
                                    )
                            :
                            null
                           }
                             {
                            this.state.Songohshaltgaanguraw && this.state.Songohshaltgaanguraw.length > 0 ?
                                    this.state.Songohshaltgaanguraw.map((Songohshaltgaanguraw, index)=>
                                            <p key={Songohshaltgaanguraw.id}>{Songohshaltgaanguraw.shaltgaan_guraw_tailbar}
                                            </p>
                                    )
                            :
                            null
                           }
                                </div>
                                <div className="ei-feature-more">
                                    <a href="#"><i className="fas fa-plus"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeFromUp" data-wow-delay="1200ms" data-wow-duration="1500ms">
                            <div className="eight-feature-box text-center position-relative">
                                <div className="feature-icon8 position-relative">
                                    <i className="flaticon-layers"></i>
                                    <span className="ei-icon-bg"></span>
                                </div>
                                <div className="feature-text8 appeight-headline pera-content">
                                {
                            this.state.Songohshaltgaanduruw && this.state.Songohshaltgaanduruw.length > 0 ?
                                    this.state.Songohshaltgaanduruw.map((Songohshaltgaanduruw, index)=>
                                            <h2 key={Songohshaltgaanduruw.id}>{Songohshaltgaanduruw.shaltgaan_duruw_garchig}
                                            </h2>
                                    )
                            :
                            null
                           }
                             {
                            this.state.Songohshaltgaanduruw && this.state.Songohshaltgaanduruw.length > 0 ?
                                    this.state.Songohshaltgaanduruw.map((Songohshaltgaanduruw, index)=>
                                            <p key={Songohshaltgaanduruw.id}>{Songohshaltgaanduruw.shaltgaan_duruw_tailbar}
                                            </p>
                                    )
                            :
                            null
                           }
                                </div>
                                <div className="ei-feature-more">
                                    <a href="#"><i className="fas fa-plus"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ei-feature-shape"><img src="assets/img/app-landing/shape/f-shape1.png" alt=""/>
        </div>
        </section>
        )
    }
}

export default Featured;