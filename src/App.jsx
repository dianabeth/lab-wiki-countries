import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import CountryDetails from './components/CountryDetails';
import CountriesList from './components/CountriesList';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Navbar} />
          <Route path="/" component={CountriesList} />
          <Route path="/" component={CountryDetails} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
