import TripData from "./TripData";
import "./TripStyle.css";
import image1 from "../assets/2.jpg";
import image2 from "../assets/3.jpg";
import image3 from "../assets/4.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trip</h1>
      <p>You can discovery the trip plan using Goolge Map</p>
      <div className="tripcard">
        <TripData
          image={image1}
          heading="Nandi Hills"
          text="A perfect location to be one with nature, the hills are located 60kms away from the city. One the most popular viewpoint in Bangalore, Nandi Hills is one among the renowned places to visit in Bangalore for couples."
        />

        <TripData
          image={image2}
          heading="Attara Kacheri"
          text="The entrance of Cubbon Park beautifully houses the eye catching red coloured building that was built under the reign of the ruler, Tipu Sultan. "
        />
        <TripData
          image={image3}
          heading="Sankey Tank"
          text="A huge man-made tank located in West Bangalore, serves as one of the popular landmarks of the present. While the construction took place in the year 1882 during the wake of the Great Famine of 1876-78, the tank was built to be the solution for water scarcity. "
        />
      </div>
    </div>
  );
}

export default Trip;
