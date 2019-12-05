import React from 'react';
import './App.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import Navigation from './navigation/Navigation'
import RestaurantAll from './restaurants/RestaurantsAll'
import Footer from './footer/Footer';
import Home from './restaurants/home/Home';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
      <RestaurantAll />
      <Footer />
    </div>
  );
}

export default App;
