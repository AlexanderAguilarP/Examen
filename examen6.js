// Función para capturar y procesar la información del cliente
function capturarInformacionCliente() {
    // Capturar datos del cliente mediante prompt
    let nombre = prompt("Ingrese su nombre:");
    let apellido = prompt("Ingrese su apellido:");
    let edad = parseInt(prompt("Ingrese su edad:"));

    // Verificar si es mayor de edad (mayor o igual a 18 años)
    let esMayorEdad = edad >= 18;

    // Mostrar mensaje sobre mayoría de edad
    if (esMayorEdad) {
        alert(`${nombre} ${apellido} es mayor de edad.`);
    } else {
        alert(`${nombre} ${apellido} es menor de edad.`);
    }

    // Crear objeto Persona con función nombreCompleto
    let persona = {
        nombre: nombre,
        apellido: apellido,
        edad: edad,
        nombreCompleto: function() {
            return `${this.nombre} ${this.apellido}`;
        }
    };

    // Imprimir el método nombreCompleto en un alert
    alert(`Nombre completo: ${persona.nombreCompleto()}`);
}

// Llamar a la función para capturar información del cliente
capturarInformacionCliente();
