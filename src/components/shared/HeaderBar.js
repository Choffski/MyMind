import React from 'react';
import { View, StyleSheet } from 'react-native';

const HeaderBar = (props) => {
  return(
    <View style={styles.header}>
      {props.children}
    </View>
  );
}

const styles = StyleSheet.create({
  header:{
    flex:9,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#A175D3'
  }
})

export default HeaderBar;
