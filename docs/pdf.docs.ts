export const pdfDoc = {
    post:{
        tags:["PDF"],
        summary: "Leer nuevo pdf",
        description: "Se hace un procesado de un PDF",
        requestBody:{
            content:{
                "application/json":{
                    schema:{
                        $ref: "#/components/schemas/PDF"
                    }
                }
            }
        },
        responses:{
            "201":{
                description: "PDF Procesado correctamente",
                content:{
                    "application/json":{
                        schema:{
                            $ref: "#/components/schemas/PDF"
                        }
                    }
                }
            },
            "400":{
                description: "Error al procesar los datos"
            },
            "500":{
                description: "Error interno del servidor"
            }
        }
    },
}