// =============================================================================
// 04 - TIPOS DE OBJETOS Y PROPIEDADES OPCIONALES
// =============================================================================

// Tipo de objeto INLINE: describimos la forma del objeto en la firma del param.
function imprimirCoordenadas(p: { x: number; y: number }): void {
    console.log(`x=${p.x}, y=${p.y}`);
}
imprimirCoordenadas({ x: 3, y: 7 });

// Propiedad OPCIONAL con `?`: puede o no estar presente
function imprimirNombre(persona: { nombre: string; apellido?: string }): void {
    if (persona.apellido !== undefined) {
        console.log(`${persona.nombre} ${persona.apellido}`);
    } else {
        console.log(persona.nombre);
    }
}
imprimirNombre({ nombre: "Fabio" });
imprimirNombre({ nombre: "Fabio", apellido: "Mercado" });

// Propiedad readonly: solo se asigna una vez
type Punto = {
    readonly x: number;
    readonly y: number;
};
const p: Punto = { x: 1, y: 2 };
// p.x = 99; // ❌ Cannot assign to 'x' because it is a read-only property.
console.log(p);

// Index signatures: objetos cuyas claves no conocemos de antemano
type Diccionario = { [clave: string]: number };
const stock: Diccionario = { manzanas: 10, peras: 5, bananas: 7 };
console.log(stock);


export {};
