import React from "react";
import {Link} from "react-router-dom";

function Login(props) {
  return (
    <div>
      <header>
        <h1 id="mainText">Login</h1>
        {/* <p id="subtext">Own a food truck or food cart?</p> */}
      </header>
      <nav id="menu">
        <a className="menu-items" href="">About</a>
        <a className="menu-items" href="">Contact</a>
        <Link to="/"><a className="menu-items">Home</a>
        </Link>
      </nav>
      <main id="profile_manager">
        <Link to="/create">
          <button className="animated zoomIn circles" id="create_button">
            <h3>Create</h3>
            <p className="state">Profile</p>
          </button>
        </Link>
    
        <div id="login_div">
          <p id="login_title">Already have a profile? <br /><span id="bold_font">Login:</span></p>
          <input className="login_input" placeholder="user name"/>
          <input className="login_input" placeholder="password"/>
          <a href="profile.html">
            <button id="profile_access">
              <h3>Login</h3>
            </button>
          </a>
        </div>
      </main>
      <div id="empty">
      </div>
    
    </div>
  )
}

export default Login;