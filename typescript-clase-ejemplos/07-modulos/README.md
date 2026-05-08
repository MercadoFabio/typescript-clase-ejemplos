# 07 - Módulos (export / import)

Archivos:
- `matematicas.ts` — exports nombrados y export agrupado con alias
- `saludo.ts` — `export default` + export nombrado en el mismo módulo
- `modelos.ts` — sólo definiciones de tipos (interfaces y alias)
- `app.ts` — consumidor con TODAS las variantes de import

## Comandos rápidos

```bash
cd 07-modulos

# Compilar TODO el proyecto (los módulos dependen entre sí)
npx tsc
node dist/app.js

# Modo watch
npx tsc -w
```

## Mostrar TS → JS de un módulo

```bash
npx tsc app.ts
cat app.js
```

Vas a ver:
- Los `import` se convirtieron a `require("./matematicas")`
- El `import type { Usuario, ID } from "./modelos"` **desapareció completamente** del JS (porque era sólo de tipos)

Eso ilustra que en runtime sólo queda JS y los tipos no pesan.
