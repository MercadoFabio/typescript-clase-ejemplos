// =============================================================================
// 07 - MÓDULO: solo definiciones de TIPOS
// =============================================================================
// Los tipos se exportan igual que el código, pero al compilar a JS DESAPARECEN.
// =============================================================================

export interface Usuario {
    id: number;
    nombre: string;
    email: string;
}

export type ID = number | string;
