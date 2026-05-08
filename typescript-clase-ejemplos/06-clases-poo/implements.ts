// =============================================================================
// 06 - IMPLEMENTACIÓN DE INTERFACES (implements)
// =============================================================================
// Una clase puede IMPLEMENTAR una o varias interfaces. TS verifica que la
// clase cumpla con TODOS los métodos/props que la interfaz exige.
// =============================================================================

interface Saludador {
    saludar(nombre: string): void;
}

interface Identificable {
    readonly id: number;
}

// Una clase puede implementar varias interfaces a la vez
class Robot implements Saludador, Identificable {
    constructor(public readonly id: number, private modelo: string) {}

    saludar(nombre: string): void {
        console.log(`Hola ${nombre}, soy el robot ${this.modelo} #${this.id}`);
    }
}

const r = new Robot(7, "TR-100");
r.saludar("Fabio");

// Si una clase NO cumple con la interfaz, TS la rechaza:
// class RobotMudo implements Saludador {} // ❌ falta saludar()

// =============================================================================
// EXTENDS + IMPLEMENTS combinados
// =============================================================================
class Maquina {
    encender(): void {
        console.log("Máquina encendida");
    }
}

class RobotInteligente extends Maquina implements Saludador {
    saludar(nombre: string): void {
        console.log(`Hola ${nombre}, soy un robot inteligente`);
    }
}

const ri = new RobotInteligente();
ri.encender();           // heredado de Maquina
ri.saludar("Fabio");     // exigido por Saludador


export {};
