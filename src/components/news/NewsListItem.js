import React from 'react';
import moment from 'moment';
import Dimensions from 'Dimensions';
import { View, StyleSheet, Image, Text, TouchableHighlight } from 'react-native';

import Iconbar from '../shared/IconBar';
import IconBlock from '../shared/IconBlock';

const NewsListItem = (props) => {
    return (
      <TouchableHighlight onPress={() => props.handleClick(props.index)}>
      <View style={styles.listItem}>
        <Text style={styles.headline}>
          {props.info.headline}
        </Text>
        <IconBar>
          <IconBlock iconsrc={'icon_list_source'} text={props.info.network}/>
          <IconBlock iconsrc={'icon_list_time'} text={moment(+props.info.timestamp * 1000).format('ll')}/>
        </IconBar>
      </View>
    </TouchableHighlight>
    );
  }
  const { width } = Dimensions.get('window');
  const styles = StyleSheet.create({
  listItem: {
    width: width,
    backgroundColor: 'white',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 15,
    borderStyle: 'solid',
    borderBottomColor: 'rgba(211,211,211,0.5)',
    borderBottomWidth: 1,
  },
  headline: {
    fontWeight: 'bold',
    fontSize: 16
  },
  iconBar: {
    paddingTop: 15,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  iconBlock:{
  paddingRight: 15,
  flexDirection: 'row',
  alignItems: 'flex-start',
  justifyContent: 'flex-start'
  },
  icon:{
    width: 12,
    height: 12
    },
  iconText: {
    fontSize: 10,
    paddingLeft: 5,
    textAlign: 'center'
  }
  });

  export default NewsListItem;
