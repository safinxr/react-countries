import React, { useEffect, useState } from 'react';
import './Country.css'

const Country = () => {
    const [countries, setcountries] = useState([])
    useEffect(() =>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data =>setcountries(data))
    },[])
    return (
        <div>
            <h1>Every Country in the Would</h1>
            {
                countries.map(country => <DisplayCountry cname={country.name.common} flag={country.flags.png}></DisplayCountry>)
            }
        </div>
    );
};

const DisplayCountry =(props) =>{
    return (
        <div className='country-div'>
            <img src={props.flag} alt="" />
            <h1>{props.cname}</h1>
        </div>
    );
}

export default Country;