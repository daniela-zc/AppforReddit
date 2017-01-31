import { combineReducers } from 'redux';

// Set an initial state
const initialState = {
  category: "Images",
  results: {},
  isFetchingResults : false,
  sendPost : {}
}

const RedditApp = (state = initialState , action) => {
  switch (action.type) {
    case 'SET_CATEGORY':
      return { ...state, category: action.category }
    case 'SET_RESULTS':
      return { ...state, results: action.results }  
    case 'REQUEST_POSTS':
      return Object.assign({}, state, {
        isFetchingResults: true,
      })
    case 'RECEIVE_POSTS':
      return Object.assign({}, state, {
        isFetchingResults: false,
        results: action.results,
      })
    case 'SEND_POST':
      return { ...state, sendPost: action.sendPost }
    default:
      return state
  }
}


export default RedditApp

