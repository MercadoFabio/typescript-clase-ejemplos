# 06 - Clases y POO

Archivos:
- `clase-basica.ts` — propiedades, constructor, método de instancia, shorthand `public` en constructor
- `modificadores.ts` — `public`, `private`, `protected`, `readonly`, `static`
- `getters-setters.ts` — get/set, propiedades calculadas, validación al asignar
- `herencia.ts` — `extends`, `super`, `override`, polimorfismo
- `implements.ts` — implementación de una o varias interfaces, combinado con `extends`
- `abstractas.ts` — clases abstractas con métodos abstractos y métodos compartidos

## Comandos rápidos

```bash
cd 06-clases-poo

# Por archivo
npx tsc clase-basica.ts && node clase-basica.js
npx tsc modificadores.ts && node modificadores.js
npx tsc getters-setters.ts && node getters-setters.js
npx tsc herencia.ts && node herencia.js
npx tsc implements.ts && node implements.js
npx tsc abstractas.ts && node abstractas.js

# Todo junto
npx tsc
node dist/clase-basica.js
node dist/modificadores.js
node dist/getters-setters.js
node dist/herencia.js
node dist/implements.js
node dist/abstractas.js
```

## Tip de clase

`herencia.ts` usa `override`. El `tsconfig.json` de esta carpeta tiene `noImplicitOverride: true` activado: si en una subclase olvidás poner `override` al sobrescribir, TS te marca error. Es un seguro contra typos.
