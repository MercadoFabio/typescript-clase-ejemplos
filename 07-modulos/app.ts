// =============================================================================
// 07 - app.ts: CONSUMIDOR DE MÓDULOS
// =============================================================================
// Distintas variantes de IMPORT. Compilá y mirá el JS para ver cómo TS las
// traduce a `require(...)` (porque usamos module: commonjs en tsconfig).
// =============================================================================

// 1) Import NOMBRADO con llaves: nombres deben coincidir con los exports
import { PI, cuadrado } from "./matematicas";
console.log("PI =", PI);
console.log("cuadrado(4) =", cuadrado(4));

// 2) Import nombrado con ALIAS (renombrar al importar)
import { PHI as PiConstante } from "./matematicas";
console.log("PHI (alias) =", PiConstante);

// 3) Import DEFAULT: nombre LIBRE (no usa llaves)
import saludar from "./saludo";
console.log(saludar("Fabio"));

// 4) Combinar default + nombrados
import saludarDefault, { VERSION } from "./saludo";
console.log(`Versión saludo: ${VERSION}`);
console.log(saludarDefault("Yei"));

// 5) Importar TODO bajo un namespace con `* as`
import * as math from "./matematicas";
console.log("math.PI =", math.PI);
console.log("math.cuadrado(5) =", math.cuadrado(5));

// 6) Import de tipos solamente (`import type`)
//    Garantiza que esa importación sea ELIMINADA del JS final.
import type { Usuario, ID } from "./modelos";

const u: Usuario = { id: 1, nombre: "Fabio", email: "a@b.com" };
const idx: ID = "abc-123";
console.log({ u, idx });
