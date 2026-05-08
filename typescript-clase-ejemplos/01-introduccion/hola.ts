// =============================================================================
// 01 - INTRODUCCIÓN A TYPESCRIPT
// =============================================================================
// Objetivo: mostrar que TypeScript NO se ejecuta directamente en Node.
// Primero hay que TRANSPILARLO a JavaScript con `tsc`. Recién después corre.
// =============================================================================

// Anotación de tipo: le decimos al compilador que `mensaje` es un string.
// En tiempo de compilación, TS verifica que solo le asignemos strings.
const mensaje: string = "Hola, TypeScript!";

// Función con tipo de parámetro y tipo de retorno explícitos.
// Esto evita que alguien la llame con un tipo incorrecto.
function saludar(nombre: string): string {
    return `${mensaje} Bienvenido, ${nombre}.`;
}

// Llamada correcta: nombre es string -> compila ok.
console.log(saludar("Fabio"));

// Si descomentás la línea siguiente, TS te marca error de compilación
// porque 42 es number y `saludar` espera string. Probalo en clase!
// console.log(saludar(42));
