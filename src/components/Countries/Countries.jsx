import { use } from "react";
import Country from "../Country/country";
import './countries.css'

const Countries = ({countriesPromise}) => {
    // console.log(countriesPromise)
    const countries = use(countriesPromise)
    // console.log(countries)
    return (
        <div>
           <h2>There are {countries.length} Countries</h2>
           <div className="country-grid">
           {
            countries.map(country => <Country key={country.cca3} country={country}></Country>)
           }
           </div>
        </div>
    );
};

export default Countries;