import SubHeader from "../components/SubHeader"
import {changeCategory, fetchResults } from '../actions'
import { connect } from 'react-redux'

const getCategories = (category) => {
  return category
}

const mapStateToProps = (state) => {
  return {
    category: getCategories(state.category)
  }
}

const mapDispatchToProps = (dispatch) => { 
  return {
    onChangeCategory: (category) => {
      // Update category selection
      dispatch(changeCategory(category));
      // Update results
      dispatch(fetchResults(category));
    }
  }
}

const SubHeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SubHeader)

export default SubHeaderContainer
