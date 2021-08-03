import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  homebannerData: null,
  loading: true
};

const fetchHomeBannertart = (state, action) => {
  return updateObject(state);
};

const fetchHomeBannerFail = (state, action) => {
  return updateObject(state);
};

const fetchHomeBanneruccess = (state, action) => {
  return updateObject(state, { 
    homebannerData: action.homebannerData,
    loading: false,
    });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_HOMEBANNER_START:
      return fetchHomeBannertart(state, action);
    case actionTypes.FETCH_HOMEBANNER_SUCCESS:
      return fetchHomeBanneruccess(state, action);
    case actionTypes.FETCH_HOMEBANNER_FAIL:
      return fetchHomeBannerFail(state, action);
    default:
      return state;
  }
};

export default reducer;
