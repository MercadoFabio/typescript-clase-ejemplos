// =============================================================================
// 07 - MÓDULO con EXPORT DEFAULT
// =============================================================================
// Cada módulo puede tener UNA exportación default. Es la "exportación principal".
// =============================================================================

export default function saludar(nombre: string): string {
    return `Hola, ${nombre}!`;
}

// También podemos tener exports nombrados junto al default
export const VERSION = "1.0.0";
