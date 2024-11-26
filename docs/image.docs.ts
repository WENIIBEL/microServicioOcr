export const imageDoc = {
  post: {
    tags: ["Imagen"],
    summary: "Subir y procesar una imagen",
    description: "Este endpoint permite cargar una imagen para extraer información o realizar operaciones sobre ella.",
    requestBody: {
      required: true,
      content: {
        "multipart/form-data": {
          schema: {
            type: "object",
            properties: {
              image: {
                type: "string",
                format: "binary",
                description: "Archivo de imagen a procesar. Formatos aceptados: .jpg, .png, etc."
              }
            },
            required: ["image"]
          }
        }
      }
    },
    responses: {
      "200": {
        description: "Imagen procesada correctamente.",
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                message: {
                  type: "string",
                  example: "La imagen fue procesada exitosamente."
                },
                result: {
                  type: "object",
                  properties: {
                    data: {
                      type: "array",
                      items: {
                        type: "string"
                      },
                      description: "Información extraída o resultado del procesamiento de la imagen."
                    },
                    imageUrl: {
                      type: "string",
                      example: "https://example.com/images/imagen-procesada.jpg",
                      description: "URL de la imagen procesada, si aplica."
                    }
                  }
                }
              }
            }
          }
        }
      },
      "400": {
        description: "Error al procesar la imagen.",
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                message: {
                  type: "string",
                  example: "La imagen proporcionada no es válida o el formato no está soportado."
                }
              }
            }
          }
        }
      },
      "500": {
        description: "Error interno del servidor.",
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                message: {
                  type: "string",
                  example: "Se produjo un error al procesar la solicitud."
                }
              }
            }
          }
        }
      }
    }
  }
};
