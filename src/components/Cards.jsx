import React from "react";

function Cards() {
  return (
    <div className="cards">
      <img
        src="https://www.airbelgium.com/wp-content/uploads/2021/10/Punta-Cana-2-1.jpg"
        className="cardImg"
      />
      <div className="location">
        <i class="bi bi-map">
          Punta Cana{" "}
          <a
            href="https://www.google.com/maps/place/Punta+Cana,+Dominican+Republic/@18.6407175,-68.4713458,11z/data=!3m1!4b1!4m5!3m4!1s0x8ea891645dcbfe77:0x61881cfaed12f6f3!8m2!3d18.5600761!4d-68.372535"
            target="_blank"
            className="location__google__map"
          >
            View on Google Maps
          </a>
        </i>
        <h1 className="location__name">Punta Cana</h1>
        <h4>27 Aug, 2022 - 1 Sept, 2022</h4>
        <p className="location__description">
          Sitting on the eastern tip of the Dominican Republic, Punta Cana is a
          sun-soaked coastal town consisting almost solely of beaches, resorts
          and tourist amenities.
        </p>
      </div>
    </div>
  );
}

export default Cards;
