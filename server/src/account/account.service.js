import Passport from 'passport';

import Account from './account.model';
import { accountType } from './account.constants';

export default {
    /**
     * create
     * @param {String} email 
     * @param {String} password 
     */
    create(email, password, role = accountType.user) {
        const account = new Account({ email, password, roles: [role] });

        return account.save();
    },
    /**
     * login
     * @param {Object} req 
     * @param {Object} res 
     */
    login(req, res) {
        const { email, password } = req.body;

        if (!email || !password) {
            throw { message: 'Invalid credentials', id: 'error.credentials' };
        }

        return new Promise((resolve, reject) => {
            return Passport.authenticate('local', (err, accountData) => {
                if (err) {
                    return reject(err);
                }
                console.log(accountData);
                return resolve(accountData);
            })(req, res);
        })
    }
}