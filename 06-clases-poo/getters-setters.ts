// =============================================================================
// 06 - GETTERS Y SETTERS
// =============================================================================
// Sirven para CONTROLAR el acceso a una propiedad: validar al asignar,
// calcular al leer. Se usan como propiedades normales desde afuera.
// =============================================================================

class Cuadrado {
    // Convención: el campo "real" se prefija con _ y se accede vía get/set
    private _lado: number;

    constructor(lado: number) {
        this._lado = lado;
    }

    // GETTER: se invoca al LEER `obj.lado`
    get lado(): number {
        return this._lado;
    }

    // SETTER: se invoca al ESCRIBIR `obj.lado = ...`
    // Validamos que el lado sea positivo antes de asignarlo.
    set lado(valor: number) {
        if (valor <= 0) {
            throw new Error("El lado debe ser positivo");
        }
        this._lado = valor;
    }

    // GETTER calculado de SOLO LECTURA (no tiene setter)
    get area(): number {
        return this._lado ** 2;
    }
}

const sq = new Cuadrado(5);
console.log(`lado=${sq.lado}, area=${sq.area}`); // usamos como propiedad

sq.lado = 10; // dispara el setter (con validación)
console.log(`lado=${sq.lado}, area=${sq.area}`);

// sq.area = 100; // ❌ no hay setter para area -> es solo lectura

try {
    sq.lado = -5; // dispara el setter -> tira Error
} catch (e) {
    console.log("Error capturado:", (e as Error).message);
}


export {};
