import { Router } from 'express';
import { createContact, listContacts } from '../controllers/contactController.js';
import { contactLimiter } from '../middleware/rateLimiter.js';

const router = Router();

router.post('/', contactLimiter, createContact);
router.get('/', listContacts); // consider protecting this in production (e.g. an admin key)

export default router;
