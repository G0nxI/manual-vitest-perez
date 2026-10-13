# Manual introductorio de Vitest

Autor: G0nxI.

El ejemplo prueba una calculadora con funciones de suma, resta y multiplicación.
Incluye cinco pruebas automatizadas con Vitest 5.0.4.

[Leer el manual en PDF](manual-vitest-perez.pdf).

[Repositorio en GitHub](https://github.com/G0nxI/manual-vitest-perez).

## Requisitos

- Node.js 24 LTS y npm.
- Una terminal y un editor de código.
- Conexión a Internet para instalar las dependencias.

## Ejecutar el ejemplo

Desde la carpeta principal del repositorio, en PowerShell:

```powershell
cd ejemplo
npm.cmd ci
npm.cmd run test:run
```

En Linux, desde la misma carpeta principal:

```bash
cd ejemplo
npm ci
npm run test:run
```

El resultado esperado es un archivo de pruebas y cinco pruebas aprobadas.
`npm ci` instala las versiones del archivo `package-lock.json`.

Para repetir las pruebas automáticamente al guardar cambios:

```powershell
npm.cmd test
```

En Linux, usa `npm test`. Pulsa Ctrl+C para detener ese modo.

## Comprobar que se detecta un error

En `ejemplo/calculadora.js`, cambia `return a + b;` por `return a - b;`
y vuelve a ejecutar las pruebas. Debe fallar «suma dos números» y pasar
las otras cuatro. Restaura la suma y comprueba que vuelven a pasar las cinco.
