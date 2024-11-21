
import express from "express";
import multer from "multer";
import { CtrlImage } from "../controllers/image.controllers"; 

export const router = express.Router()
    const upload = multer({dest: 'imagess/'  })

    router.post('/imagess', upload.single('image'), CtrlImage)







