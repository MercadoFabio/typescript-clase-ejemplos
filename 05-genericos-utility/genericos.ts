// =============================================================================
// 05 - GENÉRICOS Y CONSTRAINTS (extends)
// =============================================================================
// Los GENÉRICOS permiten escribir funciones/clases que funcionan con cualquier
// tipo, manteniendo la fidelidad del tipo original (no perdés la info).
// =============================================================================

// Función genérica simple: T es el "parámetro de tipo"
function identidad<T>(valor: T): T {
    return valor;
}
const n = identidad<number>(42);    // T = number
const s = identidad("hola");         // T inferido como string (no hace falta poner <string>)
console.log({ n, s });

// Genérico en arrays: el tipo del array se preserva
function primero<T>(arr: T[]): T | undefined {
    return arr[0];
}
const num = primero([1, 2, 3]);          // num: number | undefined
const txt = primero(["a", "b", "c"]);     // txt: string | undefined
console.log({ num, txt });

// =============================================================================
// CONSTRAINTS: limitar T a tipos que cumplan cierta forma con `extends`
// =============================================================================

// Solo aceptamos T que tenga propiedad `length` (string, array, etc.)
function logearLargo<T extends { length: number }>(x: T): T {
    console.log(`largo = ${x.length}`);
    return x;
}
logearLargo("hola");
logearLargo([1, 2, 3, 4]);
// logearLargo(42); // ❌ number no tiene .length

// Caso clásico 2026: repositorio genérico para entidades con `id`
interface Identifiable {
    id: number;
}

class DataRepository<T extends Identifiable> {
    private items: T[] = [];

    add(item: T): void {
        this.items.push(item);
    }

    findById(id: number): T | undefined {
        return this.items.find((it) => it.id === id);
    }

    all(): T[] {
        return this.items;
    }
}

interface Producto extends Identifiable {
    nombre: string;
    precio: number;
}

const repo = new DataRepository<Producto>();
repo.add({ id: 1, nombre: "Notebook", precio: 1500 });
repo.add({ id: 2, nombre: "Mouse", precio: 25 });
console.log(repo.findById(1));
console.log(repo.all());

// =============================================================================
// Múltiples parámetros de tipo
// =============================================================================
function emparejar<K, V>(clave: K, valor: V): [K, V] {
    return [clave, valor];
}
console.log(emparejar("nombre", "Fabio"));
console.log(emparejar(1, true));


export {};
