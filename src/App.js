import axios from 'axios';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import CountryDetails from './components/countryDetails/CountryDetails';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/homePage';

function App() {

  const [listCountries, setListCountries] = useState([])

  const baseURL = 'https://ih-countries-api.herokuapp.com/countries'
  useEffect(() => {
    axios
      .get(baseURL)
      .then((response) => {
        const list = response.data
        setListCountries(list)
      })
  }, [])

  return (
    <div className="App">
      <Navbar />
      <HomePage countries={listCountries}/>
      <Routes>
        {/* <Route path='/' element={<HomePage  countries={listCountries}/>} /> */}
        <Route path='/:countryId' element={<CountryDetails countries={listCountries}/>} />
      </Routes>

    </div>
  );
}

export default App;
