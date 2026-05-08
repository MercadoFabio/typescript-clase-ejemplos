// =============================================================================
// 11 - TYPE GUARDS PERSONALIZADOS (user-defined type guards)
// =============================================================================
// Cuando typeof/instanceof/in no alcanzan, podemos escribir nuestra propia
// función "type guard" usando la sintaxis: `argumento is Tipo`.
// =============================================================================

interface Empleado {
    tipo: "empleado";
    legajo: number;
    salario: number;
}

interface Cliente {
    tipo: "cliente";
    cuit: string;
    saldoCuenta: number;
}

type Persona = Empleado | Cliente;

// Type guard manual: la firma "x is Empleado" le dice a TS que cuando esta
// función devuelve true, x es de tipo Empleado dentro del bloque que llama.
function esEmpleado(p: Persona): p is Empleado {
    return p.tipo === "empleado";
}

function reportar(p: Persona) {
    if (esEmpleado(p)) {
        // TS sabe que p es Empleado acá
        console.log(`Empleado #${p.legajo} - salario: $${p.salario}`);
    } else {
        // TS sabe que p es Cliente acá
        console.log(`Cliente CUIT ${p.cuit} - saldo: $${p.saldoCuenta}`);
    }
}

reportar({ tipo: "empleado", legajo: 42, salario: 3000 });
reportar({ tipo: "cliente", cuit: "20-12345678-9", saldoCuenta: 1500 });

// =============================================================================
// Type guard útil: chequear si un valor es array de strings
// =============================================================================
function esArrayDeStrings(v: unknown): v is string[] {
    return Array.isArray(v) && v.every((x) => typeof x === "string");
}

const dato: unknown = ["a", "b", "c"];
if (esArrayDeStrings(dato)) {
    // TS sabe que dato es string[] acá
    console.log("Strings:", dato.map((s) => s.toUpperCase()));
}

const otro: unknown = ["a", 1, "c"];
if (esArrayDeStrings(otro)) {
    console.log("nunca entra acá");
} else {
    console.log("Rechazado: no es array de strings puro");
}


export {};
