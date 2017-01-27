import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import NewsListItem from './NewsListItem';

const NewsList = (props) => {

  const _populateList = () => {
    return props.articles.map((item, key) => {
      return(<NewsListItem info={item} index={key} key={key} handleClick={props.handleClick} />)
    })
  }
    return (
      <View style={styles.list}>
        { _populateList().length !== 0?
          _populateList() : <Text style={styles.noNews}> No Recent News</Text>
        }
      </View>
    );
  }

const styles = StyleSheet.create({
  list:{
    flex:1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  noNews:{
    fontSize: 16,
    paddingTop: 50,
    alignSelf: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'rgba(211,211,211,0.7)',
    textDecorationLine: 'underline'

  }
});

export default NewsList;
