import http from 'http';
import https from 'https';
import express, { Router } from 'express';
import cors from 'cors';

import { urlencoded, json } from 'body-parser';

import Passport from 'passport';
import { Strategy } from 'passport-local';
import jwt from 'jsonwebtoken';

import Config from './config';
import { configureAWS } from './aws';

import Account from './account/account.model';

import accountRoutes from './account/account.routes';
import orderRoutes from './order/order.routes';
import restaurantRoutes from './restaurant/restaurant.routes';
const configureAuth = (options = {}) => {
    const localDefaults = {
        session: false,
        passReqToCallback: true,
        usernameField: 'email',
        passwordField: 'password'
    };

    const localOptions = Object.assign({}, localDefaults, options);

    Passport.use('local', new Strategy(localOptions, (req, email, password, done) => {
        Account.findOne({ email })
            .then((foundAccount) => {
                if (!foundAccount) {
                    return done({ message: 'Invalid credentials', id: 'error.credentials' });
                }

                foundAccount.comparePasswords(password, foundAccount.password)
                    .then((passwordMatch) => {
                        if (!passwordMatch) {
                            return done({ message: 'Invalid credentials',  id: 'error.credentials'  });
                        }
                        
                        const userData = Object.assign({}, foundAccount.getPublicFields(), {
                            token: jwt.sign({ sub: foundAccount._id, password: foundAccount.password }, Config.api.secret),
                        });

                        return done(null, userData);
                    })
            });
    }));
}

const configureMiddlewares = (api) => {
    api
        .use(cors())
        .use(urlencoded({ extended: false }))
        .use(json())
        .use(Passport.initialize());
}

const configureRoutes = (api) => {
    api
        .use('/order', orderRoutes)
        .use('/restaurant', restaurantRoutes)
        .use('/account', accountRoutes)
        .use('*', (req, res, next) => next('Unknown endpoint'));
}

const handleErrors = (api) => {
    api.use((ex, req, res, next) => {
        if (ex) {            
            let errors = [];

            if (ex.errors) {
                errors = Object.keys(ex.errors)
                    .map((errKey) => {
                        if (ex.errors[errKey].properties) {
                            return ex.errors[errKey].properties.message
                        }

                        return ex.errors[errKey].message;
                    });
            } else {
                errors.push(ex);
            }

            return res
                .status(ex.status ? ex.status : 400)
                .json({ data: null, errors });
        }
    });
}

export const apiRouter = new Router();

export default {
    /**
     * Connect to Api
     * @param {String} host 
     * @param {String} port 
     */
    start(host, port) {
        const api = express();

        configureAWS(Config.aws);
        configureAuth();
        configureMiddlewares(api);
        configureRoutes(api);
        handleErrors(api);

        let server = null;
        if (process.env.NODE_ENV === 'prod') {
            server = https.createServer({}, api);
        } else {
            server = http.createServer(api);
        }

        server.listen(port, host, () => {
            console.log('THE SERVER IS LIVE');
        });
    }
};
