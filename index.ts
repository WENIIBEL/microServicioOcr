
import express from "express";
import {routerImage} from "./src/routers/image.router"
import { roterPdf } from "./src/routers/pdf.routers";
import { Request, Response, NextFunction } from "express";

const app = express();
const port = 3002;

app.use(express.json());


app.use("/",routerImage)
app.use("/api",roterPdf)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack); 

  res.status(500).json({
    message: "Ocurrió un error en el servidor.",
    error: err.message,
  });
});

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});



