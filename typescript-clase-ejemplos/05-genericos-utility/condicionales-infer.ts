// =============================================================================
// 05 - TIPOS CONDICIONALES e infer
// =============================================================================
// La sintaxis es: `T extends U ? X : Y`
// Es como un IF a nivel de tipos.
// `infer` permite EXTRAER un tipo de dentro de otro tipo (ej: el retorno de
// una función, el tipo que resuelve una Promise, etc.).
// =============================================================================

// Ejemplo 1: tipo condicional simple
type EsString<T> = T extends string ? "sí" : "no";

type A = EsString<"hola">;   // "sí"
type B = EsString<42>;        // "no"

const a: A = "sí";
const b: B = "no";
console.log({ a, b });

// =============================================================================
// `infer` para extraer el tipo de retorno de una función (ReturnType casero)
// =============================================================================
type MiReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

function obtenerEdad(): number {
    return 32;
}
type EdadType = MiReturnType<typeof obtenerEdad>; // number

const edad: EdadType = 32;
console.log("edad:", edad);

// =============================================================================
// `infer` para "desenvolver" una Promise
// =============================================================================
type Desenvolver<T> = T extends Promise<infer U> ? U : T;

type T1 = Desenvolver<Promise<string>>;  // string
type T2 = Desenvolver<Promise<number[]>>; // number[]
type T3 = Desenvolver<boolean>;           // boolean (no es promise -> queda igual)

const t1: T1 = "valor";
const t2: T2 = [1, 2, 3];
const t3: T3 = true;
console.log({ t1, t2, t3 });

// En TS moderno hay un utility incorporado: Awaited<T> hace lo mismo
type T4 = Awaited<Promise<Promise<string>>>; // string (desenvuelve recursivamente)
const t4: T4 = "soy string después de awaited";
console.log(t4);


export {};
