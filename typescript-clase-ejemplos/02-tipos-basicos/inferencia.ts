// =============================================================================
// 02 - ANOTACIONES vs INFERENCIA DE TIPOS
// =============================================================================
// TS infiere el tipo automáticamente a partir del valor inicial.
// La regla práctica: ANOTAR sólo cuando la inferencia no alcanza o querés
// dejar el contrato explícito (ej. tipo de retorno de funciones públicas).
// =============================================================================

// ANOTACIÓN EXPLÍCITA: forzamos el tipo
let ciudadAnotada: string = "Buenos Aires";

// INFERENCIA: TS deduce que es string a partir del valor inicial
let ciudadInferida = "Córdoba"; // <- TS infiere `string`
// ciudadInferida = 42; // ❌ error: TS la fijó como string aunque no la anotamos

// Inferencia en arrays
const lista = [1, 2, 3]; // TS infiere `number[]`
// lista.push("cuatro"); // ❌

// Inferencia en objetos literales
const persona = { nombre: "Fabio", edad: 28 }; // TS infiere `{ nombre: string; edad: number }`
// persona.edad = "treinta y dos"; // ❌

// Inferencia de retorno de función
function sumar(a: number, b: number) {
    return a + b; // TS infiere que retorna `number`
}
const resultado = sumar(2, 3); // resultado: number

// Cuándo SÍ conviene anotar el retorno: en APIs públicas para fijar el contrato
function obtenerUsuario(id: number): { id: number; nombre: string } {
    return { id, nombre: "Fabio" };
}

console.log({ ciudadAnotada, ciudadInferida, lista, persona, resultado, usuario: obtenerUsuario(1) });


export {};
