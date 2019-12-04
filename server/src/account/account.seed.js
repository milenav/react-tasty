import Config from '../config';
import Account from './account.model';
import accountService from './account.service';
import { accountType } from './account.constants';

export const seedAdmin = () => {
    const { email, password } = Config.admin;

    Account.findOne({ email })
        .then((foundAccount) => {
            if (!foundAccount) {
                return accountService.create(email, password, accountType.admin);
            }

            return Promise.resolve(foundAccount);
        });
}

export default () => {
    seedAdmin();
}