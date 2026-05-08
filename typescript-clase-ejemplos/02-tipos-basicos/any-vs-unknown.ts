// =============================================================================
// 02 - any vs unknown
// =============================================================================
// REGLA 2026: usar `any` se considera mala práctica. La alternativa segura
// es `unknown`, que obliga a verificar el tipo antes de usar el valor.
// =============================================================================

// `any` desactiva el chequeo de tipos: TS confía ciegamente en lo que digamos.
// Esto es PELIGROSO porque vuelve a JS sin red de seguridad.
let valorAny: any = "hola";
valorAny = 42;            // permitido
valorAny = { x: 1 };      // permitido
// La línea siguiente NO la pone TS como error, pero EXPLOTA en runtime.
// La dejamos comentada para que el demo no se rompa. Descomentala en clase.
// valorAny.metodoQueNoExiste(); // ⚠️ TypeError en tiempo de ejecución
console.log("any deja pasar todo en compilación. Si descomentás la línea de arriba, runtime explota.");

// `unknown` también acepta cualquier valor, PERO no te deja usarlo
// hasta que verifiques su tipo. Es "any pero seguro".
let valorUnknown: unknown = "hola";

// valorUnknown.toUpperCase(); // ❌ TS no sabe si es string -> rechaza
// Forma correcta: NARROWING con typeof
if (typeof valorUnknown === "string") {
    // Dentro del if, TS sabe que valorUnknown es string -> permite los métodos
    console.log(valorUnknown.toUpperCase()); // ✓
}

// Otro narrowing: con instanceof
const otroValor: unknown = new Date();
if (otroValor instanceof Date) {
    console.log("Es un Date:", otroValor.toISOString());
}


export {};
