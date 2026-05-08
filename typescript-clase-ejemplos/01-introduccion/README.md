# 01 - Introducción y transpilación

## Demo paso a paso (mostrar en clase)

### Opción A — Compilar UN archivo (más visual para mostrar TS → JS)

```bash
cd 01-introduccion

# 1) Mostrar el .ts (con tipos)
cat hola.ts

# 2) Transpilar: genera hola.js AL LADO de hola.ts
npx tsc hola.ts

# 3) Mostrar el .js generado: NO TIENE TIPOS, es JS puro
cat hola.js

# 4) Ejecutar el JS
node hola.js
```

### Opción B — Usar el `tsconfig.json` de la carpeta

```bash
cd 01-introduccion
npx tsc                  # respeta tsconfig.json -> deja los .js en ./dist
node dist/hola.js
```

### Mostrar errores de tipo

Descomentá en `hola.ts` la línea:

```ts
// console.log(saludar(42));
```

Y volvé a compilar:

```bash
npx tsc hola.ts
# error TS2345: Argument of type 'number' is not assignable to parameter of type 'string'.
```

### Bonus: no emitir si hay errores

```bash
npx tsc --noEmitOnError hola.ts
```

Por defecto `tsc` genera el `.js` igual aunque haya errores. Con `--noEmitOnError` sólo emite si compila limpio.
