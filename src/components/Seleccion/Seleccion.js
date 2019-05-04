import React, { Component } from "react";
import "./Seleccion.css";

export default class Seleccion extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      changeFigth: this.props.changeFigthFunction
    };
    this.handleRefButton = this.handleRefButton.bind(this);
    this.alertClick = this.alertClick.bind(this);
    this.alertClickRun = this.alertClickRun.bind(this);
  }

  handleClick(e) {
    this.state.changeFigth();
    this.butonSelectRef.play();
  }

  alertClick() {
    alert("No esta implementado actualmente. T_T");
  }
  alertClickRun() {
    alert("No seas cobarde :V");
  }

  handleRefButton = video => {
    this.butonSelectRef = video;
  };

  render() {
    return (
      <div className="container-fluid h-100">
        <audio
          id="audio"
          src="https://freesound.org/data/previews/146/146723_2437358-lq.mp3"
          ref={this.handleRefButton}
        />
        <div className="row h-100">
          <div className="col-6 d-flex flex-column m-0 p-0">
            <div className="rounded-pill rel-border-dark">
              <button
                type="button"
                className="btn btn-danger rel-border-light rounded-pill font-weight-bold w-100 h-100"
                onClick={this.handleClick}
                onMouseOver={() => this.props.ButtonHoverFunction()}
              >
                FIGHT
              </button>
            </div>
            <div className="rounded-pill rel-border-dark">
              <button
                type="button"
                className="btn btn-success rel-border-light rounded-pill font-weight-bold w-100 h-100"
                onMouseOver={() => this.props.ButtonHoverFunction()}
                onClick={this.alertClick}
              >
                POKÉMON
              </button>
            </div>
          </div>
          <div className="col-6 d-flex flex-column m-0 pl-0">
            <div className="rounded-pill rel-border-dark">
              <button
                type="button"
                className="btn btn-secondary rel-border-light rounded-pill font-weight-bold w-100 h-100"
                onMouseOver={() => this.props.ButtonHoverFunction()}
                onClick={this.alertClick}
              >
                BAG
              </button>
            </div>
            <div className="rounded-pill rel-border-dark">
              <button
                type="button"
                className="btn btn-primary rel-border-light rounded-pill font-weight-bold w-100 h-100"
                onMouseOver={() => this.props.ButtonHoverFunction()}
                onClick={this.alertClickRun}
              >
                RUN
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
