
import express from 'express';

import {
    servicios,
    productos
} from './controllers.js';

const router = express.Router();

router.get('/servicios', servicios);
router.get('/productos', productos);

export default router;