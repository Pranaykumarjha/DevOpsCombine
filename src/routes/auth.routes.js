import { signUp } from '#controllers/auth.controller.js';
import { signUpSchema } from '#validations/auth.validation.js';
import express from 'express';

const router = express.Router();
router.post('/sign-up', signUp);
router.post('/sign-in', (req,res) => {
  res.send('POST/auth/api/sign-in response')
});
router.post('/sign-out', (req,res) => {
  res.send('POST/auth/api/sign-out response')
});

export default router;