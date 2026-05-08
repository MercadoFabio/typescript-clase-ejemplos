// =============================================================================
// 04 - null y undefined
// =============================================================================
// Con `strictNullChecks: true` (el modo recomendado), null y undefined NO son
// asignables a otros tipos. Hay que declararlos explícitamente en la unión.
// =============================================================================

// 1) Variable que PUEDE ser undefined: lo decimos en el tipo
let titulo: string | undefined;
console.log("titulo inicial:", titulo); // undefined

titulo = "Curso de TS";
console.log("titulo asignado:", titulo);

// 2) Variable que puede ser null
let referencia: string | null = null;
referencia = "valor";

// 3) Acceso seguro con OPTIONAL CHAINING (?.)
type Usuario = { nombre: string; direccion?: { calle: string; nro: number } };
const u: Usuario = { nombre: "Fabio" };

// Si direccion es undefined, ?. devuelve undefined sin tirar error
const calle = u.direccion?.calle;
console.log("calle:", calle); // undefined (no rompe)

// 4) NULLISH COALESCING (??): valor por defecto cuando es null o undefined
const calleSafe = u.direccion?.calle ?? "Sin calle";
console.log("calleSafe:", calleSafe);

// 5) NON-NULL ASSERTION (!): "yo te juro que no es null/undefined"
// Úsenlo con cuidado, es como el `as` de unsafe.
function buscarUsuarioPorId(id: number): Usuario | undefined {
    if (id === 1) return { nombre: "Fabio" };
    return undefined;
}
const encontrado = buscarUsuarioPorId(1)!; // ! le dice a TS "trust me, no es undefined"
console.log("encontrado:", encontrado.nombre);

// 6) Type guard para descartar null/undefined
function imprimirSiExiste(v: string | null | undefined): void {
    if (v == null) { // == null cubre null Y undefined
        console.log("(vacío)");
        return;
    }
    // Acá TS sabe que v es string
    console.log(v.toUpperCase());
}
imprimirSiExiste("hola");
imprimirSiExiste(null);
imprimirSiExiste(undefined);


export {};
