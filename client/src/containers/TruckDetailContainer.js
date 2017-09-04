import {connect} from "react-redux";
import TruckDetail from "../components/TruckDetail";
import {deleteTruck} from "../actions"

function mapStateToProps(state){
  return {
    trucks: state.trucks
  }
}

const TruckDetailContainer = connect(mapStateToProps)(TruckDetail);

export default TruckDetailContainer;