# 11 - Seguridad y validación en la frontera

Archivos:
- `narrowing.ts` — `typeof`, `instanceof`, `in`, discriminated unions
- `type-guards.ts` — type guards personalizados con sintaxis `x is Tipo`
- `validacion-frontera.ts` — validación runtime de datos externos (fetch/API)

## Comandos rápidos

```bash
cd 11-seguridad-validacion

# Por archivo
npx tsc narrowing.ts && node narrowing.js
npx tsc type-guards.ts && node type-guards.js
npx tsc validacion-frontera.ts && node validacion-frontera.js

# O todo junto
npx tsc
node dist/narrowing.js
node dist/type-guards.js
node dist/validacion-frontera.js
```

