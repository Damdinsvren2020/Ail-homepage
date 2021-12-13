import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
    featured_garchig_Data: null,
  loading: true,
};

const fetchFeatured_detail_garchigStart = (state, action) => {
  return updateObject(state);
};

const fetchFeatured_detail_garchigFail = (state, action) => {
  return updateObject(state);
};

const fetchFeatured_detail_garchigSuccess = (state, action) => {
  return updateObject(state, {
    featured_garchig_Data: action.featured_garchig_Data,
    loading: false,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_SONGOH_SHALTGAAN_GARCHIG_START:
      return fetchFeatured_detail_garchigStart(state, action);
    case actionTypes.FETCH_SONGOH_SHALTGAAN_GARCHIG_SUCCESS:
      return fetchFeatured_detail_garchigSuccess(state, action);
    case actionTypes.FETCH_SONGOH_SHALTGAAN_GARCHIG_FAIL:
      return fetchFeatured_detail_garchigFail(state, action);
    default:
      return state;
  }
};

export default reducer;
