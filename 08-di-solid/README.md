# 08 - Dependency Injection y SOLID (sin frameworks)

Muestra el patrón **Inversión de Dependencias** del principio **D** de SOLID, implementado a mano (sin Angular, sin decoradores, sin reflexión).

`di-manual.ts` cubre:
- Interfaz `IDatabase` como abstracción
- `PostgresDatabase` (implementación real)
- `MockDatabase` (implementación de test)
- `UserService` que recibe la dependencia por constructor
- **Bonus DDD**: `Email` como Value Object con validación en constructor

## Comandos rápidos

```bash
cd 08-di-solid

npx tsc di-manual.ts && node di-manual.js

# o con tsconfig
npx tsc
node dist/di-manual.js
```


