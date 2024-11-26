export const imagesDoc = {
    post: {
        tags: ["Images"],
        summary: "Leer nueva imagen",
        description: "Se hace un procesado de una imagen para extraer texto.",
        requestBody: {
            required: true,
            content: {
                "multipart/form-data": {
                    schema: {
                        type: "object",
                        properties: {
                            file: {
                                type: "string",
                                format: "binary",
                                description: "Archivo de imagen a procesar (JPEG, PNG, etc.)"
                            }
                        },
                        required: ["file"]
                    }
                }
            }
        },
        responses: {
            "201": {
                description: "Imagen procesada correctamente",
                content: {
                    "application/json": {
                        schema: {
                            type: "object",
                            properties: {
                                text: {
                                    type: "string",
                                    description: "El texto extraído de la imagen."
                                }
                            }
                        }
                    }
                }
            },
            "400": {
                description: "Error al procesar la imagen. Asegúrate de que el archivo es válido."
            },
            "500": {
                description: "Error interno del servidor."
            }
        }
    }
};
