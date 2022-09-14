import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ResidentsComponent = ({resident}) => {

    const [character, setCharacter] = useState()

    useEffect(() => {
        axios.get(resident)
        .then( res => setCharacter(res.data))

    },[])
    
    // console.log(character)

    return (
        <li className='resident'>
            <div className='resident-card'>
                <h3 className='name'>{character?.name}</h3>
                <br />
                <img className='character' src={character?.image} alt="" />
                <br />
                <p className='cardInfo'><b>Status: </b>{character?.status}</p>
                <br />
                <p className='cardInfo'><b>Origin: </b>{character?.origin.name}</p>
                <br />
                <p className='cardInfo'><b># Episodes: </b>{character?.episode.length}</p>
            </div>
            <br />
        </li>
    );
};

export default ResidentsComponent;