import React, { Component } from 'react';
import featured from '../featured.css'
import axios from 'axios';
import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";
class detail_neg extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        let display = <div>...</div>;
        if (!this.props.loading) {
            display = this.props.featured_garchig_Data.map((item) => {
              return (
                  <div className="eight-section-title appeight-headline pera-content text-center">
                      <p className={featured.featuredh2}>{item.description}</p>
                  </div>
              );
            });
        }
        return (
                <div>
                <span className="eg-title-tag">
                </span>
                           {
                            this.state.Songohshaltgaan && this.state.Songohshaltgaan.length > 0 ?
                                    this.state.Songohshaltgaan.map((Songohshaltgaan, index)=>
                                            <p className={featured.featuredh2}   key={Songohshaltgaan.id}>{Songohshaltgaan.description}
                                            </p>
                                    )
                            :
                            null
                        }
                </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      featured_garchig_Data: state.featureddetailgarchig.featured_garchig_Data,
      loading: state.featureddetailgarchig.loading,
    };
};
export default connect(mapStateToProps)(detail_neg);