import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"


const CountryDetails = (props) => {

    const { countries} = props
    const { countryId } = useParams()
    
    const [infoCountry, setInfoCountry] = useState(null)
    const [countryBorders, setCountryBorders] = useState([])
    const baseURL = `https://ih-countries-api.herokuapp.com/countries/${countryId}`






    
    useEffect(() => {

        // const foundCountry = countries.find((country) => {
        //     return country.alpha3Code === countryId;
        // });
        // setInfoCountry(foundCountry)
        if (countryId) {           
            axios
            .get(baseURL).then((response) => {
                setInfoCountry(response.data)
                setCountryBorders(response.data.borders)
            })
        }

    }, [countryId])


    return (


        <div className="col-7 info">
            {infoCountry &&

                <>
                    <img src={`https://flagpedia.net/data/flags/icon/72x54/${infoCountry.alpha2Code.toLowerCase()}.png`} alt={`flag`} />


                    <h1>{Object.entries(infoCountry).map((e) => {
                        return e[1].common
                    })}
                    </h1>


                    <table className="table">
                        <thead></thead>
                        <tbody>
                            <tr>
                                <td style={{ width: "30%" }}>Capital</td>
                                <td>{infoCountry.capital}</td>
                            </tr>
                            <tr>
                                <td>Area</td>
                                <td>
                                    {infoCountry.area} km
                                    <sup>2</sup>
                                </td>
                            </tr>
                            <tr>
                                <td>Borders</td>
                                <td>
                                    <ul>
                                        {countryBorders.map((border) => {
                                            let countryName = ""

                                            countries.map((country) => {
                                                if (border === country.alpha3Code) {
                                                    countryName = country.name.common
                                                }
                                            })

                                            return <li key={border}><Link to={`/${border}`}>
                                                {countryName}</Link></li>

                                        })}

                                    </ul>
                                </td>
                            </tr>
                        </tbody>

                    </table>
                    <Link to={"/"}>Home</Link>
                </>
            }
        </div>

    )
}

export default CountryDetails