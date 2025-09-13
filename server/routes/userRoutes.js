import express from 'express';
import { addUser, testEmail, unsuscribeUser } from '../controllers/userController.js';
import rateLimiter from '../middleware/rateLimiter.js';
const router = express.Router();

router.post('/',rateLimiter, addUser);
router.post('/test', rateLimiter, testEmail);
router.delete('/unsubscribe', rateLimiter, unsuscribeUser); 

export default router;