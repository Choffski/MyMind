import React from 'react';
import moment from 'moment';
import Dimensions from 'Dimensions';
import { View, ScrollView, Text, Image, StyleSheet } from 'react-native';

import Iconbar from '../shared/IconBar';
import IconBlock, {RightBlock} from '../shared/IconBlock';

const NewsDetails = (props) =>{
  return(
    <View style={styles.container}>
    <ScrollView automaticallyAdjustContentInsets={true} contentContainerStyle={styles.scrollView}>
        <Image style={styles.img} source={{uri:'background_article_header'}}>
        <Text style={styles.headline}> {props.article.headline}</Text>
        </Image>
        <View style={styles.content}>
          <View style={{alignItems :'stretch'}}>
            <IconBar>
              <IconBlock iconsrc={'icon_list_source'} text={props.article.network}/>
              <IconBlock iconsrc={'icon_list_time'}
               text={moment(+props.article.timestamp * 1000).format('ll')}/>
               <RightBlock text={props.category}/>
            </IconBar>
        </View>
          <Text style={styles.body}> {props.article.article}</Text>
        </View>
    </ScrollView>
  </View>
  );
}

const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'flex-start',
    alignItems: 'stretch'
  },
  img: {
    width: width,
    height: (height /3),
    alignItems:'center',
    justifyContent:'flex-end'
  },
  headline:{
    fontWeight: 'bold',
    fontSize: 16,
    color: 'white',
    backgroundColor:'rgba(0,0,0,0)',
    paddingBottom: 15
  },
  body:{
    fontSize: 14,
    color: 'rgb(29,29,38)',
  },
  scrollView: {
    justifyContent: 'flex-start',
    alignItems: 'stretch'
  },
  content:{
    padding: 15,
    flex:60,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: 'rgba(0,0,0,0)',
    }
});

export default NewsDetails;
