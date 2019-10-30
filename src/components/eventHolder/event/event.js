import React, { Component } from "react";
import "./event.css";

class Event extends Component {
  render() {
    return (
      <div className="eventBox mt-3 pt-3 pl-3">
        <p>{this.props.eventName}</p>
        {this.props.eventTime ? (
          <p>Time: {this.props.eventTime}</p>
        ) : (
            <p>All Day</p>
          )}
        <p>Location: {this.props.eventLocation}</p>
        <p>{this.props.eventDesc}</p>
      </div>
    );
  }
}

export default Event;
