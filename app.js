import React from 'react';
import {
  TouchableHighlight,
  Button,
  View,
  Text,
  TextInput,
  StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import { getWeather } from './actions/actions';
import Weather from './Weather';

let styles;

const App = (props) => {

  console.log(props);

  return (
    <Weather { ...props } />
  )
}

function mapStateToProps (state) {
  return {
    appData: state.appData
  }
}

// function mapDispatchToProps (dispatch) {
//   return {
//     getWeather: () => dispatch(getWeather())
//   }
// }

export default connect(
  mapStateToProps,
  { getWeather }
)(App)
