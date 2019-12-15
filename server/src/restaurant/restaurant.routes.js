import { Router } from 'express';
import restaurantController from './restaurant.controller';
import { auth } from '../account/account.middleware';

const router = new Router();

router
    .get('/', [auth()], restaurantController.list)
    .get('/:name', [auth()], restaurantController.details)
    .post('/', [auth()], restaurantController.create)
    .delete('/:id', [auth()], restaurantController.delete)

export default router;