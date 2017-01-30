import React from 'react';
import { StyleSheet } from 'react-native';
import Button from 'react-native-button';
import Dimensions from 'Dimensions';


export default RoundButton = (props) =>{
return(
  <Button style={props.active? styles.active :styles.default} onPress={() => props.handleClick(props.index)}>
    {props.name}
  </Button>
  );
}

export const PinkButton = (props) => {
  return(
    <Button style={styles.pink} onPress={ ()=>props.handleClick() }>
      {props.following? 'Following': 'Follow'}
    </Button>
  )
}

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  default:{
    width: (width/4),
    color: '#999',
    fontSize: 12,
    borderRadius: 18,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: 'rgba(0,0,0,0)',
  },
  active:{
    width: (width/4),
    color: 'white',
    fontSize:12,
    borderStyle: 'solid',
    borderColor: '#E6528A',
    borderWidth: 1,
    borderRadius: 18,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: 'rgba(0,0,0,0)',
  },
  pink:{
    width: (width/4),
    color: 'white',
    fontSize: 12,
    borderStyle: 'solid',
    borderColor: '#E6528A',
    borderWidth: 1,
    borderRadius: 18,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#E6528A',
  }
})

// export default RoundButton;
