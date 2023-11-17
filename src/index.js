import express from "express";
import morgan from "morgan";

const port = 3000;
const app = express();

app.use(morgan("dev"));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log('mi port', port);
});

export default app;