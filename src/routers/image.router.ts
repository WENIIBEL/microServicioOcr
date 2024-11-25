
import express from "express";
import multer from "multer";
import { CtrlImage } from "../controllers/image.controllers"; 
import swaggerUi from "swagger-ui-express";
import { swaggerOptions } from "../../docs/swagget";



export const routerImage = express.Router()
    const upload = multer({dest: 'imagess/'  })

    routerImage.use(`/docs`,swaggerUi.serve, swaggerUi.setup(swaggerOptions))
    routerImage.post('/imagess', upload.single('image'), CtrlImage)

    







