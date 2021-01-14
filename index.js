// creacion del objeto en una clase, con su constructor y metodo con getter
class auto{

    constructor(marca, modelo, puertas, cilindrada, precio) {
        this.marca = marca;
        this.modelo = modelo;
        this.puertas = puertas;
        this.cilindrada = cilindrada;
        this.precio = precio;
    }
 
    mostrar(){
        if (this.puertas > 0 && this.cilindrada <= 0) {
            return(
                "Marca: " + this.marca +
                " // " + 
                "Modelo: " + this.modelo + 
                " // " + 
                "Puertas: " + this.puertas +
                " // " + 
                "Precio: " + "$" + this.precio
            );
        }else{
            return(
                "Marca: " + this.marca +
                " // " + 
                "Modelo: " + this.modelo + 
                " // " + 
                "Cilindrada: " + this.cilindrada +
                " // " + 
                "Precio: " + "$" + this.precio
            );
        }
    }

    get showData(){
        return this.mostrar();
    }


} // end class

// asignamos valores
(carOne = new auto("Peugeot", "266", 4, 0, "200.000.00")),
(carDos = new auto("Honda", "Titan", 0, "125c", "60.000.00")),
(carTres = new auto("Peugeot", "208", 5, 0, "250.000.00")),
(carCuatro = new auto("Yamaha", "VBR", 0, "160c", "80.500.50")),
console.log(carOne.showData);
console.log(carDos.showData);
console.log(carTres.showData);
console.log(carCuatro.showData);
let listaAutos = [];
listaAutos.push(carOne, carDos, carTres, carCuatro);
// console.log(listaAutos);

// extra del ejercicio
console.log("----------------------------");
console.log("SACAMOS, MENOR, MAYOR Y EL QUE TIENE LETRA Y");
function cualEs(data){
    
    let cualEs = [];
    data.forEach(index => {
        cualEs.push(parseInt(index.precio));
    }); // precios array
    // sacamos cual es el precio mayor y menor de un array con apply (NO ES6)
    let higher = Math.max.apply(null, cualEs);
    let less = Math.min.apply(null, cualEs);
    data.forEach((index) => {
        let precio = parseInt(index.precio);
        let marca = index.marca;
        let modelo = index.modelo;
        let marcaUpper = marca.toUpperCase();
        if (higher == precio) {
            console.log("El auto mas caro es: " + marca + "" + modelo);
        } 
        if (less == precio) {
            console.log("El auto mas barato es: " + marca + "" + modelo);
        } 
        if (marcaUpper.includes("Y")) {
            console.log("El auto que contiene la letra Y es: " + marca + "" + modelo);
        } // solo agarra uno
    }) // end recorrido del nuevo array
} // end



// para ordenar antes hacemos un metodo para saber el precio de cada auto
let data = [];
// metodo solo para crear otro array con ciertos datos especificos de los objetos
function getPrice(){
    listaAutos.map((index) => {
        data.push({
            precio: index.precio,
            marca: index.marca,
            modelo: index.modelo,
        });
    });
    // pasamos los datos a este metodo y tambien al anterior
    cualEs(data);
    order(data);
}
getPrice(); // arma el nuevo array
//console.log(data);

function order(data) {
    let arrayPrices = [];
    data.forEach((index) => {
        arrayPrices.push(parseInt(index.precio));
        arrayPrices.sort((a, b) => {
            return b - a;
        });
    });
    console.log("----------------------------");
    console.log("ORDENADOS DE MAYOR A MENOR POR SU PRECIO");
    arrayPrices.forEach((index) => {
        let currentPriceCar = index;
        data.forEach(element => {
            let precioOriginal = element.precio;
            let precio = parseInt(element.precio);
            let marca = element.marca;
            let modelo = element.modelo;
            if (currentPriceCar == precio) {
                console.log(marca + " " + modelo + " con un valor de: " + precioOriginal);
            }
        });
    }) 
}


