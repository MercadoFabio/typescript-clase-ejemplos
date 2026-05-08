# 05 - Genéricos, condicionales, infer y utility types

Archivos:
- `genericos.ts` — funciones y clases genéricas, constraints con `extends`, repositorio genérico
- `condicionales-infer.ts` — `T extends U ? X : Y`, `infer` para extraer tipos (ReturnType casero, Awaited)
- `utility-types.ts` — `Partial`, `Required`, `Readonly`, `Pick`, `Omit`, `Record`, `ReturnType`, `Parameters`, `NonNullable`, `Awaited`

## Comandos rápidos

```bash
cd 05-genericos-utility

# Uno por uno
npx tsc genericos.ts && node genericos.js
npx tsc condicionales-infer.ts && node condicionales-infer.js
npx tsc utility-types.ts && node utility-types.js

# O con tsconfig
npx tsc
node dist/genericos.js
node dist/condicionales-infer.js
node dist/utility-types.js
```

## Tip de clase

`condicionales-infer.ts` casi no produce salida visible (la magia está en los tipos). Mostrá el archivo y abrí el `.js` compilado: vas a ver que **toda la lógica de tipos desaparece** y queda muy poco JS. Ese es el punto: TS sólo existe en compile-time.
