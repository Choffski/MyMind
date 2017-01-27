import React, { Component } from 'react';
import { View, Image, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { getChannelInfo, follow } from '../actions/categoryActions';

import HeaderBar from '../components/shared/HeaderBar';
import NewsList from '../components/news/NewsList';
import NewsSubHeader from '../components/news/NewsSubHeader';
import NewsDetails from '../components/news/NewsDetails';

class News extends Component {

  constructor(props){
    super(props)
    this.props.dispatch(getChannelInfo(this.props.category));
    // this._toggleFollow = this._toggleFollow.bind(this);
  }

_toggleFollow = () =>{
  this.props.dispatch(follow(this.props.channel.name))
}

_openArticle = (index) =>{
  this.props.navigator.push({
    title:`${this.props.channel.name} Channel`.toUpperCase(),
    component: NewsDetails,
    leftButtonIcon: {uri:'icon_navbar_close'},
    tintColor: 'white',
    titleTextColor: 'white',
    navigationBarHidden : false,
    barTintColor: '#A175D3',
    passProps:{article: this.props.articles[index], category:this.props.channel.name},
    onLeftButtonPress: () => this.props.navigator.pop()
  })
}

render(){
    return (
      <View style={styles.container}>
      <ScrollView automaticallyAdjustContentInsets={true} contentContainerStyle={styles.ScrollView}>
          <NewsSubHeader
            following={this.props.channel.following}
            followers={this.props.channel.followers}
            handleClick={this._toggleFollow}
            name={this.props.channel.name} />

          <View style={styles.content}>
            <NewsList articles={this.props.articles} handleClick={this._openArticle}/>
        </View>
      </ScrollView>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  content:{
    flex:70,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: 'rgba(0,0,0,0)',
    },
  scrollView: {
    justifyContent: 'flex-start',
    alignItems: 'stretch'
  }
});
const mapStateToProps = (store) => {
  return{
    articles: store.news.currentNews,
    channel: store.category.openChannel
  }
};

export default connect(mapStateToProps)(News);
