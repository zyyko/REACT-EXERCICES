import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
export default class Random extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            face: null,
            compteur: 0,
            fin: false,
            images: {
              1: "photos/number-1.png",
              2: "photos/number-2.png",
              3: "photos/number-3.png",
              4: "photos/number-4.png",
              5: "photos/number-5.png",
              6: "photos/number-6.png"
            },
          };
        
    }

    Play () {
        const valeur = Math.floor(Math.random () * 6 ) + 1
        if(this.state.images[valeur] !== undefined) {
            this.setState({face : valeur , compteur : this.state.compteur + 1 })
            if(this.props.correctNumber === valeur) {
                this.setState({fin:true})
                console.log("hello")
            }
        }

    }

    Reset() {
        this.setState({
            face: null,
            compteur: 0,
            fin: false,
            images: {
              1: "photos/number-1.png",
              2: "photos/number-2.png",
              3: "photos/number-3.png",
              4: "photos/number-4.png",
              5: "photos/number-5.png",
              6: "photos/number-6.png"
            },
          })
    }

    render() {
        return (
            <div className="container text-center">
                <img src="/photos/dice_game.png" width={250}/><br/>
                <img src={this.state.images[this.state.face]} alt="" width={100}/>
                <h1 className="text-success">Jeu de Dé</h1>
                <h2>Face : {this.state.face}</h2>
                <h2>nombre d'essais : {this.state.compteur}</h2>
                <button 
                    className="btn btn-primary"
                    disabled={this.state.fin === true} onClick={() => this.Play()} >
                    Play</button>
                <p></p>
                <button
                className="btn btn-secondary" 
                onClick={() => this.Reset()}
                >Reset</button>
                <div>
                    {this.state.fin === true ? <i className="text-success display-6">"BRAVO you got the correct number ! "</i> : ""}
                </div>
            </div>
        )
    }
}