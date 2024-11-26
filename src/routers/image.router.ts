
import express from "express";
import multer from "multer";
import { CtrlImage } from "../controllers/image.controllers"; 
import swaggerUi from "swagger-ui-express";
import { swaggerOptions } from "../../docs/swagget";




export const routerImage = express.Router()
    const upload = multer({dest: 'images/'  })
    routerImage.use(`/docs`,swaggerUi.serve, swaggerUi.setup(swaggerOptions))
    routerImage.post('/images', upload.single('image'), CtrlImage)
