
import { Request,Response } from "express";
import pdfParse from 'pdf-parse';
import fs, { promises } from 'fs';


interface MulterRequest extends Request {
    file?:Express.Multer.File 
} 

export const ctrPdf = async (req:MulterRequest,res:Response):Promise<void> => {

    try {

        if(!req.file) {
             res.status(400).json({error: 'no se subio ningún archivo'})
             return
        }

        const filePath = req.file.path
        const pdfBuffer = fs.readFileSync(filePath)

        const data = await pdfParse(pdfBuffer)
         res.status(200).json({text:data.text})
    }catch(error){
        console.error('Error al procesar el PDF',error)
         res.status(500).json({error:'Error al procesar el pdf'})
    }
};


