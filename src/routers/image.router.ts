
import express from "express";
import multer from "multer";
import { CtrlImage } from "../controllers/image.controllers"; 

export const routerImage = express.Router()
    const upload = multer({dest: 'imagess/'  })

    routerImage.post('/imagess', upload.single('image'), CtrlImage)







