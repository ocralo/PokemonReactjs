import React, { Component } from "react";
import "./Pokemon.css";
import CardPokemon from "../CardPokemon/CardPokemon";
import BarState from "../BarState/BarState";

export default class Pokemon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: this.props.flag,
      pokemon: this.props.pokemon,
      enemyPokemonName: this.props.enemyPokemonName,
      textM: this.props.textM
    };
    this.pokemon = React.createRef();
  }

  render() {
    let divstyleState;
    let selection;
    let statePokemon;
    if (this.state.flag) {
      divstyleState = {
        marginRigth: ""
      };
      statePokemon = (
        <div className="row m-0 p-0">
          <div className="col-5 mt-5 ml-0 pl-0">
            <CardPokemon
              namePokemon={this.props.pokemon.stName}
              hp={this.props.pokemon.nuLife}
              def={this.props.pokemon.nuDf}
            />
          </div>
          <div className="col-7 ">
            <img
              className="rel-pokemon-img"
              id="atack"
              style={divstyleState}
              src={this.props.pokemon.urlImg}
              alt=""
              ref={this.pokemon}
            />
          </div>
        </div>
      );
    } else {
      // eslint-disable-next-line no-lone-blocks
      {
        divstyleState = {
          marginLeft: "30%"
        };
        statePokemon = (
          <div className="row m-0 p-0">
            <div className="col-7">
              <img
                className="rel-pokemon-img"
                style={divstyleState}
                src={this.props.pokemon.urlImg}
                id="def"
                alt=""
                ref={this.pokemon}
              />
            </div>
            <div className="col-5 mr-0 pr-0">
              <CardPokemon
                namePokemon={this.props.pokemon.stName}
                hp={this.props.pokemon.nuLife}
                def={this.props.pokemon.nuDf}
              />
            </div>
          </div>
        );
        selection = (
          <BarState
            pokemon={this.props.pokemon}
            pokemonDefenseHpFunction={this.props.pokemonDefenseHpFunction}
            textM={this.props.textM}
          />
        );
      }
    }

    return (
      <div className="container-fluid m-0 p-0">
        {statePokemon}
        {selection}
      </div>
    );
  }
}
