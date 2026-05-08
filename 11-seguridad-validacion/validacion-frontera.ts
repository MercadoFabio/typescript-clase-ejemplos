// =============================================================================
// 11 - VALIDACIÓN EN LA FRONTERA (Runtime Validation)
// =============================================================================
// TS desaparece al compilar. Si los datos vienen de una API, archivo o input
// del usuario, NADA garantiza que cumplan el tipo declarado.
//
// La práctica 2026 es: validar en la "frontera" del sistema (donde entran
// los datos) y, una vez validados, dentro del sistema confiar en el tipo.
//
// Acá hacemos la validación a mano, sin librerías. En proyectos reales se
// suele usar Zod o Valibot, que derivan el tipo TS desde el schema.
// =============================================================================

// Tipo "ideal" que esperamos
interface UsuarioAPI {
    id: number;
    nombre: string;
    email: string;
    edad: number;
}

// Validador: recibe `unknown` (no confiamos en NADA) y devuelve el tipo
// validado o lanza un error explicativo.
function parseUsuarioAPI(input: unknown): UsuarioAPI {
    if (typeof input !== "object" || input === null) {
        throw new Error("La respuesta no es un objeto");
    }
    const obj = input as Record<string, unknown>;

    if (typeof obj.id !== "number") {
        throw new Error(`id debe ser number, vino: ${typeof obj.id}`);
    }
    if (typeof obj.nombre !== "string" || obj.nombre.length === 0) {
        throw new Error("nombre inválido");
    }
    if (typeof obj.email !== "string" || !obj.email.includes("@")) {
        throw new Error(`email inválido: ${obj.email}`);
    }
    if (typeof obj.edad !== "number" || obj.edad < 0) {
        throw new Error(`edad inválida: ${obj.edad}`);
    }

    // A esta altura TS confía: armamos el objeto tipado
    return {
        id: obj.id,
        nombre: obj.nombre,
        email: obj.email,
        edad: obj.edad,
    };
}

// Simulación: respuestas de una API (todas son `unknown` desde afuera)
const respuestaOK: unknown = {
    id: 1, nombre: "Fabio", email: "Fabio@meli.com", edad: 32,
};
const respuestaMala: unknown = {
    id: "uno", nombre: "Yei", email: "no-tiene-arroba", edad: -5,
};

try {
    const u = parseUsuarioAPI(respuestaOK);
    console.log("Usuario válido:", u);
} catch (e) {
    console.log("Error inesperado:", (e as Error).message);
}

try {
    parseUsuarioAPI(respuestaMala);
} catch (e) {
    console.log("Frontera rechazó datos malos:", (e as Error).message);
}

// =============================================================================
// SIMULACIÓN DE FETCH: cómo se ve en código real
// =============================================================================
async function obtenerUsuarioRemoto(id: number): Promise<UsuarioAPI> {
    // En un proyecto real: const r = await fetch(...); const json = await r.json();
    const json: unknown = { id, nombre: "Mock", email: "mock@meli.com", edad: 25 };

    // Validar antes de devolver. Una vez parseado, todo el resto del código
    // del sistema puede confiar en que es un UsuarioAPI bien formado.
    return parseUsuarioAPI(json);
}

(async () => {
    const u = await obtenerUsuarioRemoto(99);
    console.log("Usuario remoto validado:", u);
})();


export {};
