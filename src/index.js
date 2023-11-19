import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
// require('dotenv').config();
import './database.js'
import productsRoutes from "./routes/products.routes.js";
import authRoutes from "./routes/auth.routes.js";

const app = express();
const port = 3000;

app.use(morgan("dev"));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api/products', productsRoutes)
app.use('/api/auth', authRoutes)

app.listen(port, () => {
  console.log('mi port', port);
});

export default app;