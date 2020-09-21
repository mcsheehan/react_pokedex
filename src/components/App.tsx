import React, {Component} from 'react';

import './App.css';
import PokeList from "./Pokelist";
import DetailView from "./DetailView";
import Pokemon from './Pokemon'

class App extends Component<any, Pokemon> {

    constructor(props: any) {
        super(props);
        this.state = {
            pokemon: {}
        }

        this.handleOnClick = this.handleOnClick.bind(this)
    }

    handleOnClick(id: number) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
            .then(res => res.json())
            .then(data => {
                    const pokemon = new Pokemon(data);
                    this.setState(pokemon)
                }
            ).catch(err => console.log(err))
    }

    render() {
        return <div>
            <div className="Header">
                <h1>Mark's awesome pokedex</h1>
            </div>
            <div className="App">
                <PokeList handleOnClick={this.handleOnClick}/>
                <DetailView pokemon={this.state}/>
            </div>
            ;
        </div>
    }

}

export default App;
