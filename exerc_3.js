const prompt = require('prompt')


let propertiesConfig = {
    properties:{
        // Configs for user input 
        hours:{
            description: "Introduzca las horas",
            type: 'integer',
            message: 'EL dato introducido debe ser un numero entero'
        },

        minutes:{
            description: "Introduzca los minutos",
            type: 'integer',
            message: 'El dato introducido debe ser un numero entero'
        }
    }
}


prompt.start();

// Getting user inputs
prompt.get(propertiesConfig, function (err, input){
    
    let hours = input.hours
    let minutes = input.minutes

    if (minutes > 0) hours += 1;

    let amount = hours * 1500

    console.log(`Monto a pagar: $ ${amount}`)
    
})