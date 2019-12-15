import { Router } from 'express';
import restaurantController from './restaurant.controller';
import { auth } from '../account/account.middleware';
import { accountType } from '../account/account.constants';

const router = new Router();

router
    .get('/', [auth()], restaurantController.list)
    .get('/:name', [auth()], restaurantController.details)
    .post('/', [auth()], restaurantController.create)

export default router;