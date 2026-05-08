// =============================================================================
// 11 - NARROWING: refinar tipos en tiempo de ejecución
// =============================================================================
// "Narrowing" = TS reduce el tipo de una variable dentro de un bloque cuando
// detecta una verificación previa. Las herramientas son:
//   - typeof
//   - instanceof
//   - in (chequea si una propiedad existe)
//   - == null  (cubre null y undefined a la vez)
//   - igualdad estricta (===) contra un literal
// =============================================================================

// 1) typeof
function describir(v: string | number) {
    if (typeof v === "string") {
        // v es string acá
        console.log("string en MAYÚSCULAS:", v.toUpperCase());
    } else {
        // v es number acá
        console.log("number formateado:", v.toFixed(2));
    }
}
describir("hola");
describir(3.14159);

// 2) instanceof (clases)
class Perro { ladrar() { console.log("Guau!"); } }
class Gato  { maullar() { console.log("Miau!"); } }

function hablar(animal: Perro | Gato): void {
    if (animal instanceof Perro) {
        animal.ladrar();
    } else {
        animal.maullar();
    }
}
hablar(new Perro());
hablar(new Gato());

// 3) `in` (chequea propiedad)
type Pez   = { nadar: () => void };
type Pajaro = { volar: () => void };

function mover(a: Pez | Pajaro) {
    if ("nadar" in a) {
        a.nadar(); // TS sabe que es Pez
    } else {
        a.volar(); // TS sabe que es Pajaro
    }
}
mover({ nadar: () => console.log("nadando") });
mover({ volar: () => console.log("volando") });

// 4) Discriminated unions (la más fuerte)
type Resultado =
    | { ok: true;  data: string }
    | { ok: false; error: string };

function manejar(r: Resultado) {
    if (r.ok) {
        // TS sabe que existe `data`
        console.log("OK:", r.data);
    } else {
        // TS sabe que existe `error`
        console.log("ERR:", r.error);
    }
}
manejar({ ok: true, data: "200" });
manejar({ ok: false, error: "timeout" });


export {};
