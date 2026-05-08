# 04 - Tipos avanzados

Archivos:
- `objetos.ts` — tipos de objeto inline, propiedades opcionales y readonly, index signatures
- `uniones.ts` — uniones (`|`), narrowing con `typeof`, **uniones discriminadas** (estado de máquina)
- `alias-vs-interface.ts` — diferencias clave entre `type` e `interface`
- `null-undefined.ts` — `strictNullChecks`, `?.`, `??`, `!`, type guards
- `enums.ts` — enum numéricas, de cadenas y la alternativa moderna con literales

## Comandos rápidos

```bash
cd 04-tipos-avanzados

# Compilar archivo por archivo (mostrar TS -> JS uno a uno)
npx tsc objetos.ts && node objetos.js
npx tsc uniones.ts && node uniones.js
npx tsc alias-vs-interface.ts && node alias-vs-interface.js
npx tsc null-undefined.ts && node null-undefined.js
npx tsc enums.ts && node enums.js

# O todo junto a ./dist
npx tsc
node dist/objetos.js
node dist/uniones.js
node dist/alias-vs-interface.js
node dist/null-undefined.js
node dist/enums.js
```

## Sugerencia de orden para la clase

1. `objetos.ts` (estructura básica)
2. `null-undefined.ts` (la novedad fuerte vs JS)
3. `uniones.ts` (mostrar uniones discriminadas como gran patrón)
4. `alias-vs-interface.ts` (cuándo usar cada uno)
5. `enums.ts` (cerrar con la comparación enum vs literales)
