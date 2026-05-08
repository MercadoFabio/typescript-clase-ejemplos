# 02 - Tipos básicos

Archivos:
- `primitivos.ts` — string, number, boolean, bigint, symbol
- `arrays.ts` — arrays, tuplas, readonly arrays
- `any-vs-unknown.ts` — por qué `any` es deuda y `unknown` es la alternativa segura
- `inferencia.ts` — anotación explícita vs inferencia automática

## Comandos rápidos

```bash
cd 02-tipos-basicos

# Compilar UNO solo y ver el .js generado
npx tsc primitivos.ts
cat primitivos.js
node primitivos.js

# Compilar TODO según tsconfig.json -> ./dist
npx tsc
node dist/primitivos.js
node dist/arrays.js
node dist/any-vs-unknown.js
node dist/inferencia.js

# Modo watch (recompila al guardar)
npx tsc -w
```

## Para mostrar errores de tipo en vivo

Descomentá las líneas marcadas con `// ❌` en cualquiera de los archivos y volvé a correr `npx tsc`. Vas a ver los errores TS en consola.
