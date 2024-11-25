export const swaggerOptions = {
    
        openapi:"3.0.3",
        info:{
            title: "Api reconocimiento de texto",
            description: "Micro servicio de reconocimiento de texto",
            version:"1.0",
            constac:{
                name:"wenn",
                email:"florezaraujo@hotmail.com"

            }
      
        },
        servers:[
            {
                url:"http://localhost:3002",
                description:"servidor local",



            }
        ],
        phaths:{
            "api/pdf":{
                post:{}
            }
        }
      
      

}