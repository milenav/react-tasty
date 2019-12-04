import { Router } from 'express';
import restaurantController from './restaurant.controller';
import { auth } from '../account/account.middleware';
import { accountType } from '../account/account.constants';

const router = new Router();

router
    .get('/', restaurantController.list)
    .get('/:name', restaurantController.details)
    .post('/', [auth(accountType.restaurateur)], restaurantController.create)

export default router;