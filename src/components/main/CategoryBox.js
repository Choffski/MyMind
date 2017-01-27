import React from 'React';
import Dimensions from 'Dimensions';
import { View, Text, Image, StyleSheet, TouchableHighlight } from 'react-native';

const CategoryBox = (props) =>{
return (
  <View style={styles.box}>
    <TouchableHighlight onPress={() => props.handleClick(props.name)}>
      <Image
        style={styles.image}
        source={{uri: props.src}}/>
    </TouchableHighlight>
    <Text style={styles.text}>  {props.name.toUpperCase()} </Text>
  </View>
  );
};

const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  box:{
    width: (width / 2),
    height: (width / 2)
  },
  image:{
    position:'absolute',
    alignSelf:'center',
    top: 0,
    left: 0,
    width: (width / 2),
    height: (width / 2),
    zIndex: 0
  },
  text:{
    position: 'absolute',
    backgroundColor: 'transparent',
    bottom: 15,
    left:10,
    fontSize: 12,
    color: 'white',
    fontFamily: 'Helvetica Neue',
    zIndex: 5,
  }
})

export default CategoryBox;
