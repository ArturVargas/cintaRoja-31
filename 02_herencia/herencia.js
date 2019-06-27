
// class Vehiculo {
//     constructor(color = "azul", marca = "VW", ruedas = 4, tamanio = "sedan") {
//         this.color = color;
//         this.marca = marca;
//         this.ruedas = ruedas;
//         this.tamanio = tamanio;
//     }

//     avanzar(){
//         console.log("Esta Avanzando");
//     }
// }
// console.log(typeof(Vehiculo));

// class Automovil extends Vehiculo {
//     constructor(color, marca, ruedas, tamanio, motor) {
//         super(color, marca, ruedas, tamanio)
//         this.motor = motor;
//     }

// }

// var vehiculo = new Vehiculo();
// console.log(vehiculo);
// var moto = new Automovil("Negra", "Ducati", 2, "Pista", "200cc");
// console.log(moto);
// moto.avanzar();

class Jugador {
    constructor(name){
        this.name = name;
        this.pv = 100;
        this.sp = 100;
    }
    curar(jugadorObjetivo) {
        this.sp -= 40;
        jugadorObjetivo.pv += 20;
        console.info(this);
        console.info(jugadorObjetivo)
    }
}

class JugadorDos extends Jugador {
    constructor(name, arma) {
        super()
        console.error(name, arma)
    }

    disparar(jugadorObjetivo) {
        jugadorObjetivo.pv -= 30;
        console.info(this);
        console.info(jugadorObjetivo)
    }
}

// var jugar1 = new JugadorDos('Arturo', 'machete');
// var jugar2 = new Jugador('Moy');
// jugar1.disparar(jugar2);
// jugar2.curar(jugar1);



class Maestro {
    constructor(materia, calificaciones){
        this.materia = materia;
        this.calificaciones = calificaciones;
    }

    calcularPromedio(){

        let sumaTotal = 0;

        for(let i=0; i<this.calificaciones.length; i++){
            sumaTotal += this.calificaciones[i];
        }
		  var promedio = (sumaTotal/this.calificaciones.length);
        return promedio
    }

     //Como metodo.
     imprimir(promedio) {
        console.log(
            `El profesor de ${this.materia}, 
            con una Antigüedad de ${this.antiguedad} años, 
            tiene un promedio de ${promedio}`
        );
    }
}

class MaestroDeFisica extends Maestro {
    constructor(materia, calificaciones, antiguedad){
        super(materia, calificaciones);
        this.antiguedad = antiguedad;

    }

}

class MaestroDeMusica extends Maestro {
    constructor(materia, calificaciones, edad) {
        super(materia, calificaciones);
        //hice cambio de nombre de variable
        //para que no quedara el dato como undefined
        this.antiguedad = edad;
    }
}

const profe_1 = new MaestroDeFisica('fisica', [7,8,5,1,10,5,2,3,5], 8);
const profe_2 = new MaestroDeMusica('musica', [9,10,9,8,9,9,6,7,10], 2);

// console.log( profe_1.calcularPromedio() );
// console.log( profe_2.calcularPromedio() );
// //traemos el metodo imprimir y le mandamos como argumento el promedio.
// profe_1.imprimir(profe_1.calcularPromedio());
// profe_2.imprimir(profe_2.calcularPromedio());


class Electrodomestico {
    constructor(precio, color, capacidad){
        this.precio = precio;
        this.color = color;
        this.capacidad = capacidad;
    }

    getConsumoEnergetico(){
        console.log(this);
        return this.consumoEnergetico;
    }

    setConsumoEnergetico(precio){
        this.consumoEnergetico = precio;
    }
}

/*
------------------------------------------------------------
3.- Crea una subclase de Electrodomestico llamada Lavadora 
    con las siguientes características:
    a. Su atributo es carga(kg de ropa), además de los 
       atributos heredados.
    b. Crea el método precioFinal(). Este se calcula
       multiplicando el consumoEnergetico por la carga.
------------------------------------------------------------
*/

class Lavadora extends Electrodomestico {
    constructor(precio, color, capacidad, carga){
        super(precio, color, capacidad);
        this.carga = carga;
    }

    precioFinal(precio) {
        console.log(precio);
        return 'Total: $' + this.getConsumoEnergetico(precio) * this.carga;
    }
}

const lavadora = new Lavadora(7800, 'blanco', 20, 6);
lavadora.setConsumoEnergetico(100);
console.log( lavadora.precioFinal());

