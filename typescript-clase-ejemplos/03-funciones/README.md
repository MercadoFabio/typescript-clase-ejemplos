# 03 - Funciones

Cubre: parámetros tipados, retorno, `void`, opcionales (`?`), defaults (`=`), rest (`...`), tipos de función y sobrecarga.

## Comandos rápidos

```bash
cd 03-funciones

# Opción 1: compilar archivo suelto y mostrar el JS resultante
npx tsc funciones.ts
cat funciones.js
node funciones.js

# Opción 2: usar tsconfig.json (sale a ./dist)
npx tsc
node dist/funciones.js
```

## Para mostrar errores en vivo

Descomentá la línea final con `// ❌` y compilá: TS te dice que no hay sobrecarga que matchee `(number, string)`.
