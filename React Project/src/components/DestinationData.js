import React from "react";
import "./DestinationStyle.css";
import { Component } from "react";
import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/2.jpg";

class DestinationData extends Component {
  render() {
    return (
      <div className={this.props.class}>
        <div className="des-text">
          <h2>{this.props.heading}</h2>
          <p>{this.props.text}</p>
        </div>
        <div className="image">
          <img alt="travel" src={this.props.image1} />
          <img alt="travel" src={this.props.image2} />
        </div>
      </div>
    );
  }
}

export default DestinationData;
