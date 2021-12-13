import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
    bannerData: null,
  loading: true,
};

const fetchBannerStart = (state, action) => {
  return updateObject(state);
};

const fetchBannerFail = (state, action) => {
  return updateObject(state);
};

const fetchBannerSuccess = (state, action) => {
  return updateObject(state, {
    bannerData: action.bannerData,
    loading: false,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_BANNERS_START:
      return fetchBannerStart(state, action);
    case actionTypes.FETCH_BANNERS_SUCCESS:
      return fetchBannerSuccess(state, action);
    case actionTypes.FETCH_BANNERS_FAIL:
      return fetchBannerFail(state, action);
    default:
      return state;
  }
};

export default reducer;
