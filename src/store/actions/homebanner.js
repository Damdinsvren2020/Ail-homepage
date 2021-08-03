import * as actionTypes from "./actionTypes";
import axios from "../../axios";

export const fetchHomeBannerFail = (error) => {
  return {
    type: actionTypes.FETCH_HOMEBANNER_FAIL,
    error: error,
  };
};

export const fetchHomeBannerStart = () => {
  return {
    type: actionTypes.FETCH_HOMEBANNER_START,
  };
};
 
export const fetchHomeBannerSuccess = (data) => {
  return {
    type: actionTypes.FETCH_HOMEBANNER_SUCCESS,
    homebannerData: data,
  };
};

export const fetchHomeBanner = () => {
  return (dispatch) => {
    dispatch(fetchHomeBannerStart());
    axios
      .get("/Home_banner")
      .then((response) => {
        dispatch(fetchHomeBannerSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchHomeBannerFail(error));
      });
  };
};
