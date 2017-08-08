/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  ActivityIndicator,
  AppRegistry,
  Button,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import images from './cloudImgs/clouds';

export default class weatherLocator extends Component {
  constructor(props){
    super(props)
    this.state = {
      renderText: true,
      text: '',
      weather: {},
      weatherData: '',
      iconUrl: ''
    };
  }

  getWeather = () => {
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


  componentWillMount(){
    const weatherData = this.state.weather;
    let iconUrl;
    if (weatherData.weather) {
      const weatherIcon = weatherData.weather[0];
      iconUrl = "http://openweathermap.org/img/w/" + weatherIcon.icon + ".png";
      this.setState({iconUrl: iconUrl});
    }
  }

  render() {
    let weatherData = this.state.weather;
    let iconUrl;
    console.log(this.state);
    return (
      <View style={styles.container}>
          <Text style={styles.welcome}>
            Weather Locator
          </Text>
          <TextInput
            style={{height: 40, width: 100, borderColor: 'gray', borderWidth: 1}}
            keyboardType='numeric'
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
          />
        <Button title="Get weather" onPress={this.getWeather} />
        {weatherData.main ?
          <Text style={styles.details}>
            Current weather for {weatherData.name}
            {'\n'}
            Current temp: {weatherData.main.temp}°
            {'\n'}
            <Image style={{width: 100, height: 100}} source={iconUrl}></Image>
          </Text>
          : <Text>No data... yet!</Text>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  details: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('weatherLocator', () => weatherLocator);
