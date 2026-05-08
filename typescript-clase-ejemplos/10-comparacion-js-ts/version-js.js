// =============================================================================
// 10 - VERSIÓN JAVASCRIPT (sin tipos)
// =============================================================================
// Mismo programa que en version-ts.ts, pero en JS puro.
// JS NO tiene tipos: todo lo verifica recién en RUNTIME y a veces ni eso.
// =============================================================================

// Función sin tipos: cualquiera puede pasarle lo que quiera
function calcularTotal(items, descuento) {
    let total = 0;
    for (const item of items) {
        total += item.precio * item.cantidad;
    }
    return total - descuento;
}

const carrito = [
    { producto: "Notebook", precio: 1500, cantidad: 1 },
    { producto: "Mouse",    precio: 25,   cantidad: 2 },
];

console.log("Total OK:", calcularTotal(carrito, 100));

// 💀 PROBLEMA: nada nos impide pasar argumentos basura.
// JS no se queja en compilación (no hay compilación) y devuelve NaN.
console.log("Total con bug:", calcularTotal("string-en-vez-de-array", "diez"));
// -> imprime NaN sin avisar nada
