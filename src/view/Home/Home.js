import React, { Component } from "react";
import "./Home.css";

//importo los componentes
import Pokemon from "../../components/Pokemon/Pokemon";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      atackPokemon: {},
      defensePokemon: {},
      stateAtack: true,
      textM: "",
      animateAt: false,
      animateDf: false
    };

    this.pokemonDefenseHp = this.pokemonDefenseHp.bind(this);
    this.pokemonAtackHp = this.pokemonAtackHp.bind(this);
    this.randomAtack = this.randomAtack.bind(this);
  }

  pokemonDefenseHp(atackNumber) {
    var auxP = this.state.defensePokemon;
    var hpPokemon = this.state.defensePokemon.nuLife;
    if (!hpPokemon <= 0 && this.state.stateAtack) {
      if (hpPokemon - atackNumber < 0) {
        auxP.nuLife = hpPokemon - hpPokemon;
        this.audioRef.play();
      } else {
        auxP.nuLife = hpPokemon - atackNumber;
        this.audioRef.play();
        this.randomAtack();
      }
      
    } else {
      this.setState({
        stateAtack: false
      });
    }
    this.setState({
      defensePokemon: auxP,
      stateAtack: false,
      textM: this.state.defensePokemon.stName + " te esta atacando."
    });
  }

  pokemonAtackHp(atackNumber) {
    var auxP = this.state.atackPokemon;
    var hpPokemon = this.state.atackPokemon.nuLife;
    this.setState({
      animateAt: false,
      animateDf: true
    });
    // var defPokemon = this.state.atackPokemon.nuDf;
    if (!hpPokemon <= 0 && !this.state.stateAtack) {
      if (hpPokemon - atackNumber < 0) {
        
        auxP.nuLife = hpPokemon - hpPokemon;
      } else {
        auxP.nuLife = hpPokemon - atackNumber;
      }
      
    } else {
      this.setState({
        stateAtack: false
      });
    }
    this.setState({
      atackPokemon: auxP
    });
    this.audioRef.play();
  }

  randomAtack() {
    var atack = this.state.atackPokemon.arAtacks[parseInt(Math.random() * 4)]
      .nuAtckPower;
    setTimeout(() => {
      this.pokemonAtackHp(atack);
      this.setState({
        stateAtack: true,
        textM: "¿Que hara " + this.state.atackPokemon.stName + " ahora?"
      });
    }, 3000);
  }

  componentWillMount = event => {
    var Http = new XMLHttpRequest();
    var url = "http://www.mocky.io/v2/5cca7d6f6100003404161e98";
    Http.open("GET", url);
    Http.send();
    Http.onreadystatechange = e => {
      this.setState({
        defensePokemon: JSON.parse(Http.responseText)[0],
        atackPokemon: JSON.parse(Http.responseText)[1],
        textM: "¿Que hara " + JSON.parse(Http.responseText)[1].stName + "?"
      });
    };
  };
  componentDidMount() {
    this.videoRef.play();
    this.videoRef.onended = function() {
      this.currentTime = 5;
      this.play();
    };
  }

  handleRef = video => {
    this.videoRef = video;
  };
  handleRefAudio = audio => {
    this.audioRef = audio;
  };
  render() {
    return (
      <div className="container-fluid rel-background-home">
        <audio
          id="audio"
          src="http://66.90.93.122/ost/pokemon-gameboy-sound-collection/ravcdrgo/107-battle%20%28vs%20wild%20pokemon%29.mp3"
          ref={this.handleRef}
        />
        <audio
          id="audio"
          src="http://66.90.93.122/ost/pokemon-sfx-gen-1-red-blue-attack-move-sounds-sfx/qsmkqzabsd/FuryAttack.mp3"
          ref={this.handleRefAudio}
        />
        <div className="row h-50">
          <div className="col-12 m-0 p-0">
            <Pokemon
              flag={true}
              pokemon={this.state.defensePokemon}
              pokemonDefenseHpFunction={this.pokemonDefenseHp}
              animate={this.state.animateAt}
              textM={this.state.textM}
            />
          </div>
        </div>
        <div className="row h-50">
          <div className="col-12 m-0 p-0">
            <Pokemon
              flag={false}
              pokemon={this.state.atackPokemon}
              pokemonDefenseHpFunction={this.pokemonDefenseHp}
              textM={this.state.textM}
              animate={this.state.animateDf}
            />
          </div>
        </div>
      </div>
    );
  }
}
