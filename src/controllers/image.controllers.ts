import { Request,Response } from "express";
import { createWorker } from "tesseract.js";
import { ImageRepository } from "../repositories/image.repository";
import { TextoOcr } from "../domain/models/textoOcr";


// aquí va la logica en general

interface MulterRequest extends Request {
    file?:Express.Multer.File
} 

export const CtrlImage = async (req:MulterRequest, res:Response):Promise<void> => {
    
    
    if (!req.file) {
        res.status(400).send("no se cargó ningú archivo");
        return;
    }

    try{
       
        const worker = await createWorker();
        const ret = await worker.recognize(req.file?.path); // alamcena el resultado del conocimiento optico
        const text = ret.data.text;
        console.log(ret.data.text);
        console.log("funciona")
        await worker.terminate();

        const imageRepository = new ImageRepository()
        const textoOcr: TextoOcr = {
          id: 'generate-id',
          id_prescription: 'prescription-id',
          text: text
        }

      
        res.status(200).json({ message: "texto reconocido:", text });
        
    }catch (error) {
        if (error instanceof Error) {
          // instanceof verifica si el erro es de tipo ERROR
          res.status(500).send(`error al procesar la imagen : ${error.message}`);
        } else {
          res.status(500).send("Error desconocido al procesar la imagen");
        }
      }
}