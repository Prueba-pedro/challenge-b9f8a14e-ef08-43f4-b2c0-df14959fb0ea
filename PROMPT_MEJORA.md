# Prompt para Mejorar el Codigo Base

Copia y pega el siguiente contenido completo en un asistente de IA (Claude, ChatGPT, etc.)
para obtener un ZIP con el proyecto corregido y listo para compilar.

---

```
Eres un asistente experto en análisis, corrección y generación de archivos de cualquier tipo:
código fuente, documentación, hojas de cálculo, documentos Word, configuraciones, entre otros.
Voy a enviarte una cadena de texto que contiene uno o más archivos. Cada archivo está delimitado por un marcador con el siguiente formato:
// === ARCHIVO: ruta/del/archivo.extension ===
o también puede aparecer como:
## === ARCHIVO: ruta/del/archivo.extension ===
Lo que sigue al marcador puede ser:

El contenido real del archivo (código, texto, YAML, etc.)
Una descripción en lenguaje natural de lo que debe contener el archivo


TU TAREA
PASO 1 — Detección y extracción
Identifica todos los archivos presentes en la cadena. Para cada archivo extrae:

Su ruta completa (ej: src/main/java/com/pragma/Service.java)
Su contenido o descripción

PASO 2 — Clasificación por tipo
Clasifica cada archivo en una de estas categorías:
A) Código fuente (Java, Python, TypeScript, JavaScript, Kotlin, etc.)
B) Configuración / documentación (YAML, properties, Markdown, JSON, txt, etc.)
C) Excel (.xlsx, .xls, .csv)
D) Word (.docx, .doc)
E) Otro tipo de archivo binario o especial
PASO 3 — Clasificación de errores en código fuente

Objetivo prioritario: que el proyecto compile. No corrijas flujo de negocio ni lógica funcional.

Antes de modificar cualquier archivo de código fuente, clasifica cada problema encontrado en una de estas dos categorías:
🔴 ERROR DE COMPILACIÓN — corregir siempre
Son errores que impiden que el proyecto arranque, sin valor pedagógico:

Import faltante o incorrecto
Clase, método o variable referenciada que no existe en ningún archivo del proyecto
Error de sintaxis
Anotación con atributos inválidos
Dependencia ausente en pom.xml, package.json, etc.
Archivo referenciado que no existe y debe ser creado con implementación mínima

→ CORREGIR estos errores.
🟡 PROBLEMA FUNCIONAL O DE CALIDAD — preservar siempre
Son problemas que no impiden compilar. Pueden ser intencionales para el aprendizaje:

Clave secreta hardcodeada ("secret", "password123")
API deprecada que funciona pero tiene reemplazo moderno
Lógica de negocio incorrecta o incompleta
Código redundante o de baja legibilidad
Falta de validaciones en flujo de negocio
Patrones de diseño incorrectos pero funcionales
Concurrencia no segura
Configuración funcional pero no óptima

→ PRESERVAR tal cual. No corregir, no mejorar, no comentar.
PASO 4 — Procesamiento según tipo de archivo
Tipo A — Código fuente
Aplica únicamente las correcciones clasificadas como 🔴 ERROR DE COMPILACIÓN.
No alteres ningún elemento clasificado como 🟡 PROBLEMA FUNCIONAL O DE CALIDAD.
Si falta un archivo referenciado, créalo con la implementación mínima necesaria para compilar.
Tipo B — Configuración / documentación
Extrae el contenido tal cual, sin modificaciones salvo errores evidentes de sintaxis
(ej: YAML mal indentado).
Tipo C — Excel (.xlsx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un archivo Excel funcional con:

Fila de encabezados en negrita con color de fondo distintivo
Columnas con ancho ajustado al contenido
Tipos de dato correctos por columna
Validaciones si la descripción lo indica
Hojas nombradas descriptivamente si hay más de una
Filas de ejemplo si no hay datos reales

Tipo D — Word (.docx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un documento Word funcional con:

Estilos de título (Título 1, Título 2) para jerarquía de secciones
Fuente legible (Calibri o equivalente), tamaño 11-12pt para cuerpo
Márgenes estándar
Tabla de contenido si tiene múltiples secciones
Tablas con encabezados en negrita si aplica

Tipo E — Otro
Genera el archivo con el contenido o estructura más apropiada según la descripción.
PASO 5 — Exportación en ZIP
Empaqueta todos los archivos en un único archivo ZIP descargable respetando exactamente
la estructura de rutas indicada por los marcadores.
El ZIP debe incluir:

Archivos de código con únicamente los errores de compilación corregidos
Archivos de configuración y documentación sin cambios
Archivos nuevos creados para resolver dependencias de compilación faltantes
Archivos Excel y Word generados desde descripción

IMPORTANTE: El ZIP debe estar listo para descargar al finalizar. No preguntes si el usuario
quiere generarlo. Simplemente genera el archivo y proporciona el enlace de descarga; No debes desplegar en el chat el resumen de lo que arreglaste al Zip, solo entregalo.

REGLAS IMPORTANTES

No omitas ningún archivo aunque no tenga errores ni modificaciones
Respeta los nombres y rutas exactas indicadas por los marcadores
Si un archivo no tiene marcador claro, infiere el nombre desde su contenido
Si la cadena contiene solo documentación o descripciones sin código, genera los archivos
correspondientes sin aplicar análisis de compilación
No agregues texto después del enlace de descarga del ZIP
No preguntes si el usuario quiere el ZIP: simplemente generalo siempre
Si detectas que falta un archivo de configuración necesario para compilar
(pom.xml, package.json, requirements.txt, build.gradle, etc.), créalo e inclúyelo
inferiendo su contenido desde los imports y frameworks detectados en el código
Nunca corrijas problemas 🟡 aunque parezcan obvios o fáciles de mejorar.
El participante que recibirá este proyecto los debe encontrar y resolver él mismo.


INPUT
Aquí está la cadena con los archivos:
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/App.css';
import ItemList from './components/ItemList';
import { useItemList } from './hooks/useItemList';

function App() {
  const { items, addItem, updateItem, deleteItem } = useItemList();

  return (
    <div className="App">
      <h1>Lista de Elementos</h1>
      <ItemList items={items} onUpdate={updateItem} onDelete={deleteItem} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

// === ARCHIVO: src/components/ItemList.tsx ===
import React from 'react';
import { Item } from '../types/item';

interface ItemListProps {
  items: Item[];
  onUpdate: (id: number, title: string, description: string) => void;
  onDelete: (id: number) => void;
}

const ItemList: React.FC<ItemListProps> = ({ items, onUpdate, onDelete }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <span>{item.title}</span>
          <button onClick={() => onUpdate(item.id, item.title, item.description)}>Editar</button>
          <button onClick={() => onDelete(item.id)}>Eliminar</button>
        </li>
      ))}
    </ul>
  );
};

export default ItemList;

// === ARCHIVO: src/components/EditForm.tsx ===
import React, { useState } from 'react';
import { Item } from '../types/item';
import { validateItem } from '../utils/validation';

interface EditFormProps {
  item: Item;
  onSubmit: (item: Item) => void;
}

const EditForm: React.FC<EditFormProps> = ({ item, onSubmit }) => {
  const [title, setTitle] = useState(item.title);
  const [description, setDescription] = useState(item.description);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const newItem = { id: item.id, title, description };
    if (validateItem(newItem)) {
      onSubmit(newItem);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
      <input type="text" value={description} onChange={e => setDescription(e.target.value)} />
      <button type="submit">Guardar</button>
    </form>
  );
};

export default EditForm;

// === ARCHIVO: src/services/itemService.ts ===
import { Item } from '../types/item';

let items: Item[] = [
  { id: 1, title: 'Elemento 1', description: 'Descripción del elemento 1' },
  { id: 2, title: 'Elemento 2', description: 'Descripción del elemento 2' }
];

export const addItem = (item: Item) => {
  items.push(item);
};

export const updateItem = (id: number, title: string, description: string) => {
  const item = items.find(i => i.id === id);
  if (item) {
    item.title = title;
    item.description = description;
  }
};

export const deleteItem = (id: number) => {
  items = items.filter(item => item.id!== id);
};

export const getItems = (): Item[] => items;

// === ARCHIVO: src/styles/App.css ===
.App {
  text-align: center;
}

h1 {
  color: #333;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 10px 0;
}

button {
  margin: 0 5px;
}

// === ARCHIVO: src/utils/validation.ts ===
import { Item } from '../types/item';

export const validateItem = (item: Item): boolean => {
  if (!item.title ||!item.description) {
    return false;
  }
  return true;
};

// === ARCHIVO: src/types/item.ts ===
export interface Item {
  id: number;
  title: string;
  description: string;
}

// === ARCHIVO: src/hooks/useItemList.ts ===
import React, { useState, useEffect } from 'react';
import { Item } from '../types/item';
import { getItems, addItem, updateItem, deleteItem } from '../services/itemService';

interface UseItemList {
  items: Item[];
  addItem: (item: Item) => void;
  updateItem: (id: number, title: string, description: string) => void;
  deleteItem: (id: number) => void;
}

export const useItemList = (): UseItemList => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    setItems(getItems());
  }, []);

  const handleAddItem = (item: Item) => {
    addItem(item);
    setItems(getItems());
  };

  const handleUpdateItem = (id: number, title: string, description: string) => {
    updateItem(id, title, description);
    setItems(getItems());
  };

  const handleDeleteItem = (id: number) => {
    deleteItem(id);
    setItems(getItems());
  };

  return {
    items,
    addItem: handleAddItem,
    updateItem: handleUpdateItem,
    deleteItem: handleDeleteItem
  };
}

// === ARCHIVO: package.json ===
{
  "name": "react-typescript-app",
  "version": "1.0.0",
  "private": true,
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "typescript": "^5.1.6"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  }
}

```
