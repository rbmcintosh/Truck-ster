import React from "react";

function Login(props) {
  return (
    <div>
      <header>
        <h1 class="animated rollIn">Login</h1>
        <p id="subtext">Own a food truck or food cart?</p>
      </header>
      <nav id="menu">
        <a class="menu-items" href="">About</a>
        <a class="menu-items" href="">Contact</a>
        <a class="menu-items" href="index.html">Home</a>
      </nav>
      <main id="profile_manager">
        <a href="create.html">
          <button className="animated zoomIn circles" id="create_button">
            <h3>Create</h3>
            <p class="state">Profile</p>
          </button>
        </a>
    
        <div id="login_div">
          <p id="login_title">Already have a profile? <br /><span id="bold_font">Login:</span></p>
          <input class="login_input" value="user name"/>
          <input class="login_input" value="password"/>
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