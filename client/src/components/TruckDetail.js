import React from "react";

function TruckDetail(props) {
  const truckId = props.match.params.id;
  const truck = props.trucks.find(v => v._id == truckId) || {};
  return (
    <div>
      <body>
        <header id="profile_page_header">
          <h1 id="profile_h1" class="animated rollIn">Your information</h1>
          <p id="subtext">Update your status, location and general info.</p>
        </header>
        <nav id="menu">
          <a class="menu-items" href="">About</a>
          <a class="menu-items" href="">Contact</a>
          <a class="menu-items" href="index.html">Home</a>
        </nav>
        <div id="open_closed_div">
          <a href="">
            <button class="" id="open">
              <h3>YES!</h3>
              <p class="state">We're open</p>
            </button>
          </a>
        </div>
        <div id="empty">
        </div>
      </body>
    </div>
  )
}

export default TruckDetail;