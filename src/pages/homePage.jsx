import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import CountryDetails from "../components/countryDetails/CountryDetails"


const HomePage = (props) => {

    const { countries } = props
    const baseURL = 'https://ih-countries-api.herokuapp.com/countries'



    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-5" style={{
                        maxHeight: "90vh",
                        overflow: "scroll"
                    }}>

                        <div className="list-group" >

                            {
                                countries.map((country) => {
                                    return (

                                        <div key={country._id} className="list-group-item list-group-item-action">
                                            <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt={`${country.name.common} flag`} />
                                            <br />
                                            <Link to={`/${country.alpha3Code}`}>{country.alpha2Code} {country.name.common}</Link>
                                        </div>

                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            <CountryDetails/>

        </div>
    )
}

export default HomePage