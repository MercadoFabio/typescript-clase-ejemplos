// =============================================================================
// 06 - CLASES ABSTRACTAS (abstract)
// =============================================================================
// Una clase ABSTRACTA NO puede instanciarse directamente. Define un "molde"
// con métodos que las subclases DEBEN implementar (abstract) y/o métodos
// con lógica compartida.
//
// Diferencia con interface:
//   - interface: solo contrato estructural, desaparece al compilar.
//   - abstract class: puede tener implementación parcial y existe en runtime.
// =============================================================================

abstract class Forma {
    constructor(public color: string) {}

    // Método abstracto: NO tiene cuerpo. Cada subclase DEBE implementarlo.
    abstract calcularArea(): number;

    // Método CON implementación: lo heredan todas las subclases
    describir(): string {
        return `Forma ${this.color} con área ${this.calcularArea()}`;
    }
}

class Rectangulo extends Forma {
    constructor(color: string, private base: number, private altura: number) {
        super(color);
    }

    calcularArea(): number {
        return this.base * this.altura;
    }
}

class CirculoForma extends Forma {
    constructor(color: string, private radio: number) {
        super(color);
    }

    calcularArea(): number {
        return Math.PI * this.radio ** 2;
    }
}

// const f = new Forma("rojo"); // ❌ Cannot create an instance of an abstract class

const r = new Rectangulo("rojo", 4, 5);
const c = new CirculoForma("azul", 3);

console.log(r.describir());
console.log(c.describir());

// Polimorfismo: ambas son `Forma` y podemos tratarlas igual
const formas: Forma[] = [r, c];
for (const f of formas) {
    console.log(`Área: ${f.calcularArea().toFixed(2)}`);
}


export {};
