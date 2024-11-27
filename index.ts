
import express from "express";
import { routes } from "./src/routers/index.routes";



const app = express();
const port = 3002;

app.use(express.json());


app.use("/api/v1", routes())



app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});



