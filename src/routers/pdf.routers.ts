
import { ctrPdf } from "../controllers/pdf.controllers";
import express from "express";
import multer from "multer";

const router = express.Router();
const upload = multer({ dest: 'pdfs/' });

router.post('/pdf', upload.single('pdf'), ctrPdf);

export {router as roterPdf}


