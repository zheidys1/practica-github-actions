## Comenzando

Crea una copia de este repositorio con el botón **Use this template**.  Trabajarás directamente en GitHub.

## Configuración de GitHub Actions

1. En la raíz del proyecto, crea el archivo `.github/workflows/test_calculator.yml`.
2. Copia y pega el contenido del workflow YAML proporcionado más abajo.
3. Haz commit y push de los cambios.

## ¿Qué hace este workflow?
- Se define el evento (`on: push`) y el sistema operativo (`runs-on`).
- Los pasos:
    - Checkout del código
    - Instala Node.js y dependencias.
    - Ejecuta las pruebas usando Node.
    - Genera un archivo `test-results.txt` con los resultados.
    - Carga el archivo como artefacto en el pipeline de GitHub Actions que puedes descargar.

## Ver artefactos en GitHub
Una vez que se ejecute el workflow en GitHub Actions:

- Ve a la pestaña "Actions" de tu repositorio.
- Haz clic en la ejecución más reciente (por ejemplo, *Run Tests and Upload Artifact*).
- Desplázate hasta la sección "Artifacts" al final del resumen.
- Verás un enlace con el nombre *test-results*.
- Haz clic para descargar un archivo .zip que contiene el archivo test-results.txt.
- Abre el archivo y revisa los resultados de las pruebas, por ejemplo:

Código

```
name: Run Tests and Upload Artifact

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 22

      - name: Install dependencies
        run: npm install

      - name: Run tests and generate report
        run: node test/calculator.test.js

      - name: Upload artifact
        uses: actions/upload-artifact@v4
        with:
          name: test-results
          path: results/test-results.txt
```