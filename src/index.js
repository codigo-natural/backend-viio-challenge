import express from "express";
import morgan from "morgan";
import './database.js'
import config from "./config.js";
import productsRoutes from "./routes/products.routes.js";
import authRoutes from "./routes/auth.routes.js";

const app = express();
const port = config.port || 3008;

app.use(morgan("dev"));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Routes
app.use('/api/products', productsRoutes)
app.use('/api/auth', authRoutes)

app.listen(port, () => {
  console.log('mi port', port);
});

export default app;