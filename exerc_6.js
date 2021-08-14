const prompt = require('prompt')


let propertiesConfig = {
    properties:{
        // Configs for user input 
        diameter:{
            description: "Introduzca sel diametro de la rueda",
            type: 'number',
            message: 'El diametro debe ser un numero'
        },

        bulk:{
            description: "Introduzca el grosor de la rueda",
            type: 'number',
            message: 'El grosor debe ser un numero'
        }
    }
}


prompt.start();

// Getting user inputs
prompt.get(propertiesConfig, function (err, input){
    let diameter = input.diameter
    let bulk = input.bulk
    
    if (diameter > 1.4) console.log("La rueda es para un vehiculo grande")
    else if (diameter > 0.8 && diameter <= 1.4 ) console.log("La rueda es para un vehiculo mediano")
    else console.log("La rueda es para un vehiculo pequeño")

    if ((diameter > 1.4 && bulk < 0.4) || (diameter > 0.8 && diameter <= 1.4 && bulk < 0.25)){
        console.log("El grosor para esta rueda es inferior al recomendado")
    }
    
})