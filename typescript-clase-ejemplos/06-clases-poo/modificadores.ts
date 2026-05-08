// =============================================================================
// 06 - MODIFICADORES DE ACCESO: public, private, protected, readonly, static
// =============================================================================

class Persona {
    // public (default): accesible desde cualquier lado
    public nombre: string;

    // private: SOLO accesible dentro de esta clase
    private edad: number;

    // protected: accesible en esta clase Y en subclases (no fuera)
    protected dni: string;

    // readonly: solo se asigna una vez (constructor o inicializador)
    readonly fechaCreacion: Date = new Date();

    // static: pertenece a la CLASE, no a instancias
    static cantidadCreados: number = 0;

    constructor(nombre: string, edad: number, dni: string) {
        this.nombre = nombre;
        this.edad = edad;
        this.dni = dni;
        Persona.cantidadCreados++; // accedemos al static por nombre de clase
    }

    // Método público que expone la edad de forma controlada
    public obtenerEdad(): number {
        return this.edad;
    }
}

const juan = new Persona("Juan", 30, "12345678");
console.log(juan.nombre);              // ✓ public
console.log(juan.obtenerEdad());       // ✓ acceso controlado
// console.log(juan.edad);             // ❌ Property 'edad' is private
// console.log(juan.dni);              // ❌ Property 'dni' is protected
console.log(juan.fechaCreacion);
console.log(`Total creados: ${Persona.cantidadCreados}`);

// =============================================================================
// readonly en propiedades de clase
// =============================================================================
class Circulo {
    readonly PI: number = 3.14159;

    constructor(public radio: number) {}

    area(): number {
        return this.PI * this.radio ** 2;
    }
}

const c = new Circulo(5);
console.log(`Área: ${c.area()}`);
// c.PI = 3; // ❌ Cannot assign to 'PI' because it is a read-only property

// =============================================================================
// static (miembro de clase, no de instancia)
// =============================================================================
class Calculadora {
    static sumar(a: number, b: number): number {
        return a + b;
    }
}
console.log(Calculadora.sumar(2, 3)); // se llama a través de la CLASE, no de instancia


export {};
