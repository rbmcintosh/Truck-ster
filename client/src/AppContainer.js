import App from "./App";
import "./App.css";
import {connect} from "react-redux";
import {loadTrucks} from "./actions";

function mapDispatchToProps(dispatch) {
  return {
    loadTrucks: function () {
      dispatch(loadTrucks());
    }
  };
}

export default connect(null,mapDispatchToProps)(App);
