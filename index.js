/*let autos = {
    marca: 'peugeot', 
    modelo: 206, 
    puertas: 4,
    precio: $200000
};*/

function Auto(){
    this.marca = marca;
    this.modelo = modelo;
    this.puertas = puertas;
    this.precio = precio;
    this.cilindrada = cilindrada;
}

let autoOne = new Auto("Peugeot", "206", 4, 20000000);
let autoDos = new Auto("Honda", "Titan", 20000000, "125c");
let autoTres = new Auto("Peugeot", "208", 5, 25000000);
let autoCuatro = new Auto("Yamaha", "VBR", 20000000, "160c");

console.log(autoOne);

// Marca: Peugeot // Modelo: 206 // Puertas: 4 // Precio: $200.000,00
// Marca: Honda // Modelo: Titan // Cilindrada: 125c // Precio: $60.000,00
// Marca: Peugeot // Modelo: 208 // Puertas: 5 // Precio: $250.000,00
// Marca: Yamaha // Modelo: YBR // Cilindrada: 160c // Precio: $80.500,50