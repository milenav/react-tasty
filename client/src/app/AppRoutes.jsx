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
    const { isLoggedIn } = useContext(AppContext);

    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <PrivateRoute allowed={isLoggedIn} exact  path="/restaurant" component={AllRestaurants} />
            <PrivateRoute allowed={isLoggedIn} path="/create" component={CreateRestaurant} />
            <PrivateRoute allowed={isLoggedIn} path="/restaurant/:name" component={RestaurantDetails} />

            <PrivateRoute allowed={!isLoggedIn} path="/register" component={Register} />
            <PrivateRoute allowed={!isLoggedIn} path="/login" component={Login} />

            <Route path="*" component={NotFound} />
        </Switch>
    );
};

export default AppRoutes;