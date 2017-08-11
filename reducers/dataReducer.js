import {
  FETCHING_DATA,
  FETCHING_DATA_SUCCESS,
  FETCHING_DATA_FAILURE
} from '../constants';

const initialState = {
  renderText: true,
  text: '',
  weather: {},
  iconUrl: '',
  dataFetched: false,
  isFetching: false,
  error: false
}

export default function dataReducer (state = initialState, action) {

  const { type, payload } = action;

  switch (type) {
    case FETCHING_DATA:
      return {
        ...state,
        isFetching: true
      }
    case FETCHING_DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        weather: payload
      }
    default:
      return state;
  }
};
