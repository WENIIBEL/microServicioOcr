
export class  TextoOcr {
    id?:number ;
    text: string;

   
    constructor(info:{
        id?:number;
        id_prescription:number;
        text: string
    }) {
        this.id = info.id;
        this.text = info.text
    }

} 
