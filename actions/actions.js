import {
  FETCHING_DATA,
  FETCHING_DATA_SUCCESS,
  FETCHING_DATA_FAILURE
} from '../constants';

export function getWeather(zip) {
  return (dispatch) => {
    dispatch ({
      type: FETCHING_DATA,
      isFetching: true
    });
      let getMikeNaked = getWeatherData(zip);
      if (getMikeNaked) {
        dispatch({
          type: FETCHING_DATA_SUCCESS,
          payload: getMikeNaked
      })
    }
  }
}

function getWeatherData (zip) {
  let url = "http://api.openweathermap.org/data/2.5/weather?zip=" + zip + "&appid=63a6f4c343335f65e9803ad48c03abf6&units=imperial";
  fetch(url)
    .then(response => response.json())
    .then((response) => {
      console.log(response);
      return response
  })
  .catch((error) => {
    console.log('errorDan',error);
  })
}
