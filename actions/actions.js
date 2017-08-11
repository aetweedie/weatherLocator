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
      let getCurrentWeather = getWeatherData(zip);
      if (getCurrentWeather) {
        dispatch({
          type: FETCHING_DATA_SUCCESS,
          payload: getCurrentWeather
      })
    }
  }
}

function getWeatherData (zip) {
  let url = "http://api.openweathermap.org/data/2.5/weather?zip=" + zip + "&appid=***API KEY GOES HERE***&units=imperial";
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
