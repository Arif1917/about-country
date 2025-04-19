import React, { useState } from 'react';
import './country.css'

const Country = ({country, handleVisitedCountries}) => {
    // console.log(handleVisitedCountries)
    const [visited, setVisited]=useState(false)
const handleClick = ()=>{
    if(visited){
        setVisited(false)
    }
    else{
        setVisited(true)
    }
    handleVisitedCountries(country)
}
    return (
        <div className={`country ${visited && 'country-bg'}`}>
            <h2>Name:{country.name.common}</h2>
            <img src={country.flags.png} alt="" />
            <h2>Independent: {country.independent? 'free': 'not free'}</h2>
            <h2>Population: {country.population}</h2>
        <button className={visited ? 'nont':'hello'} onClick={handleClick}>{visited ? 'visited':'non-visited'}</button>
        </div>
    );
};

export default Country;