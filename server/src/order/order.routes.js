import { Router } from 'express';
import orderController from './order.controller';

const router = new Router();

router
    .post('/', orderController.create)

export default router;