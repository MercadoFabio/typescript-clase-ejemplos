// =============================================================================
// 07 - MÓDULO: matematicas.ts
// =============================================================================
// Cualquier archivo con un `export` o `import` se considera un MÓDULO.
// Lo no exportado queda PRIVADO al archivo.
// =============================================================================

// Export NOMBRADO en la declaración
export const PI = 3.14159;

// Export NOMBRADO en la declaración de función
export function cuadrado(n: number): number {
    return n * n;
}

// Variable privada del módulo (no exportada)
const PHI_INTERNO = 1.61803;

// También se puede agrupar al final
export { PHI_INTERNO as PHI };
