# Desarrollo de una aplicación React con TypeScript

Se requiere desarrollar una aplicación que permita a los usuarios crear, leer, actualizar y eliminar elementos de una lista. La aplicación debe ser construida utilizando React y TypeScript, con componentes funcionales y hooks. Los elementos de la lista tendrán un título y una descripción. La aplicación debe manejar errores de validación para asegurar que los campos no estén vacíos y que el título sea único.

## Informacion General

| Campo | Valor |
|-------|-------|
| **Tema** | React con TypeScript |
| **Nivel** | junior-l1 |
| **Tipo** | practical |
| **Tiempo estimado** | 8 horas |

## Fases del Reto

### Fase 0: Configuración del Proyecto

**Objetivo:** Obtener el proyecto base funcional enviando el Código Base a un asistente de IA, que lo analizará, corregirá errores y generará un ZIP listo para usar.

**Tiempo estimado:** 15-30 minutos

**Instrucciones:**

- Asegúrate de tener instalado para ejecutar el proyecto: Node.js 18+, npm, VS Code o similar.
- Copia todo el contenido del campo **Código Base** de este reto — incluyendo el texto de instrucciones que aparece al inicio.
- Abre un asistente de IA (Claude en claude.ai, ChatGPT o Gemini — se recomienda Claude), pega el contenido copiado en el chat y envíalo.
- El asistente analizará los archivos, corregirá errores y generará un archivo ZIP descargable. Descárgalo y extráelo en la carpeta donde quieras trabajar.
- Ejecuta `npm install && npm run build` (o `npm start`). Si no hay errores, estás listo.

**Entregable:** El proyecto compila/arranca sin errores.

<details>
<summary>Pistas de conocimiento</summary>

- Copia el Código Base completo incluyendo el texto de instrucciones al inicio — esas instrucciones le indican al asistente exactamente qué hacer con los archivos.
- Si el asistente no genera el ZIP automáticamente al terminar el análisis, escríbele: "genera el ZIP ahora".
- Si el proyecto tiene errores al arrancar, comparte el mensaje de error con el mismo asistente para que lo corrija.

</details>

### Fase 1: Configuración inicial del proyecto

**Objetivo:** Configurar un proyecto de React con TypeScript y crear la estructura básica de la aplicación.

**Tiempo estimado:** 2 horas

**Instrucciones:**

- Configurar un nuevo proyecto de React con TypeScript.
- Crear la estructura de carpetas y archivos necesarios para la aplicación.
- Asegurar que el proyecto compile y se ejecute correctamente.

**Entregable:** Proyecto de React con TypeScript configurado y ejecutable.

<details>
<summary>Pistas de conocimiento</summary>

- Crear un nuevo proyecto de React utilizando la CLI de Create React App con soporte para TypeScript.
- Establecer la estructura de carpetas para componentes, servicios y estilos.

</details>

### Fase 2: Creación de componentes básicos

**Objetivo:** Crear los componentes funcionales necesarios para la aplicación, incluyendo un componente para la lista de elementos y un componente para el formulario de edición.

**Tiempo estimado:** 3 horas

**Instrucciones:**

- Crear un componente para mostrar la lista de elementos.
- Crear un componente para el formulario de edición de elementos.
- Asegurar que los componentes se rendericen correctamente.

**Entregable:** Componentes funcionales para la lista de elementos y el formulario de edición.

<details>
<summary>Pistas de conocimiento</summary>

- Utilizar hooks de React para manejar el estado y los efectos secundarios.
- Aplicar TypeScript para tipar las propiedades y el estado de los componentes.

</details>

### Fase 3: Implementación de la lógica de la aplicación

**Objetivo:** Implementar la lógica para crear, leer, actualizar y eliminar elementos de la lista, incluyendo la validación de campos.

**Tiempo estimado:** 3 horas

**Instrucciones:**

- Implementar la lógica para añadir nuevos elementos a la lista.
- Implementar la lógica para leer y mostrar los elementos de la lista.
- Implementar la lógica para actualizar elementos existentes.
- Implementar la lógica para eliminar elementos de la lista.
- Añadir validación para asegurar que los campos no estén vacíos y que el título sea único.

**Entregable:** Lógica implementada para crear, leer, actualizar y eliminar elementos de la lista, con validación de campos.

<details>
<summary>Pistas de conocimiento</summary>

- Utilizar el hook useState para manejar el estado de la lista de elementos.
- Utilizar el hook useEffect para manejar efectos secundarios, como la actualización de la lista.
- Aplicar TypeScript para asegurar la tipificación correcta de los datos y la lógica de la aplicación.

</details>

## Dimensiones Evaluadas

- **queEs**: ¿Qué es un componente funcional en React y cómo se utiliza TypeScript para tipar sus propiedades y estado?
- **paraQueSirve**: ¿Para qué sirve utilizar hooks en React y cómo mejoran la gestión del estado y los efectos secundarios?
- **comoSeUsa**: ¿Cómo se utiliza TypeScript para asegurar la tipificación correcta de los datos y la lógica de la aplicación en React?
- **erroresComunes**: ¿Cuáles son los errores comunes al implementar validación de campos en React con TypeScript y cómo se pueden evitar?

## Criterios de Evaluacion

- Configurar correctamente un proyecto de React con TypeScript.
- Crear componentes funcionales para la lista de elementos y el formulario de edición.
- Implementar la lógica para crear, leer, actualizar y eliminar elementos de la lista, incluyendo validación de campos.

---

*Reto generado automaticamente por Challenge Generator - Pragma*
