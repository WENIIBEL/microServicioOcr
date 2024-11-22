import { getPoolConnection } from "./config/data-source";
import { TextoOcr } from "../domain/models/textoOcr";
import { FieldPacket, ResultSetHeader } from "mysql2/promise";


export class ImageRepository  {

    async create(body:TextoOcr): Promise< TextoOcr| null > {
        const connection = getPoolConnection()
        const querySql: string = `INSERT INTO  texto_ocr ( id_prescription, text) VALUES (?,?)`
        const values: Array<string|number> = [
            body.id_prescription,
            body.text
        ]
        const result:[ResultSetHeader, FieldPacket[]] = await connection.query(querySql,values)
        return result[0].affectedRows ==1? body:null
 
    }
}