// =============================================================================
// 02 - TIPOS PRIMITIVOS
// =============================================================================
// TypeScript hereda los primitivos de JavaScript: string, number, boolean.
// La diferencia es que en TS los podemos ANOTAR para que el compilador valide.
// =============================================================================

// string: cadenas de texto
const nombre: string = "Fabio";

// number: incluye enteros Y decimales (TS no distingue int/float, igual que JS)
const edad: number = 32;
const pi: number = 3.1416;

// boolean: true o false
const esProgramador: boolean = true;

// bigint: enteros arbitrariamente grandes (sufijo `n`)
const numeroEnorme: bigint = 9007199254740993n;

// symbol: identificadores únicos
const claveUnica: symbol = Symbol("id");

// Operaciones típicas que TS valida
const saludo: string = nombre.toUpperCase(); // .toUpperCase existe en string ✓
const doble: number = edad * 2;              // multiplicación entre numbers ✓

console.log({ nombre, edad, pi, esProgramador, numeroEnorme, claveUnica, saludo, doble });

// Si descomentás esto, TS lo rechaza en compilación:
// const error: number = "treinta y dos"; // ❌ Type 'string' is not assignable to type 'number'.


export {};
