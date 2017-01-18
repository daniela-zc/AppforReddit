import BlockResult from "../components/BlockResult";
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    results: state.results
  }
}

const ContainerResult = connect(
  mapStateToProps
)(BlockResult)

 export default ContainerResult
