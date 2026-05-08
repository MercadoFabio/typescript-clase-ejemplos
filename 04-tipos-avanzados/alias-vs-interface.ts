// =============================================================================
// 04 - ALIAS DE TIPO vs INTERFACES
// =============================================================================
// Las dos sirven para nombrar tipos. Diferencias clave:
//   - interface: solo describe objetos, soporta `extends` y se puede REABRIR
//                (declaration merging).
//   - type alias: cualquier tipo (objetos, uniones, tuplas, primitivos),
//                 NO se puede reabrir.
// =============================================================================

// ALIAS DE TIPO con `type`
type Identificador = number | string; // alias de unión (interface no puede)
type CarYear = number;
type CarModel = string;
type Car = {
    year: CarYear;
    model: CarModel;
    type: "sedan" | "suv" | "hatchback"; // tipo literal
};

const miAuto: Car = { year: 2024, model: "Onix", type: "sedan" };

// INTERFACE: lo mismo pero como contrato extensible
interface Persona {
    nombre: string;
    edad: number;
}

// Las interfaces SÍ se pueden extender
interface Empleado extends Persona {
    legajo: number;
}

const emp: Empleado = { nombre: "Fabio", edad: 32, legajo: 1234 };

// Las interfaces se pueden REABRIR (declaration merging) - los alias NO
interface Persona {
    email?: string; // se fusiona con la declaración anterior
}
const p2: Persona = { nombre: "Yei", edad: 28, email: "yei@meli.com" };

// Una clase IMPLEMENTA una interface (o un alias estructural también funciona,
// pero la convención es usar interface acá).
class Trabajador implements Persona {
    constructor(public nombre: string, public edad: number) {}
}
const t = new Trabajador("Fab", 32);

// IDs usando un alias de unión
const id1: Identificador = 42;
const id2: Identificador = "uuid-abc-123";

console.log({ miAuto, emp, p2, t, id1, id2 });


export {};
