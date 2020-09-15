import './Pokelist.css'
import React from "react";
import PokeCell from "./PokeCell";
import {pokeClasses} from './assets/pokeClasses'

const PokeList = (handleOnClick: any) : JSX.Element=> {
    const cells = pokeClasses.map(pokeClass =>
    {
        return <PokeCell key={pokeClass.id}
                         pokeClass={pokeClass}
                         handleOnClick={handleOnClick}/>
    })

    return (
        <section className="poke-list">
            {cells}
         </section>
     )
}


export default PokeList
