import React from 'react';
import './App.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Navigation from './navigation/Navigation'
import Footer from './footer/Footer';
import Home from './home/Home';
import AllRestaurants from './restaurants/allRestaurants/AllRestaurants';
import CreateRestaurant from './restaurants/createRestaurant/CreateRestaurant';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/restaurants" component={AllRestaurants} />
          <Route path="/create" component={CreateRestaurant} />
          <Route path="*" render={() => '404' }/>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
