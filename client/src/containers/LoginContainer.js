import {connect} from "react-redux";
import Login from "../components/Login";

function mapStateToProps(state){
  return {
    // trucks: state.trucks
  }
}

const LoginContainer = connect(mapStateToProps)(Login);

export default LoginContainer;