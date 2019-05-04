import React, { Component } from "react";
import "./TextMensage.css";

export default class TextMensage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textM: this.props.textM
    };
  }
  render() {
    return (
      <div className="container-fluid h-100">
        <div className="row rel-text-mensage-out ">
          <div className="col-12 rel-text-mensage-in m-0 p-0">
            <div className="col-12 rel-text-mensage m-0 p-4 ">
              <p className="text-break rel-Texmensage-text text-justify">
                {this.props.textM}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
