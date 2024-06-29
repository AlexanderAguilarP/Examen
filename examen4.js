
class Material {
    constructor(nombre, tipo, cantidad, precioPorUnidad) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.cantidad = cantidad;
        this.precioPorUnidad = precioPorUnidad;
    }

    
    calcularCosto() {
        return this.cantidad * this.precioPorUnidad;
    }

   
    mostrarInformacion() {
        console.log(`Material: ${this.nombre}`);
        console.log(`Tipo: ${this.tipo}`);
        console.log(`Cantidad: ${this.cantidad}`);
        console.log(`Precio por unidad: ${this.precioPorUnidad}`);
        console.log(`Costo total del stock: ${this.calcularCosto()}`);
    }
}


let material1 = new Material("Ladrillos", "Construcción", 1000, 2.5);
let material2 = new Material("Cemento", "Construcción", 500, 5.75);
let material3 = new Material("Azulejos", "Acabados", 300, 8.0);

// Mostrar información de los materiales
material1.mostrarInformacion();
console.log("---------------------");
material2.mostrarInformacion();
console.log("---------------------");
material3.mostrarInformacion();
