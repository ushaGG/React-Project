import "./DestinationStyle.css";
import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/2.jpg";
import DestinationData from "./DestinationData";

import Mountain3 from "../assets/5.jpg";
import Mountain4 from "../assets/8.jpg";

const Destination = () => {
  return (
    <div className="destination1">
      <h1>Popular Destination</h1>
      <p>The journey of a thousand miles begins with a single step.</p>
      <DestinationData
        class="frist-des"
        heading="Bangalore Palace"
        text=" Built by Chamaraja Wodeyar in the year 1887, Bangalore Palace is an inspired design by England’s Windsor Castle and is one of the best tourist places in Bangalore. The evocative palace comprises fortified arches, towers, Tudor-style architecture, and green lawns along with sophisticated wood carvings in the interior. It is where the royal family still resides at the present. This Tudor-style architectural creation is nothing less than an epitome. The palace has earned foundations that have been attributed to the Wodeyars of Mysore."
        image1={Mountain1}
        image2={Mountain2}
      />

      <DestinationData
        class="frist-des-reverse"
        heading="Ulsoor Lake"
        text=" The picturesque lake is spread over an area of 125 acres and is located in the heart of the city. Constructed by Kempegowda II, the lake offers boating facilities that are provided by the Karnataka State Tourism Development Corporation. A walking track situated around the lake is among the several places to see in Bangalore."
        image1={Mountain3}
        image2={Mountain4}
      />
    </div>
  );
};

export default Destination;
