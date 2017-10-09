import React, { Component } from 'react';
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import SimpleMap from "./SimpleMap";


function ListOfTrucks (props) {
  
  let truckDivs = props.trucks.map(function(truck) {
    return (
      <div className="single-card">
        <div id="gallery">
          <div id="image_div">
            <img className="img" src={truck.image} /> 
          </div>
        <div id="button_wrapper">
          <button id="img_slide_left">&#10094;</button>
          <button id="img_slide_right">&#10095;</button>
        </div>
      </div>
      <p id="name" className="card_text">
        {truck.name}
      </p>
      <p id="blurb" className="card_text">
        {truck.description}
      </p>
      <div id="map">
        <SimpleMap />
      </div>
        <div className="website">
          Website - {truck.website}
        </div>
        <div className="color">
          Color - {truck.color}
        </div>
        <Link to={"/truck/" + truck._id}>More</Link>
      </div>
    );
  });

  
  
  return (
    <div>
      {truckDivs}
    </div>
  );
}


ListOfTrucks.propTypes = {
  trucks: PropTypes.array.isRequired
};

export default ListOfTrucks;