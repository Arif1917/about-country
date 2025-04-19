import { use, useState } from "react";
import Country from "../Country/country";
import './countries.css'

const Countries = ({countriesPromise}) => {
    // console.log(countriesPromise)
    const countries = use(countriesPromise)
    // console.log(countries)
    const [visitedCountries, setVisitedCountries] =useState([])

    const handleVisitedCountries = (country) =>{
        console.log('country added',country)
        const newVisitedCountries = [...visitedCountries,country];
        setVisitedCountries(newVisitedCountries)
    }
    return (
        <div>
           <h2>There are {countries.length} Countries</h2>
           <h2>visited Countries are {visitedCountries.length}</h2>
           <div className="country-grid">
           {
            countries.map(country => <Country key={country.cca3}
                handleVisitedCountries ={handleVisitedCountries}
                 country={country}></Country>)
           }
           </div>
        </div>
    );
};

export default Countries;