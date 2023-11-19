import { Router } from "express";
import {chackDuplicateUsernameOrEmail} from "../middlewares/verifySignup.js";

const router = Router();

import * as authController from '../controllers/auth.controller.js';

router.post('/signup', [chackDuplicateUsernameOrEmail], authController.signUp)
router.post('/signin', authController.signIn)

export default router;