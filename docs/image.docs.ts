export const imagesDoc = {
    post:{
        tags:["Images"],
        summary: "Leer nueva imagen",
        description: "Se hace un procesado de una imagen",
        requestBody:{
            content:{
                "application/json":{
                    schema:{
                        $ref: "#/components/schemas/Images"
                    }
                }
            }
        },
        responses:{
            "201":{
                description: "imagen Procesada correctamente",
                content:{
                    "application/json":{
                        schema:{
                            $ref: "#/components/schemas/Images"
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