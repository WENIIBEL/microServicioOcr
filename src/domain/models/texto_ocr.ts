
export class  TextoOcr {
    id:number;
    id_prescription:number;
    text: string;

    /**
     *
     */
    constructor(info:{
        id:number;
        id_prescription:number;
        text: string
    }) {
        this.id = info.id;
        this.id_prescription = info.id_prescription;
        this.text = info.text
    }

} 
