import {connect} from "react-redux";
import Home from "../components/Home";

function mapStateToProps(state){
  return {
    // trucks: state.trucks
  }
}

const HomeContainer = connect(mapStateToProps)(Home);

export default HomeContainer;