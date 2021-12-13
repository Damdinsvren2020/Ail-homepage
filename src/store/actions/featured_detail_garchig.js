import * as actionTypes from "./actionTypes";
import axios from "../../axios";

export const fetchFeatured_detail_garchigFail = (error) => {
  return {
    type: actionTypes.FETCH_SONGOH_SHALTGAAN_GARCHIG_FAIL,
    error: error,
  };
};

export const fetchFeatured_detail_garchigStart = () => {
  return {
    type: actionTypes.FETCH_SONGOH_SHALTGAAN_GARCHIG_START,
  };
};

export const fetchFeatured_detail_garchigSuccess = (data) => {
  return {
    type: actionTypes.FETCH_SONGOH_SHALTGAAN_GARCHIG_SUCCESS,
    featured_garchig_Data: data.data,
  };
};

export const fetchFeatured_detail_garchig = () => {
  return (dispatch) => {
    dispatch(fetchFeatured_detail_garchigStart());
    axios
      .get("api/v1/Bidniig_songoh_shaltaan")
      .then((response) => {
        dispatch(fetchFeatured_detail_garchigSuccess(response.data.data));
        console.log("response data shalgasiin maa",response.data.data);
      })
      .catch((error) => {
        dispatch(fetchFeatured_detail_garchigFail(error));
      });
  };
};
