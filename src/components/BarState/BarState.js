import React, { Component } from "react";
import "./BarState.css";
import Seleccion from "../Seleccion/Seleccion";
import TextMensage from "../TextMensage/TextMensage";
import ButtonsAtack from "../ButtonsAtack/ButtonsAtack";

export default class BarState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      figthState: false,
      pokemon: this.props.pokemon,
      atacks: ""
    };
    this.changeFigth = this.changeFigth.bind(this);
    this.changeNoFigth = this.changeNoFigth.bind(this);
    this.changeTextHover = this.changeTextHover.bind(this);
    this.handleRefButton = this.handleRefButton.bind(this);
    this.ButtonHover = this.ButtonHover.bind(this);
  }
  changeFigth() {
    this.setState({
      figthState: true
    });
    this.butonSelectRef.play();
  }

  changeNoFigth() {
    this.setState({
      figthState: false
    });
  }

  changeTextHover(atack) {
    this.setState({
      atacks: atack
    });
    this.butonSelectRef.play();
  }

  ButtonHover() {
    this.butonSelectRef.play();
  }

  handleRefButton = video => {
    this.butonSelectRef = video;
  };

  render() {
    let figth;
    if (this.state.figthState) {
      figth = (
        <div className="row rel-background-selection m-0 p-0 d-flex justify-content-center align-content-center">
          <div className="col-8 m-0 p-0">
            <ButtonsAtack
              atacksPokemon={this.props.pokemon.arAtacks}
              changeTextHoverFunction={this.changeTextHover}
              pokemonDefenseHpFunction={this.props.pokemonDefenseHpFunction}
              changeNoFigthFunction={this.changeNoFigth}
            />
          </div>
          <div className="col-4 m-0 p-0">
            <TextMensage textM={"Poder de ataque: " + this.state.atacks} />
          </div>
        </div>
      );
    } else {
      figth = (
        <div className="row rel-background-selection m-0 p-0 d-flex justify-content-center align-content-center">
          <div className="col-6 m-0 p-0">
            <TextMensage textM={this.props.textM} />
          </div>
          <div className="col-6 m-0 p-0">
            <Seleccion changeFigthFunction={this.changeFigth} ButtonHoverFunction={this.ButtonHover}/>
          </div>
        </div>
      );
    }
    return (
      <div className="container-fliuid">
        <audio
          id="audio"
          src="https://freesound.org/data/previews/146/146723_2437358-lq.mp3"
          ref={this.handleRefButton}
        />
        {figth}
      </div>
    );
  }
}
