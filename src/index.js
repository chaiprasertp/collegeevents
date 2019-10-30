import React, { Component } from "react";
import ReactDOM from "react-dom";
import EventHolder from "./components/eventHolder/eventholder.js";
class App extends Component {

  // generateEvents() {
  //   console.log("Hmm");
  //   return (events.map((item) => (
  //     <Event eventName={item.eventName}
  //       eventTime={item.eventTime}
  //       eventLocation={item.eventLocation}
  //       eventDesc={item.eventDesc}
  //     />
  //   )));
  //}

  render() {
    return (
      <div>
        <EventHolder />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
