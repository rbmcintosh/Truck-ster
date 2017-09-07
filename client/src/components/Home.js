import React from "react";
import {Link} from "react-router-dom";

function Home(props) {
  return (
    <div>

        <header>
          <h1 id="mainText">Truckster</h1>
        </header>

      
        <nav id="menu">
          <a className="menu-items" href="">About</a>
          <a className="menu-items" href="">Contact</a>
          <Link to="/login"><a className="menu-items">Login | Create Profile</a>
          </Link>
        </nav>


        <div id="locations">
          <Link to="/trucks">
            <button className="animated zoomIn circles" id="cities-austin">
              <h3>Austin</h3>
              <p className="state">Texas</p>
            </button>
          </Link>

          <a href="./cards.html">
            <button className="circles" id="cities-portland" >
              <h3>Portland</h3>
              <p className="state">Oregon</p>
            </button>
            <p id="temp">coming soon</p>
          </a>

          <a href="./cards.html">
            <button className="circles" id="cities-nyc" >
              <h3>Other</h3>
              <p className="state">Cities</p>
            </button>
            <p id="temp">coming soon</p>
          </a>
        </div>

      
        <div id="empty">
        </div>

      
    </div>

  )
}

export default Home;