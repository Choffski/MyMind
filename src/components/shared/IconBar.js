import React from 'react';
import { View, StyleSheet } from 'react-native';

export default IconBar = (props) =>{
  return(
  <View style={styles.iconBar}>
    {props.children}
  </View>
);
}

const styles = StyleSheet.create({
  iconBar: {
    paddingTop: 15,
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  }
})
