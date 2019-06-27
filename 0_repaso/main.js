

// Hacer una funcion que muestre 
// la tabla de multiplicar de un número

let tablaMultiplicar = (num) => {
    for( let i = 1; i <= 10; i++) {
        console.log(`${num} X ${i} = ${num * i}`);
    }
    return null;
}

//tablaMultiplicar(4);

// Hacer una funcion que imprima los numeros pares
// del 1 al 50

const numeroPares = () => {
    for(let i = 1; i <= 50; i++) {
        if(i % 2 == 0){
            console.log(`${i} Es par`);
        }
    }
}
numeroPares();

// Hacer una funcion qeu me diga si una
// cadena de texto es palindromo o no