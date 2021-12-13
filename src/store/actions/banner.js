import * as actionTypes from "./actionTypes";
import axios from "../../axios";

export const fetchBannerFail = (error) => {
  return {
    type: actionTypes.FETCH_BANNERS_FAIL,
    error: error,
  };
};

export const fetchBannerStart = () => {
  return {
    type: actionTypes.FETCH_BANNERS_START,
  };
};

export const fetchBannerSuccess = (data) => {
  return {
    type: actionTypes.FETCH_BANNERS_SUCCESS,
    bannerData: data.data,
  };
};

export const fetchBanner = () => {
  return (dispatch) => {
    dispatch(fetchBannerStart());
    axios
      .get("/api/v1/Home_banner")
      .then((response) => {
        dispatch(fetchBannerSuccess(response.data.data));
        console.log("redux anh udaa turshij vzew",response.data.data)
      })
      .catch((error) => {
        dispatch(fetchBannerFail(error));
      });
  };
};
