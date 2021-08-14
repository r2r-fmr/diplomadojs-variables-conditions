const prompt = require('prompt')


let propertiesConfig = {
    properties:{
        // Configs for user age input 
        age:{
            description: "Introduzca su edad",
            type: 'integer',
            message: 'La edad debe ser un numero entero'
        }
    }
}


prompt.start();

// Getting user inputs
prompt.get(propertiesConfig, function (err, input){
    
    if (input.age > 18) console.log("Ya puede sacar licencia de mayor y poder conducir.")
    else{console.log("Aun no puede sacar licencia de mayor")}
})
    





