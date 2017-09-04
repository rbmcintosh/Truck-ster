import {connect} from "react-redux";
import ListOfTrucks from "../components/ListOfTrucks";
import {deleteTruck} from "../actions"

function mapStateToProps(state){
  return {
    trucks: state.trucks
  }
}

function mapDispatchToProps(dispatch){
  return {
    deleteTruck: function (id) {
      dispatch(deleteTruck(id));
    }
  }
}

const ListOfTrucksContainer = connect(mapStateToProps,mapDispatchToProps)(ListOfTrucks);

export default ListOfTrucksContainer;