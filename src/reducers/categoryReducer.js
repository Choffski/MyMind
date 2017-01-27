const initialState = {
  allCategories:[],
  availableCategories:[],
  openChannel:{}
};

const _filter = (state,index) =>{
    if(index === 0){
    return state.allCategories.filter(item => item.following);
  } else if (index === 1){
    return state.allCategories.filter(item => item.tags.includes('popular'));
  } else return state.allCategories;
}

const _follow = (state, channel) => {
   let temp = Object.assign({},state.openChannel);
   temp.following = !temp.following;
   temp.followers = (temp.following)? temp.followers+1 : temp.followers-1
   return temp;
}

const _followArr = (arr, obj) =>{
  let index = arr.findIndex(item => item.name === obj.name);
  arr.splice(index,1);
  arr.splice(index,0, obj);
  return arr;
}

export default categoryReducer = (state = initialState, action) => {
  switch (action.type) {
  case "GET_CATEGORIES": {
    return {...state, allCategories:categories}
  }
  case "FILTER_CATEGORIES": {
    return {...state, availableCategories: _filter(state,action.payload)}
  }
  case "GET_CHANNEL_INFO": {
    return {...state, openChannel: action.payload}
  }
  case "TOGGLE_FOLLOW": {
    return {...state,
       openChannel: _follow(state, action.payload),
       allCategories: _followArr(state.allCategories, _follow(state, action.payload)),
       availableCategories: _followArr(state.availableCategories, _follow(state, action.payload))
        }
  }
    default: return state;
  }
}



var categories = [
  {
    name: 'Fashion',
    bgsrc: 'Thumbnail_channel_Fashion',
    tags: [],
    followers: 234021,
    following: true
  },
  {
    name: 'Science',
    bgsrc: 'Thumbnail_channel_Science',
    tags: ['popular'],
    followers: 23989,
    following: true
  },
  {
    name: 'Auto',
    bgsrc: 'Thumbnail_channel_Auto',
    tags: ['popular'],
    followers: 3982,
    following: true
  },
  {
    name: 'Technology',
    bgsrc: 'Thumbnail_channel_Technology',
    tags: ['popular'],
    followers: 3200,
    following: true
  },
  {
    name: 'Entertainment',
    bgsrc: 'Thumbnail_channel_Entertainment',
    tags: ['popular'],
    followers: 19,
    following: true
  },
  {
    name: 'Environment',
    bgsrc: 'Thumbnail_channel_Environment',
    tags: [],
    followers: 123,
    following: false
  },
  {
    name: 'Finances',
    bgsrc: 'Thumbnail_channel_Finance',
    tags: ['popular'],
    followers: 241232,
    following: false
  },
  {
    name: 'Travel',
    bgsrc: 'Thumbnail_channel_Travel',
    tags: ['popular'],
    followers: 22215221,
    following: false
  },
]
