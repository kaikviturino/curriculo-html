let idade = 19
let temDinheiro = false
let temCadunico = false
// > maior que
// >= maior ou igual a
// < menor que 
// <= menor ou igual a

if (idade >= 18) {
    if (temDinheiro == true) {
        console.log("Vamos pagar o quebra!");
    }

    else {
        if (temCadunico == true) {
            console.log("CNH de graça");

        }
        else {
            console.log("Pobrinho demais para tirar a CNH");
        }
    }
}
else {
    console.log("Muito novo para pilotar");
}
   