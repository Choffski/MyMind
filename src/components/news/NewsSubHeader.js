import React from 'react';
import Dimensions from 'Dimensions';
import { View, Image, Text,  StyleSheet } from 'react-native';

import { PinkButton } from '../shared/RoundButton';

const NewsSubHeader = (props) => {

    const formatFollowers = (number) =>{
      if( number / 1000 > 1){
        return Math.trunc(number/1000)+ 'K';
      } else return number % 1000
    }

    return(
      <Image
        style={styles.wrapper}
        source={
        //  {uri:`Background_channelheader_${props.category.name}`} // works
          {uri:'Background_channelheader_Science'}}
        resizeMode={'cover'} >
        <Text style={styles.channelName}> {`${props.name} Channel`.toUpperCase()}</Text>
        <PinkButton handleClick={props.handleClick} following={props.following}/>
        <Text style={styles.followers}>{`${formatFollowers(props.followers)} Followers`}</Text>
      </Image>
    );
}

const {height,width} = Dimensions.get('window');
const styles = StyleSheet.create({
  wrapper: {
    width:width,
    height: (height /4),
    alignItems:'center',
    justifyContent:'center'
  },
  channelName: {
    backgroundColor: 'rgba(0,0,0,0)',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 20
  },
  followers :{
    fontSize: 14,
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0)',
    marginTop: 20
  }
})

export default NewsSubHeader;
