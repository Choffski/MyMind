import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default IconBlock = (props) => {
  return(
    <View style={styles.iconBlock}>
      <Image style={styles.icon} source={{uri:props.iconsrc}}></Image>
      <Text style={styles.iconText}> {props.text} </Text>
    </View>
  )
}

export const RightBlock = (props) => {
  return(
  <View style={styles.rightBlock}>
    <Text style={styles.rightText}> {props.text.toUpperCase()} </Text>
  </View>
  )
}

const styles = StyleSheet.create({
iconBlock:{
  paddingRight: 15,
  flexDirection: 'row',
  alignItems: 'flex-start',
  justifyContent: 'flex-start'
},
rightBlock:{
  position: 'absolute',
  right: 15,
  bottom: 0,
},
icon:{
  width: 12,
  height: 12
  },
iconText: {
  fontSize: 10,
  paddingLeft: 5,
  textAlign: 'center'
},
rightText:{
  fontSize: 10,
  textAlign: 'center',
  textDecorationLine: 'underline'
}

})
