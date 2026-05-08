// =============================================================================
// 06 - HERENCIA (extends), super y override
// =============================================================================

// Clase base
class Animal {
    constructor(public nombre: string) {}

    mover(distancia: number = 0): void {
        console.log(`${this.nombre} se movió ${distancia} metros.`);
    }
}

// Subclase: Perro hereda de Animal
class Perro extends Animal {
    // Si la subclase define constructor, debe llamar a super(...)
    constructor(nombre: string, public raza: string) {
        super(nombre); // inicializa la parte de Animal
    }

    ladrar(): void {
        console.log(`${this.nombre} (${this.raza}) hace: Guau!`);
    }

    // OVERRIDE: sobrescribimos un método del padre
    // La keyword `override` es opcional pero recomendada (ayuda a detectar
    // typos: si renombrás el método del padre, override avisa)
    override mover(distancia: number = 5): void {
        console.log(`${this.nombre} corre ${distancia} metros.`);
        super.mover(0); // podemos invocar la implementación del padre con super.<metodo>
    }
}

const rocky = new Perro("Rocky", "Labrador");
rocky.ladrar();          // método propio
rocky.mover();           // override (corre)
rocky.mover(20);

// Polimorfismo: lo tratamos como Animal y aún así corre el método del Perro
const a: Animal = rocky;
a.mover(10);


export {};
