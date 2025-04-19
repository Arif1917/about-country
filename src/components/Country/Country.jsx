import React from 'react';
import './country.css'

const handleClick = ()=>{
    console.log('handle click')
}
const Country = ({country}) => {
    return (
        <div className='country'>
            <h2>Name:{country.name.common}</h2>
            <img src={country.flags.png} alt="" />
            <h2>Independent: {country.independent? 'free': 'not free'}</h2>
            <h2>Population: {country.population}</h2>
            <button onClick={handleClick}>Non visited</button>
        </div>
    );
};

export default Country;