import BlockResult from "../components/BlockResult";
//import ToShareEmail from "../components/ToShareEmail";
import {sendPost } from '../actions'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    results: state.results
  }
}

const mapDispatchToProps = (dispatch) => { 
  return {
    // TODO: improve this !
    onSendPost: (post) => {
      var title = post.title;
      var category = post.subreddit;
      var image_url = post.url;
      var link_post = post.permalink;
      window.location='mailto:?subject=App4reddit - Sharing post “title”&body=I thought you might find this information interesting: ' + link_post;
    }
  }
}

const ContainerResult = connect(
  mapStateToProps,
  mapDispatchToProps
)(BlockResult)

 export default ContainerResult
