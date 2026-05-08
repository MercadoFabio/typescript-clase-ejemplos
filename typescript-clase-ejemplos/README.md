# TypeScript — Ejemplos para clase (Unidad 2)

Ejemplos completos para mostrar en clase cada tema del material `2026_TUP_3C_PIII_FE_TEO_U2_TypeScript`. Cada carpeta es **autónoma**: tiene sus `.ts`, su `tsconfig.json` propio y un `README.md` con los comandos rápidos.

## Mapa de contenidos

| Carpeta | Tema |
|---|---|
| `01-introduccion/` | Hola mundo + transpilación `.ts` → `.js` |
| `02-tipos-basicos/` | Primitivos, arrays, `any`, `unknown`, anotaciones e inferencia |
| `03-funciones/` | Parámetros, retorno, `void`, opcionales, defaults, sobrecarga |
| `04-tipos-avanzados/` | Objetos, opcionales, uniones, alias, interfaces, `null/undefined`, enums |
| `05-genericos-utility/` | Genéricos, constraints, condicionales, `infer`, utility types |
| `06-clases-poo/` | Clases, modificadores, getters/setters, herencia, interfaces, abstractas |
| `07-modulos/` | `export` / `import` (named, default, alias, namespace, type-only) |
| `08-di-solid/` | Inversión de dependencias e inyección manual (sin frameworks) |
| `09-decoradores/` | Decoradores de clase, método y propiedad (experimentales) |
| `10-comparacion-js-ts/` | Mismo programa en JS y en TS lado a lado |
| `11-seguridad-validacion/` | Narrowing, type guards, validación runtime en la frontera |

## Setup inicial (una sola vez)

```bash
cd /Users/fabmercado/Downloads/typescript-clase-ejemplos
npm install        # instala TypeScript local (devDependency)
```

> Si no querés instalar nada, podés usar directamente `npx tsc` y npm te lo descarga al vuelo. Pero para mostrar en clase es más prolijo correr `npm install` una vez.

## Flujo estándar para mostrar TS → JS en cada sección

Esto es lo que vas a hacer **una y otra vez** durante la clase:

```bash
cd 02-tipos-basicos              # entrar a la sección que querés mostrar
npx tsc primitivos.ts            # 1) compilar UN archivo: genera primitivos.js al lado
cat primitivos.js                # 2) abrir el .js para ver la traducción
node primitivos.js               # 3) ejecutar el JS resultante
```

O usando el `tsconfig.json` de la carpeta (compila TODO lo de la sección a `dist/`):

```bash
cd 02-tipos-basicos
npx tsc                          # compila todos los .ts según tsconfig.json -> ./dist
node dist/primitivos.js          # ejecutar
```

### Modo watch (recompila al guardar)

```bash
npx tsc -w
```

### Compilar mostrando errores y NO emitir si hay errores

```bash
npx tsc --noEmitOnError archivo.ts
```

## Comandos npm cortitos (definidos en el `package.json` raíz)

```bash
npm run build            # compila TODO el repo según tsconfig raíz
npm run clean            # borra todos los dist/
npm run demo:01          # corre la sección 01 (compila + node)
npm run demo:02          # corre la sección 02
# ... (uno por sección)
```

