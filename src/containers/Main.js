import React, {Component} from 'react';
import { Image, View, ScrollView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { getCategories, filterCategories } from '../actions/categoryActions';
import CategoryBox from '../components/main/CategoryBox';
import SubHeader from '../components/main/SubHeader';
import HeaderBar from '../components/shared/HeaderBar';
import News from './News';

  class Main extends Component {
  // lifecycle
  constructor() {
    super();
    this.state = {
      activeTab:0
    }
    this._changeFilter = this._changeFilter.bind(this);
  }
  componentWillMount(){
    if(typeof this.props.availableCategories === 'undefined' || this.props.availableCategories.length === 0){
      this.props.dispatch(getCategories());
    }
  }
  componentDidMount(){
    this._changeFilter(0);
  }
    // functions
    _visibleCategories = () => {
      return this.props.availableCategories.map((item, key) => {
          return<CategoryBox key={key} handleClick={this._handleNav} src={item.bgsrc} name={item.name}/>
      });
    }
    _changeFilter = (index) =>{
      this.props.dispatch(filterCategories(index))
      this.setState({activeTab:index});
    }

    _handleNav = (category) => {
      this.props.navigator.push({
        titleImage:{uri:'Icon_navbar_Logo'},
        component: News,
        backButtonIcon: '',
        tintColor: 'white',
        navigationBarHidden : false,
        barTintColor: '#A175D3',
        passProps:{category: this.props.availableCategories.filter(item => item.name === category)}
      })
    }

    render(){
      return(
        <Image source={{uri:'bg'}} style={styles.container}>
          <HeaderBar/>
          <SubHeader activeTab={this.state.activeTab} handleClick={this._changeFilter}/>
          <View style={styles.content}>
              <ScrollView style={styles.scrollRow} contentContainerStyle={styles.scrollView} automaticallyAdjustContentInsets={false}
              alwaysBounceVertical={true}>
                { this._visibleCategories() }
              </ScrollView>
          </View>
        </Image>
      );
    }
  } // class ends

// styles
const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'flex-start',
    alignItems: 'stretch'
  },
  content:{
    flex:80,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: 'rgba(0,0,0,0)',
    },
  scrollView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start'
  },
  scrollRow: {
    flexDirection:'column'
  }
})

const mapStateToProps = (store) =>{
  return {
    availableCategories: store.category.availableCategories
    }
}

export default connect(mapStateToProps)(Main);
