import React from 'react';

import './PokeCell.css'
import sprites from './assets/sprites.png';

const PokeCell = (props : any) => {
    const {id, backgroundPosition} = props.pokeClass

    const style = { backgroundImage: `url(${sprites})`, backgroundPosition };


    return <button style={style} onClick={ () => props.handleOnClick.handleOnClick(id)} className="poke-cell"/>
};


export default PokeCell;
