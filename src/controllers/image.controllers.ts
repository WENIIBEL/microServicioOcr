import { Request,Response } from "express";
import { createWorker } from "tesseract.js";


// aquí va la logica en general

interface MulterRequest extends Request {
    file?:Express.Multer.File
} 

export const CtrlImage = async (req:MulterRequest, res:Response):Promise<void> => {
    console.log("recibida")
    
    if (!req.file) {
        res.status(400).send("no se cargó ningú archivo");
        return;
    }

    try{
        console.log("iniciando el worker")
        const worker = await createWorker();
        const ret = await worker.recognize(req.file?.path); // alamcena el resultado del conocimiento optico
        const text = ret.data.text;
        console.log(ret.data.text);
        console.log("funciona")
        await worker.terminate();

        console.log("texto reconocido",text)
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