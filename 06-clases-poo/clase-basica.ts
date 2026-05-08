// =============================================================================
// 06 - DEFINICIÓN DE UNA CLASE
// =============================================================================

class Punto {
    // Propiedades de instancia con tipos
    x: number;
    y: number;

    // Constructor: inicializa las propiedades
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    // Método de instancia
    distanciaAlOrigen(): number {
        return Math.sqrt(this.x ** 2 + this.y ** 2);
    }
}

// Crear instancias con `new`
const p1 = new Punto(3, 4);
console.log(`Punto (${p1.x}, ${p1.y}) -> distancia: ${p1.distanciaAlOrigen()}`); // 5

// =============================================================================
// SHORTHAND: declarar y asignar propiedades en el constructor
// =============================================================================
// `public` en parámetros del constructor crea automáticamente la propiedad
// y la asigna. Es equivalente a la clase Punto de arriba pero más corto.
class Punto3D {
    constructor(public x: number, public y: number, public z: number = 0) {
        // No hace falta `this.x = x` etc. TS lo hace por nosotros.
    }
}

const p2 = new Punto3D(1, 2, 3);
const origen = new Punto3D(0, 0); // z toma el default 0
console.log({ p2, origen });


export {};
