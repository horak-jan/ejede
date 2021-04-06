import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

export class PobockaMap extends Component {
  render() {
    return (
      <Map
        style={{
          width: "100%",
          height: "60vh",
          position: "relative",
          top: "-20px",
        }}
        google={this.props.google}
        initialCenter={{
          lat: this.props.lat,
          lng: this.props.lng,
        }}
        zoom={14}
      >
        <Marker
          onClick={this.onMarkerClick}
          name={this.props.link}
          position={{ lat: this.props.lat, lng: this.props.lng }}
        />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCKpl7eKy5fgRH8t6wKpYip1jVzr9EsTCQ",
})(PobockaMap);
