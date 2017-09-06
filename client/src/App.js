import React, { Component } from "react";
import "./App.css";
import ListOfTrucksContainer from "./containers/ListOfTrucksContainer";
import CreateTruckContainer from "./containers/CreateTruckContainer";
import LoginContainer from "./containers/LoginContainer";
import TruckDetailContainer from "./containers/TruckDetailContainer";
import HomeContainer from "./containers/HomeContainer";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {Link} from "react-router-dom";

class App extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    this.props.loadTrucks();
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={HomeContainer}/>
            <Route exact path="/login" component={LoginContainer}/>
            <Route exact path="/create" component={CreateTruckContainer}/>
            <Route path="/trucks" component={ListOfTrucksContainer} />
            <Route path="/truck/:id" component={TruckDetailContainer} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default (App);


