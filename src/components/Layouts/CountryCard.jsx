import React from 'react'
import { NavLink } from 'react-router-dom';

const CountryCard = ({country}) => {
    const {flags, name, population, region, capital} = country;
  return (
    <li className='country-card card'>
        <div className="container-card bg-white-box">
            <img src={flags.svg} alt="flag" />
            <div className="country-info">
                <h2 className='card-title'>{name.common.length > 10 ? name.common.slice(0, 10) + ' ...' : name.common}</h2>
                <p>
                    <span className='card-description'>Population : </span>
                    {population}
                    </p>
                    <p>
                    <span className='card-description'>Region : </span>
                    {region}
                    </p>
                    <p>
                    <span className='card-description'>Capital :  </span>
                    {capital[0]}
                    </p>
                <NavLink to={`/country/${country.cca3}`}><button>Read More</button></NavLink>
            </div>
        </div>
    </li>
  )
}

export default CountryCard