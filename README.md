# Lista de Tareas - Angular 19 + Angular Material

Esta es una aplicación de **Lista de Tareas (ToDo App)** desarrollada con **Angular 19** y **Angular Material**.  
Permite al usuario **agregar nuevas tareas**, **marcar tareas como completadas** y **eliminar tareas** de manera interactiva.

---

## 🚀 Características principales

- ➕ Agregar nuevas tareas a la lista.  
- ✅ Marcar tareas como completadas o pendientes.  
- 🗑️ Eliminar tareas completadas únicamente.  
- 🎨 Interfaz estilizada con Angular Material: inputs, botones, cards, checkboxes.  
- 🔄 Tareas nuevas se muestran al inicio de la lista.

---

## 🛠️ Tecnologías utilizadas

| Tecnología       | Versión | Descripción                                         |
|------------------|---------|------------------------------------------------------|
| Angular          | 19      | Framework principal de la aplicación                |
| Angular Material | Última  | Componentes UI (inputs, botones, cards, checkboxes) |
| TypeScript       | 5.x     | Lenguaje principal                                  |
| RxJS             | 7.8     | Manejo de estados reactivo                          |

---

## 📂 Estructura de componentes

La aplicación está organizada en tres componentes principales:

1. **task-form**  
   - Componente para agregar nuevas tareas.  
   - Interactúa con el servicio `task-service` para crear tareas.

2. **task-list**  
   - Muestra la lista completa de tareas.  
   - Permite eliminar tareas y marcar su estado de completadas/no completadas.

3. **task-item**  
   - Representa cada tarea individual dentro de la lista.  
   - Contiene checkbox para marcar como completada y botón para eliminar.

---

## ⚙️ Servicio

- **task-service**: Maneja todas las operaciones CRUD de las tareas:
  - Crear (`addTask`)
  - Leer (`getTasks`)
  - Actualizar (`toggleTask`)
  - Eliminar (`deleteTask`)

---

## 💻 Ejecución de la aplicación

Sigue estos pasos para ejecutar la aplicación localmente:

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/cristianlee1993/prueba-tecnica-angular.git
   cd <prueba-angular>


2. **Intalar dependencias**

    npm install

2. **Levantar el servidor**

    ng serve -o

---

## 👤 Autor

**Cristian Alonso Lee**  
