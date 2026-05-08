// =============================================================================
// 03 - FUNCIONES EN TYPESCRIPT
// =============================================================================
// TS extiende las funciones de JS con:
//   - Tipos de parámetros
//   - Tipo de retorno
//   - Parámetros opcionales (?), por defecto (=) y rest (...)
//   - Sobrecarga de funciones
// =============================================================================

// 1) Parámetros y retorno tipados
function saludar(nombre: string): string {
    return `Hola, ${nombre}!`;
}
console.log(saludar("Fabio"));

// 2) Función sin retorno -> tipo `void`
function imprimirMensaje(msg: string): void {
    console.log(`[LOG] ${msg}`);
}
imprimirMensaje("Sin retorno");

// 3) Parámetro OPCIONAL (con `?`) - puede no enviarse
function presentar(nombre: string, apellido?: string): string {
    // Si no vino apellido, usamos sólo nombre
    return apellido ? `${nombre} ${apellido}` : nombre;
}
console.log(presentar("Fabio"));
console.log(presentar("Fabio", "Mercado"));

// 4) Parámetro con VALOR POR DEFECTO
function elevar(base: number, exponente: number = 2): number {
    return base ** exponente;
}
console.log(elevar(5));    // 25 (usa el default 2)
console.log(elevar(5, 3)); // 125

// 5) REST PARAMETERS (...): cantidad variable de argumentos
function sumarTodos(...nums: number[]): number {
    return nums.reduce((acc, n) => acc + n, 0);
}
console.log(sumarTodos(1, 2, 3, 4, 5)); // 15

// 6) Funciones como tipo (firma de función)
type Operacion = (a: number, b: number) => number;
const multiplicar: Operacion = (a, b) => a * b; // a y b se infieren como number gracias al tipo
console.log(multiplicar(4, 5));

// 7) SOBRECARGA DE FUNCIONES (function overloading)
// Declaramos varias firmas, después UNA implementación que las cumple a todas.
function combinar(a: string, b: string): string;
function combinar(a: number, b: number): number;
function combinar(a: any, b: any): any {
    return a + b;
}
console.log(combinar("Hola, ", "mundo")); // string
console.log(combinar(10, 20));            // number
// console.log(combinar(10, "x")); // ❌ no matchea ninguna sobrecarga


export {};
