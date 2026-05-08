// =============================================================================
// 02 - ARRAYS (ARREGLOS) Y TUPLAS
// =============================================================================
// Hay DOS sintaxis equivalentes para tipar arrays:
//   1) Tipo[]        -> número[]
//   2) Array<Tipo>   -> Array<number>
// Las dos son intercambiables. La primera es la más común.
// =============================================================================

// Sintaxis con corchetes (la más usada)
const numeros: number[] = [1, 2, 3, 4, 5];

// Sintaxis genérica equivalente
const palabras: Array<string> = ["hola", "mundo", "ts"];

// Array de cualquier objeto: tipamos los elementos
const flags: boolean[] = [true, false, true];

// TUPLAS: array de longitud fija con tipos por posición
// Útiles para representar pares clave/valor o coordenadas
const coordenada: [number, number] = [10, 20];
const usuario: [string, number, boolean] = ["Fabio", 32, true];

// Array readonly: NO se puede modificar después de creado
const constantes: readonly number[] = [1, 2, 3];
// constantes.push(4); // ❌ error: push no existe en readonly array

// Métodos típicos sobre arrays (TS los conoce y autocompleta)
const mayores: number[] = numeros.filter((n) => n > 2);
const dobles: number[] = numeros.map((n) => n * 2);
const total: number = numeros.reduce((acc, n) => acc + n, 0);

console.log({ numeros, palabras, flags, coordenada, usuario, mayores, dobles, total });

// Si descomentás, TS te rebota: estás metiendo string donde van numbers
// numeros.push("seis"); // ❌


export {};
