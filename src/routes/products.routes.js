import { Router } from "express";
import {verifyToken} from "../middlewares/authJwt.js"
import { getProducts } from "../services/productService.js";
const router = Router();

router.get('/', verifyToken, getProducts)

export default router;