export default getWeather = () => {
    let zip = this.state.text;
    let url = "http://api.openweathermap.org/data/2.5/weather?zip=" + zip + "&appid=63a6f4c343335f65e9803ad48c03abf6&units=imperial";
    console.log(url);
    return fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({weather: responseJson});
      })
      .catch((error) => console.log(error))
}
