const prompt = require('prompt');


let propertiesConfig = {
    properties:{
        // Configs for user grade input 
        grade:{
            description: "Introduzca la nota",
            type: 'integer',
            message: 'La nota debe ser un numero entero'
        }
    }
};


prompt.start();

// Getting user inputs
prompt.get(propertiesConfig, function (err, input){
    
    let grade = input.grade;

    if (grade == 0 || grade <= 4) console.log('Insuficiente')
    else if (grade == 5 || grade <= 6) console.log('Suficiente')
    else if (grade == 7 || grade <= 8) console.log('bien')
    else if (grade == 9 || grade <= 10) console.log('Sobresaliente')
    else console.log("Dato incorrecto; El rango debe ser entre 0-10")

})