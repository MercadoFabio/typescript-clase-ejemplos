# 10 - JavaScript vs TypeScript lado a lado

Mismo programa: cálculo del total de un carrito.
- `version-js.js` — JS puro: no tiene compilación de tipos. El bug pasa silencioso y produce `NaN`.
- `version-ts.ts` — TS: TS atrapa el bug en tiempo de compilación si descomentás la línea final.

## Comandos rápidos

```bash
cd 10-comparacion-js-ts

# 1) Correr el JS - mostrá que devuelve NaN sin avisar
node version-js.js

# 2) Compilar y correr el TS
npx tsc version-ts.ts
node version-ts.js

# 3) Para ver el ERROR de tipo: descomentá la última línea de version-ts.ts y compilá
#    Vas a ver: error TS2345 antes de generar el .js
npx tsc version-ts.ts --noEmitOnError
```

