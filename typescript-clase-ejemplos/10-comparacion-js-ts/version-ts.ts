// =============================================================================
// 10 - VERSIÓN TYPESCRIPT (con tipos)
// =============================================================================
// Mismo programa que version-js.js, pero TS atrapa el bug en COMPILACIÓN.
// =============================================================================

// Definimos la forma esperada de un item
interface ItemCarrito {
    producto: string;
    precio: number;
    cantidad: number;
}

// Función con parámetros TIPADOS y retorno tipado
function calcularTotal(items: ItemCarrito[], descuento: number): number {
    let total = 0;
    for (const item of items) {
        total += item.precio * item.cantidad;
    }
    return total - descuento;
}

const carrito: ItemCarrito[] = [
    { producto: "Notebook", precio: 1500, cantidad: 1 },
    { producto: "Mouse",    precio: 25,   cantidad: 2 },
];

console.log("Total OK:", calcularTotal(carrito, 100));

// Si descomentás la línea siguiente, TS te avisa ANTES de correr:
//   error TS2345: Argument of type 'string' is not assignable to parameter of type 'ItemCarrito[]'
// console.log("Total con bug:", calcularTotal("string-en-vez-de-array", "diez"));
