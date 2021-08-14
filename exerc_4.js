const prompt = require('prompt');


let propertiesConfig = {
    properties:{
        // Configs for user input 
        num:{
            description: "Introduzca un numero positivo entero",
            type: 'integer',
            message: 'El dato introducido debe ser un numero entero'
        }
    }
};


prompt.start();

// Getting user inputs
prompt.get(propertiesConfig, function (err, input){
    
    let num = input.num;

    if (num < 0) console.log('El numero debe ser positivo.')
    else if (num % 2 === 0) console.log('Este numero es Par')
    else console.log('Este numero es Impar')
   
})
