import React, { Component } from 'react';
import { NavigatorIOS, Text } from 'react-native';

import Main from './containers/Main';

class Navigator extends Component {
  render() {
    return(
      <NavigatorIOS
        initialRoute={{
          component: Main,
          title: '',
          titleImage:{uri:'Icon_navbar_Logo', resizeMode: 'contain'},
          barTintColor: '#A175D3',
          passProps: { myProp: 'foo' }
        }}
        style={{flex: 1}}
      />
    );
  }
}
export default Navigator;
