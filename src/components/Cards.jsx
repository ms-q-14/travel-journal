import React from "react";

function Cards(props) {
  return (
    <div className="cards">
      <img src={props.location.img} className="cardImg" />
      <div className="location">
        <i class="bi bi-map">
          {props.location.country}
          <a
            href={props.location.mapLocation}
            target="_blank"
            className="location__google__map"
          >
            View on Google Maps
          </a>
        </i>
        <h1 className="location__name">{props.location.location}</h1>
        <h4>{props.location.date}</h4>
        <p className="location__description">{props.location.description}</p>
      </div>
    </div>
  );
}

export default Cards;
