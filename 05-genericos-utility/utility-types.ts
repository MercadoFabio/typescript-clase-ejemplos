// =============================================================================
// 05 - UTILITY TYPES (los más usados en 2026)
// =============================================================================
// Son tipos auxiliares que TS provee out-of-the-box para transformar tipos.
// =============================================================================

interface Usuario {
    id: number;
    nombre: string;
    email: string;
    password: string;
    activo: boolean;
}

// 1) Partial<T>: hace TODAS las propiedades opcionales
//    Útil para DTOs de UPDATE donde solo enviás los campos que cambian.
type UsuarioUpdate = Partial<Usuario>;
function actualizarUsuario(id: number, cambios: UsuarioUpdate): void {
    console.log(`Actualizando ${id} con`, cambios);
}
actualizarUsuario(1, { nombre: "Fabio" });        // ok, solo nombre
actualizarUsuario(1, { email: "x@y.com", activo: false });

// 2) Required<T>: hace todas las propiedades OBLIGATORIAS (lo opuesto a Partial)
type UsuarioCompleto = Required<Partial<Usuario>>; // equivalente a Usuario

// 3) Readonly<T>: hace todas las propiedades INMUTABLES
type UsuarioInmutable = Readonly<Usuario>;
const u: UsuarioInmutable = {
    id: 1, nombre: "Fabio", email: "a@b.com", password: "hash", activo: true,
};
// u.nombre = "otro"; // ❌ readonly

// 4) Pick<T, K>: SELECCIONA un subconjunto de propiedades
type UsuarioPublico = Pick<Usuario, "id" | "nombre" | "email">;
const publico: UsuarioPublico = { id: 1, nombre: "Fabio", email: "a@b.com" };

// 5) Omit<T, K>: ELIMINA propiedades específicas
//    Caso clásico: sacar el password antes de devolver al cliente
type UsuarioSinPassword = Omit<Usuario, "password">;
function aPublico(u: Usuario): UsuarioSinPassword {
    const { password, ...rest } = u;
    return rest;
}
console.log(aPublico(u));

// 6) Record<K, V>: diccionario tipado de claves K a valores V
type RolesPermitidos = "admin" | "editor" | "viewer";
type Permisos = Record<RolesPermitidos, string[]>;
const permisos: Permisos = {
    admin:  ["read", "write", "delete"],
    editor: ["read", "write"],
    viewer: ["read"],
};
console.log(permisos);

// 7) ReturnType<F>: extrae el tipo de retorno de una función
function crearUsuario() {
    return { id: 1, nombre: "Fabio", activo: true };
}
type UsuarioCreado = ReturnType<typeof crearUsuario>;
const creado: UsuarioCreado = { id: 2, nombre: "Yei", activo: true };
console.log(creado);

// 8) Parameters<F>: extrae los tipos de los parámetros como tupla
function login(email: string, password: string, recordar: boolean) {
    return true;
}
type LoginArgs = Parameters<typeof login>; // [string, string, boolean]
const args: LoginArgs = ["a@b.com", "1234", true];
console.log(login(...args));

// 9) NonNullable<T>: quita null y undefined de la unión
type AB = string | number | null | undefined;
type ABLimpio = NonNullable<AB>; // string | number

// 10) Awaited<T>: desenvuelve Promise<T> recursivamente
async function fetchData(): Promise<string[]> {
    return ["a", "b"];
}
type Data = Awaited<ReturnType<typeof fetchData>>; // string[]
const d: Data = ["x", "y"];
console.log(d);


export {};
