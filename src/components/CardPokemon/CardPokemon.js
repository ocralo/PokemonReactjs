import React, { Component } from "react";
import "./CardPokemon.css";
import BarHp from "../BarHp/BarHp";

export default class CardPokemon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      namePokemon: this.props.namePokemon,
      hp: this.props.hp,
      def: this.props.def,
      maxHp:0
    };
  }
  componentWillReceiveProps() {
    if (this.props.hp >= this.state.maxHp) {
      this.setState({
        maxHp: this.props.hp
      });
    }
  }

  render() {
    return (
      <div className="container rel-cardPokemon-container mr-0 pr-0">
        <div className="row mr-0 pr-0">
          <div className="col-8 d-inline-block text-truncate">
            {this.props.namePokemon}
          </div>
          <div className="col-4">Lv 18</div>
        </div>
        <div className="row mr-0 pr-0">
          <div className="col-4">
            <i className="fas fa-venus rel-cardPokemon-sex" />
          </div>
          <div className="col-8">
            <BarHp hp={this.props.hp}/>
            Def <b>{this.props.def}</b>
          </div>
        </div>
        <div className="row d-flex justify-content-end mr-0 pr-0">
          <h5>{this.props.hp}/{this.state.maxHp}</h5>
        </div>
      </div>
    );
  }
}
