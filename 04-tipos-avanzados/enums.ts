// =============================================================================
// 04 - ENUMERACIONES (enum)
// =============================================================================
// Sirven para nombrar conjuntos de constantes relacionadas y darles semántica.
// TS soporta enums NUMÉRICAS y enums DE CADENAS.
// =============================================================================

// 1) ENUM NUMÉRICA con valor inicial explícito
enum Direccion {
    Arriba = 1,    // 1
    Abajo,         // 2 (auto-incremental)
    Izquierda,     // 3
    Derecha,       // 4
}

console.log(Direccion.Arriba);   // 1
console.log(Direccion.Derecha);  // 4
// Mapeo INVERSO: dado el número, recupero el nombre (solo enums numéricas)
console.log(Direccion[2]);       // "Abajo"

// 2) ENUM NUMÉRICA implícita (arranca en 0)
enum Respuesta {
    No,            // 0
    Si,            // 1
}
console.log(Respuesta.No, Respuesta.Si);

// 3) ENUM DE CADENAS - cada valor se asigna manualmente
enum DireccionTexto {
    Arriba = "ARRIBA",
    Abajo = "ABAJO",
    Izquierda = "IZQUIERDA",
    Derecha = "DERECHA",
}
console.log(DireccionTexto.Arriba); // "ARRIBA"

// 4) Uso típico: comparación segura y legible
function moverPersonaje(d: Direccion): string {
    switch (d) {
        case Direccion.Arriba:    return "Subiendo";
        case Direccion.Abajo:     return "Bajando";
        case Direccion.Izquierda: return "Yendo izquierda";
        case Direccion.Derecha:   return "Yendo derecha";
    }
}
console.log(moverPersonaje(Direccion.Arriba));

// 5) ALTERNATIVA MODERNA: union de literales (preferida en 2026 si no
//    necesitás el objeto en runtime)
type Estado = "pendiente" | "aprobado" | "rechazado";
function describir(e: Estado): string {
    return `El estado es ${e}`;
}
console.log(describir("aprobado"));
// describir("otro"); // ❌ no es un literal válido


export {};
