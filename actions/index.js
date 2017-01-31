import axios from "axios";

export const changeCategory = (category) => {
  return {
    type: 'SET_CATEGORY',
    category
  }
}

function requestPosts(category) {
  return {
    type: 'REQUEST_POSTS',
    category
  }
}

function receivePosts(category, response) {
  return {
    type: 'RECEIVE_POSTS',
    category,
    results: response.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}

export function fetchResults(category) {
  return function (dispatch) {
    dispatch(requestPosts(category))
      return axios.get(`http://www.reddit.com/r/${category}.json`)
        .then(function (response) {
          dispatch(receivePosts(category, response.data))
        })
        .catch(function (error) {
          console.log(error);
        });
  }
}

export const sendPost = (sendPost) => {
  return {
    type: 'SEND_POST',
    sendPost
  }
}
