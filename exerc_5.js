const prompt = require('prompt')

let propertiesConfig = {
    properties:{
        // Configs for user input 
        dozenQty:{
            description: "Introduzca la cantidad de docenas comprada",
            type: 'integer',
            message: 'El valor debe ser numerico entero'
        }
    }
}

const productPrice = 10
let dozenPrice = productPrice * 12

prompt.start();

// Getting user inputs
prompt.get(propertiesConfig, function (err, input){

    let dozenQty = input.dozenQty;
    let totalAmount = dozenQty * dozenPrice;
    let discountAmount = 0;
    let amountToPay = 0;
    let qtyGiftProduct = 0;

    if (dozenQty > 3){
        discountAmount = totalAmount * 0.15; // 15% discount
        amountToPay = totalAmount - discountAmount;
        qtyGiftProduct = dozenQty - 3; // Quantiy of product gifted 
    }else{
        discountAmount = totalAmount * 0.1; // 10% discount
        amountToPay = totalAmount - discountAmount;
    }

    let message = `
    Monto de la compra: $ ${totalAmount}
    Monto del descuento: $ ${discountAmount}
    Monto a pagar: $ ${amountToPay}
    Numero de unidades de obsequio: ${qtyGiftProduct}
    `

    console.log(message)
})