// =============================================================================
// 04 - TIPOS DE UNIÓN (|) Y NARROWING
// =============================================================================
// Una UNIÓN dice "este valor puede ser de tipo A O de tipo B".
// Para usar un método específico, hay que NARROWAR (refinar) primero.
// =============================================================================

// Unión simple: number | string
function imprimirId(id: number | string): void {
    if (typeof id === "string") {
        // Dentro del if, TS sabe que id es string -> permite toUpperCase
        console.log("ID string:", id.toUpperCase());
    } else {
        // En el else, id solo puede ser number
        console.log("ID número:", id.toFixed(0));
    }
}
imprimirId(101);
imprimirId("ABC-001");

// Cuando ambos miembros de la unión comparten un método, no hace falta narrowing
function tomarPrimeros(x: number[] | string): number[] | string {
    return x.slice(0, 3); // .slice existe en ambos -> ok
}
console.log(tomarPrimeros([1, 2, 3, 4, 5]));
console.log(tomarPrimeros("HolaMundo"));

// =============================================================================
// PATRÓN FUERTE 2026: UNIONES DISCRIMINADAS (estados de máquina)
// =============================================================================
// Modelamos un estado de carga con una propiedad literal `status` que
// "discrimina" qué shape tiene el objeto. TS hace narrowing perfecto.
type EstadoCarga<T> =
    | { status: "idle" }
    | { status: "loading" }
    | { status: "success"; data: T }
    | { status: "error"; error: string };

function renderizar(estado: EstadoCarga<string[]>): string {
    switch (estado.status) {
        case "idle":
            return "Esperando...";
        case "loading":
            return "Cargando...";
        case "success":
            // Acá TS sabe que existe `data`
            return `OK: ${estado.data.join(", ")}`;
        case "error":
            // Acá TS sabe que existe `error`
            return `ERROR: ${estado.error}`;
    }
}

console.log(renderizar({ status: "idle" }));
console.log(renderizar({ status: "loading" }));
console.log(renderizar({ status: "success", data: ["a", "b", "c"] }));
console.log(renderizar({ status: "error", error: "Timeout" }));


export {};
