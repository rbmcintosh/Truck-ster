import React, { Component } from 'react';
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

function ListOfTrucks (props) {
  
  let truckDivs = props.trucks.map(function(truck) {
    return (
      <div className="single-card">
           
        <div id="gallery">
          <div id="image_div">
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
        <div className="gps">Location{truck.location}
          <div id="map_wrapper">
            <div id="map">
            </div>
          </div>
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