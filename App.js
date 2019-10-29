/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { PureComponent } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {setAxios} from './src/http/setAxios'


import { Provider } from 'react-redux'

import AppNavigator from './src/index'

import store from './src/store/index'

class App extends PureComponent {

  componentDidMount(){
    setAxios();
  }

  render() {

    return (
      <Provider store = {store}>
        <View style={{ flex: 1 }}>
          <AppNavigator />
        </View>
      </Provider>

    )

  }

}

export default App;
