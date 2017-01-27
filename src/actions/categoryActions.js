import * as types from './types';

export const getCategories = () => dispatch => {
  dispatch({type:types.GET_CATEGORIES});
}
export const filterCategories = (index) => dispatch => {
  dispatch({type:types.FILTER_CATEGORIES, payload:index})
}

export const getChannelInfo = (category) => dispatch => {
  dispatch({type:types.GET_CHANNEL_INFO, payload:category[0]});
  dispatch({type:types.GET_NEWS_WITH_CATEGORY, payload:category[0]});
}

export const follow = (channel) => dispatch =>{
  dispatch({type:types.TOGGLE_FOLLOW, payload:channel})
}
