
import { Router } from "express";
import multer from "multer";
import { Request, Response } from "express";
import { swaggerOptions } from "../../docs/swagget";
import swaggerUi from "swagger-ui-express";

const routerImage = Router();

// Configuración de almacenamiento en memoria
const storage = multer.memoryStorage();
const upload = multer({ storage });

routerImage.use(`/docs`,swaggerUi.serve, swaggerUi.setup(swaggerOptions))

// Endpoint para subir imágenes
routerImage.post("/api/images", upload.single("image"), (req:Request, res:Response):void => {
  if (!req.file) {
     res.status(400).json({ message: "No se envió ninguna imagen." });
     return;
  }

  const { originalname, size, mimetype } = req.file;
  console.log(`Imagen recibida: ${originalname} (${size} bytes, ${mimetype})`);

  res.status(200).json({
    message: "Imagen procesada con éxito.",
   
  });
});

export { routerImage };
