import React, { Component } from 'react';
import {
  TouchableHighlight,
  Button,
  View,
  Text,
  TextInput,
  StyleSheet
} from 'react-native';

class Weather extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  handleClick() {
    let testing = this.props.getWeather(this.props.zip)
      //.then((response) => this.setState({weatherData: response}));
      console.log(testing);
  }

  render () {

    const {
      container,
      text,
      button,
      buttonText
    } = styles

    console.log(this.props);
    let weatherData = this.state.weatherData || {};

    return(
      <View style={container}>
        <Text style={text}>Weather Locator</Text>
          <TextInput
            style={styles.textInput}
            value={this.props.zip}
            keyboardType='numeric'
          />
        <Button title="Get weather" onPress={this.handleClick.bind(this)} />
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
    )
  }
}
//{height: 40, width: 100, borderColor: 'gray', borderWidth: 1}
styles = StyleSheet.create({
  container: {
    marginTop: 100
  },
  text: {
    textAlign: 'center'
  },
  button: {
    height: 60,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue'
  },
  buttonText: {
    color: 'white'
  },
  textInput: {
    height: 40,
    width: 100,
    borderColor: 'grey',
    borderWidth: 1
  }
});

export default Weather;
