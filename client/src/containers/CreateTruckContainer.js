import {connect} from "react-redux";
import CreateTruck from "../components/CreateTruck";
import {createTruck} from "../actions"

function mapDispatchToProps(dispatch){
  return {
    createTruck: function(id) {
      dispatch(createTruck(id));
    }
  }
}

const CreateTruckContainer = connect(null,mapDispatchToProps)(CreateTruck);


export default CreateTruckContainer;