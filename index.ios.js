import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { AppRegistry } from 'react-native';

import store from './store'
import Navigator from './src/Navigator';

  class App extends Component {
    render(){
      return(
      <Provider store={store}>
        <Navigator />
      </Provider>
      );
    }
  }
// app entry
AppRegistry.registerComponent('MyMind',() => App );
