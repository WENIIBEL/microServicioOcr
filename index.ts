
import express from "express";
import {routerImage} from "./src/routers/image.router"
import { roterPdf } from "./src/routers/pdf.routers";

const app = express();
const port = 3002;

app.use(express.json());

app.use("/api",routerImage)
app.use("/api",roterPdf)

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});



