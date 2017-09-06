import React from "react";
import {Link} from "react-router-dom";

class CreateTruck extends React.Component {
  constructor() {
    super();
    this.state = {
      truck: {
        name: "",
        description: "",
        website: "",
        lat: "",
        lon: "",
        color: "",
        image: ""
      },
    };
  }
  render() {
    return (
      // START
      <div>
        <header id="create_page_header">
          <h1 id="create_h1" class="animated rollIn">Create Profile</h1>
          <p id="subtext">Make your food discoverable.</p>
        </header>
        <nav id="menu">
          <Link to="/about"><a className="menu-items">About</a>
          </Link>
          <Link to="/contact"><a className="menu-items">Contact</a>
          </Link>
          <Link to="/login"><a className="menu-items">Login</a>
          </Link>
          <Link to="/"><a className="menu-items">Home</a>
          </Link>
        </nav>
        <form onSubmit={(e) => {
          e.preventDefault();
          if (this.props.createTruck) {
            this.props.createTruck(this.state);
          }
        }}>
        <div>
          <div className="input_div">
            Food truck name:<br /> <input className="input_field" onChange={(e) => {
              this.setState({
                name: e.target.value
              });
            }} />
          </div>
          <div className="input_div">
            Description (100 characters or less):<br /> <input className="input_field" onChange={(e) => {
              this.setState({
                description: e.target.value
              });
            }} />
          </div>
          <div className="input_div">
            Link to website:<br /> <input className="input_field" onChange={(e) => {
              this.setState({
                website: e.target.value
              });
            }} />
          </div>
          <div className="input_div">
            Location (latitude):<br /> <input className="input_field" onChange={(e) => {
              this.setState({
                latitude: e.target.value
              });
            }} />
            <br />Location (longitude):<br /> <input className="input_field" onChange={(e) => {
              this.setState({
                longitude: e.target.value
              });
            }} />
          </div>
        </div>
          <div className="input_div">
            Accent color:<br /> <input placeholder="choose a 6 digit hex number" className="input_field" onChange={(e) => {
              this.setState({
                color: e.target.value
              });
            }} />
          </div>
        <button id="done_button">Done!</button>
        </form>
      </div>
    // <!-- END TRUCK CREATION -->

      // END
    )
  }
}

export default CreateTruck;
