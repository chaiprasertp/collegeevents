import React, { Component } from "react";
import ReactDOM from "react-dom";
import Event from "./event/event.js";

class EventHolder extends Component {
    render() {
        return (
            <div className="container">
                <Event eventName="Pizza Party"
                    eventTime="9am"
                    eventLocation="Hec 201"
                    eventDesc="Enjoy the free pizza"
                />
                <Event eventName="Pizza Party"
                    eventTime="9am"
                    eventLocation="Hec 201"
                    eventDesc="Enjoy the free pizza"
                />
            </div>
        );
    }
}

export default EventHolder;