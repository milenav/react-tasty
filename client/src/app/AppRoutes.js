import React, { useContext } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom'

import AppContext from './AppContext';
import NotFound from '../notFound/NotFound';
import Home from '../home/Home';
import AllRestaurants from '../restaurants/allRestaurants/AllRestaurants';
import CreateRestaurant from '../restaurants/createRestaurant/CreateRestaurant';
import Register from '../user/register/Register';
import Login from '../user/login/Login';
import RestaurantDetails from '../restaurants/detailsRestaurant/DetailsRestaurant';

const PrivateRoute = ({
    component: Component,
    fallbackComponent: FallBackComponent,
    redirect = '/',
    allowed, ...rest
  }) => {
    return (
        <Route
            {...rest}
            render={
                (props) => allowed ? (
                    <Component {...rest} {...props} />
                ) : (
                    FallBackComponent ? (<FallBackComponent />) : (<Redirect path="*" to={redirect} />)
                )
            }
        />
    );
  };

const AppRoutes = () => {
    const appContext = useContext(AppContext);
    console.log(appContext.isLoggedIn);

    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <PrivateRoute allowed={appContext.isLoggedIn} path="/restaurant" component={AllRestaurants} />
            <PrivateRoute allowed={appContext.isLoggedIn} path="/create" component={CreateRestaurant} />
            <PrivateRoute allowed={appContext.isLoggedIn} path="/restaurants/:name" component={RestaurantDetails} />
            
            <PrivateRoute allowed={!appContext.isLoggedIn} path="/register" component={Register} />
            <PrivateRoute allowed={!appContext.isLoggedIn} path="/login" component={Login} />

            <Route path="*" component={NotFound} />
        </Switch>
    );
};

export default AppRoutes;