// =============================================================================
// 08 - DEPENDENCY INVERSION (SOLID) e INYECCIÓN MANUAL
// =============================================================================
// Principio: los módulos de ALTO nivel (UserService) no deben depender de los
// de BAJO nivel (PostgresDatabase). Ambos deben depender de una ABSTRACCIÓN
// (la interfaz IDatabase).
//
// Ventaja en testing: en vez de la implementación real, podemos pasar un
// MockDatabase y testear el servicio aislado de la base.
// =============================================================================

// 1) Definimos la ABSTRACCIÓN (interface) - el contrato
interface IDatabase {
    findById(id: number): { id: number; nombre: string } | undefined;
    save(data: { id: number; nombre: string }): void;
}

// 2) Implementación REAL (módulo de bajo nivel)
class PostgresDatabase implements IDatabase {
    private storage = new Map<number, { id: number; nombre: string }>();

    findById(id: number) {
        console.log(`[Postgres] SELECT * FROM users WHERE id = ${id}`);
        return this.storage.get(id);
    }

    save(data: { id: number; nombre: string }): void {
        console.log(`[Postgres] INSERT INTO users VALUES (${data.id}, '${data.nombre}')`);
        this.storage.set(data.id, data);
    }
}

// 3) Mock para tests (no toca BD real)
class MockDatabase implements IDatabase {
    public datos: { id: number; nombre: string }[] = [];

    findById(id: number) {
        return this.datos.find((u) => u.id === id);
    }

    save(data: { id: number; nombre: string }): void {
        this.datos.push(data);
    }
}

// 4) Servicio de alto nivel: depende de la INTERFAZ, no de la implementación
class UserService {
    // Inyección por constructor: recibimos la dependencia desde afuera
    constructor(private readonly db: IDatabase) {}

    crear(nombre: string): number {
        const id = Math.floor(Math.random() * 1000);
        this.db.save({ id, nombre });
        return id;
    }

    obtener(id: number) {
        return this.db.findById(id);
    }
}

// =============================================================================
// USO EN PRODUCCIÓN: inyectamos la implementación real
// =============================================================================
console.log("--- PROD ---");
const dbReal = new PostgresDatabase();
const servicioProd = new UserService(dbReal);
const id1 = servicioProd.crear("Fabio");
console.log("Recuperado:", servicioProd.obtener(id1));

// =============================================================================
// USO EN TESTS: inyectamos el mock (sin cambiar UNA línea de UserService)
// =============================================================================
console.log("\n--- TEST ---");
const dbMock = new MockDatabase();
const servicioTest = new UserService(dbMock);
servicioTest.crear("Yei");
servicioTest.crear("Fab");
console.log("Datos del mock:", dbMock.datos);

// =============================================================================
// BONUS DDD: VALUE OBJECT (Email validado en constructor)
// =============================================================================
class Email {
    // readonly + validación en constructor = Value Object
    public readonly value: string;

    constructor(input: string) {
        if (!input.includes("@")) {
            throw new Error(`Email inválido: ${input}`);
        }
        this.value = input.toLowerCase();
    }
}

const email = new Email("fabio@fabio.com");
console.log("Email normalizado:", email.value);
try {
    new Email("sin-arroba");
} catch (e) {
    console.log("Capturado:", (e as Error).message);
}
