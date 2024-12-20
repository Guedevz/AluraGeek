# AluraGeek

**AluraGeek** es una aplicación web diseñada para gestionar un catálogo de productos. Con esta herramienta, puedes agregar, mostrar y eliminar productos utilizando una API externa. Implementa funcionalidades CRUD (Create, Read, Delete) para interactuar con los datos almacenados.

## Características principales

- **Visualización de productos**: Los productos disponibles se cargan desde una API y se muestran en la interfaz.
- **Agregar productos**: Permite agregar nuevos productos mediante un formulario.
- **Eliminar productos**: Ofrece la opción de eliminar productos del catálogo con un botón dedicado.
- **Interacción dinámica**: La interfaz se actualiza automáticamente tras cada acción (agregar o eliminar).

## Tecnologías utilizadas

- **HTML** y **CSS**: Para la estructura y el diseño de la página.
- **JavaScript**: Para la interacción dinámica y la conexión con la API.
- **MockAPI**: Para almacenar y gestionar los datos de productos.

## Funcionalidades

1. **Carga de productos desde la API**
   Los datos se obtienen de la API `https://67658e2f410f84999655798f.mockapi.io/api/consola` y se muestran en la página de forma dinámica.

2. **Agregar productos**
   Mediante un formulario, puedes enviar nuevos productos a la API. Los datos incluyen:
   - Nombre
   - Descripción
   - Precio
   - Imagen (opcional)

3. **Eliminar productos**
   Cada producto cuenta con un botón para eliminarlo. Al hacer clic, se envía una solicitud `DELETE` a la API y se actualiza la interfaz.

## Requisitos previos

- Navegador web moderno compatible con JavaScript.
- Conexión a internet para interactuar con la API.

