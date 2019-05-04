import React, { Component } from "react";
import "./ButtonsAtack.css";

export default class ButtonsAtack extends Component {
  constructor(props) {
    super(props);
    this.state = {
      atacks: this.props.atacks,
      atacksPokemon: this.props.atacksPokemon,
      changeTextHover: this.props.changeTextHoverFunction,
      changeNoFigthFunction: this.props.changeNoFigth
    };
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-6 mr-0 pr-1">
            <button
              type="button"
              className="btn btn-outline-dark rel-border-buton-dark rounded-pill font-weight-bold w-100 h-100"
              onMouseOver={() => {
                this.state.changeTextHover(
                  this.props.atacksPokemon[0].nuAtckPower
                );
              }}
              onClick={() => {
                this.props.pokemonDefenseHpFunction(
                  this.props.atacksPokemon[0].nuAtckPower
                );
                this.props.changeNoFigthFunction();
              }}
            >
              {this.props.atacksPokemon[0].stAtckName}
            </button>
          </div>
          <div className="col-6 ml-0 pl-1">
            <button
              type="button"
              className="btn btn-outline-dark rel-border-buton-dark rounded-pill font-weight-bold w-100 h-100"
              onMouseOver={() =>
                this.state.changeTextHover(
                  this.props.atacksPokemon[1].nuAtckPower
                )
              }
              onClick={() => {
                this.props.pokemonDefenseHpFunction(
                  this.props.atacksPokemon[1].nuAtckPower
                );
                this.props.changeNoFigthFunction();
              }}
            >
              {this.props.atacksPokemon[1].stAtckName}
            </button>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-6 mr-0 pr-1">
            <button
              type="button"
              className="btn btn-outline-dark rel-border-buton-dark rounded-pill font-weight-bold w-100 h-100"
              onMouseOver={() =>
                this.state.changeTextHover(
                  this.props.atacksPokemon[2].nuAtckPower
                )
              }
              onClick={() => {
                this.props.pokemonDefenseHpFunction(
                  this.props.atacksPokemon[2].nuAtckPower
                );
                this.props.changeNoFigthFunction();
              }}
            >
              {this.props.atacksPokemon[2].stAtckName}
            </button>
          </div>
          <div className="col-6 ml-0 pl-1">
            <button
              type="button"
              className="btn btn-outline-dark rel-border-buton-dark rounded-pill font-weight-bold w-100 h-100"
              onMouseOver={() =>
                this.state.changeTextHover(
                  this.props.atacksPokemon[3].nuAtckPower
                )
              }
              onClick={() => {
                this.props.pokemonDefenseHpFunction(
                  this.props.atacksPokemon[3].nuAtckPower
                );
                this.props.changeNoFigthFunction();
              }}
            >
              {this.props.atacksPokemon[3].stAtckName}
            </button>
          </div>
        </div>
      </div>
    );
  }
}
