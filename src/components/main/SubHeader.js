import React from 'react';
import { View, StyleSheet } from 'react-native';

import RoundButton from '../shared/RoundButton';

const buttons = ['Following', 'Popular', 'Explore'];
const SubHeader = (props) =>{
  return (
    <View style={styles.subHeader}>
        {buttons.map((button,key) => {
          return(<RoundButton key={key} index={key} name={button} handleClick={ props.handleClick} active={key === props.activeTab? true:false} />)
        })}
    </View>
  );
}
const styles = StyleSheet.create({
  subHeader:{
    flex:14,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
})
export default SubHeader;
