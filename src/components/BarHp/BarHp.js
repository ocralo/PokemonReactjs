import React, { Component } from "react";
import "./BarHp.css";

export default class BarHp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hp:this.props.hp
    };
  }
  render() {
    let divstylehp = {
      width: this.props.hp + "%"
    };
    return (
      <div className="rel-barHp-content">
        <div className="rel-barhp" style={divstylehp}>
          <h5>HP</h5>
        </div>
      </div>
    );
  }
}
