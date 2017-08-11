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

import { Provider } from 'react-redux';
import configureStore from './configureStore';
import App from './app';

const store = configureStore();

const weatherLocator = () => (
  <Provider store={store}>
    <App zip='80023'/>
  </Provider>
)


AppRegistry.registerComponent('weatherLocator', () => weatherLocator);
