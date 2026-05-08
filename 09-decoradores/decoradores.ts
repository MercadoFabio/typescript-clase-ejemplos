// =============================================================================
// 09 - DECORADORES (experimentales)
// =============================================================================
// Un decorador es una función que se aplica con @nombre encima de una clase,
// método, propiedad, accessor o parámetro. Sirven para meta-programación:
// agregar logs, validaciones, registrar metadata, etc.
//
// REQUISITO: en tsconfig.json hay que habilitar "experimentalDecorators": true
// =============================================================================

// 1) DECORADOR DE CLASE
// Recibe el constructor de la clase. Acá lo usamos para imprimir algo
// cuando la clase se "carga".
function MostrarFechaCreacion(constructor: Function) {
    console.log(`[${constructor.name}] cargada el ${new Date().toLocaleDateString()}`);
}

// 2) DECORADOR DE MÉTODO
// Recibe (target, propertyKey, descriptor). Reemplazamos el método original
// por uno que logea entrada y salida.
function LogearLlamada(_target: object, propertyKey: string, descriptor: PropertyDescriptor) {
    const original = descriptor.value;
    descriptor.value = function (...args: unknown[]) {
        console.log(`[CALL] ${propertyKey}(${args.join(", ")})`);
        const result = original.apply(this, args);
        console.log(`[RET ] ${propertyKey} -> ${result}`);
        return result;
    };
}

// 3) DECORADOR DE PROPIEDAD
// Recibe (target, propertyKey). Acá lo usamos para registrar metadata
// (en este caso, simplemente lo logeamos para mostrar el momento de aplicación).
function Etiquetar(etiqueta: string) {
    return function (_target: object, propertyKey: string) {
        console.log(`[META] propiedad "${propertyKey}" etiquetada como "${etiqueta}"`);
    };
}

// =============================================================================
// USO: aplicamos los decoradores con @nombre
// =============================================================================
@MostrarFechaCreacion
class Persona {
    @Etiquetar("nombre-de-pila")
    nombre: string;

    edad: number;

    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }

    @LogearLlamada
    saludar(otro: string): string {
        return `Hola ${otro}, soy ${this.nombre}`;
    }

    @LogearLlamada
    sumarEdad(n: number): number {
        return this.edad + n;
    }
}

// Cuando ejecutamos el archivo:
//   - Se imprime "Persona cargada el ..." (decorador de clase)
//   - Se imprime "propiedad nombre etiquetada..." (decorador de propiedad)
//   - Cada llamada a saludar/sumarEdad muestra logs gracias a @LogearLlamada
const p = new Persona("Fabio", 32);
console.log(p.saludar("Yei"));
console.log("Edad +5:", p.sumarEdad(5));


export {};
