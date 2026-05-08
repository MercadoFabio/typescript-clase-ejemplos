# 09 - Decoradores

`decoradores.ts` muestra los 3 tipos más comunes:
- Decorador de clase: `@MostrarFechaCreacion`
- Decorador de método: `@LogearLlamada` (intercepta llamadas y logea)
- Decorador de propiedad (factory con argumento): `@Etiquetar("...")`

## Importante

Los decoradores son **experimentales**. Para que TS los acepte, este `tsconfig.json` tiene activado:
- `"experimentalDecorators": true`
- `"emitDecoratorMetadata": true`

Si compilás con un tsconfig que no los tenga, vas a ver el error:
> Experimental support for decorators is a feature that is subject to change in a future release.

## Comandos rápidos

```bash
cd 09-decoradores

# El tsconfig de la carpeta YA tiene experimentalDecorators activo
npx tsc
node dist/decoradores.js

# Si querés compilar el archivo suelto, hay que pasar el flag:
npx tsc --experimentalDecorators decoradores.ts
node decoradores.js
```

## Salida esperada (más o menos)

```
[Persona] cargada el ...
[META] propiedad "nombre" etiquetada como "nombre-de-pila"
[CALL] saludar(Yei)
[RET ] saludar -> Hola Yei, soy Fabio
Hola Yei, soy Fabio
[CALL] sumarEdad(5)
[RET ] sumarEdad -> 37
Edad +5: 37
```
