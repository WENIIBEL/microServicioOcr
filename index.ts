// index.js
import express from "express";
import {router} from "./src/routers/image.router"



const app = express();
const port = 3002;


app.use(express.json());
// app.use(express.urlencoded({ extended: true })); este donde va?
app.use("/api",router)

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
