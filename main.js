// ============================================================  TRAER PRODUCTOS DE LA API  ============================================================

async function cargarProductos() {
    try {
        const response = await fetch('https://67658e2f410f84999655798f.mockapi.io/api/consola');
        if (!response.ok) {
            throw new Error(`Error al cargar los datos: ${response.status}`);
        }
        const data = await response.json();

        const listaProductos = document.getElementById('data-list');
        listaProductos.innerHTML = '';

        data.forEach(producto => {
            const itemHTML = `
                <li class="product__item" data-id="${producto.id}">
                    <img src="${producto.imagen}" alt="Foto del producto" class="product__item-img">
                    <div class="product__item-content">
                        <h4 class="product__item-name subtitle__h4">${producto.nombre}</h4>
                        <p class="product__item-description">${producto.descripcion}</p>
                        <p class="product__item-price subtitle__h5">${producto.precio}</p>
                        <button class="product__item-btn">
                            <img src="./assets/delete.png" alt="icono de borrar" class="product__item-icon">
                        </button>
                    </div>
                </li>
            `;
            listaProductos.insertAdjacentHTML('beforeend', itemHTML);
        });

        const botonEliminar = document.querySelectorAll('.product__item-btn');
        botonEliminar.forEach(boton => {
            boton.addEventListener('click', async (event) => {
                const idProducto = event.target.closest('.product__item').getAttribute('data-id');
                await eliminarProducto(idProducto);
            });
        });
    } catch (error) {
        console.error('Hubo un problema:', error);
    }
}

// Función para eliminar un producto de la API

async function eliminarProducto(id) {
    try {
        const response = await fetch(`https://67658e2f410f84999655798f.mockapi.io/api/consola/${id}`, {
            method: 'DELETE',
        });

        if (!response.ok) {
            throw new Error(`Error al eliminar el producto: ${response.status} - ${await response.text()}`);
        }

        console.log('Producto eliminado con éxito');
        // Elimina el producto de la interfaz
        const itemProducto = document.querySelector(`.product__item[data-id="${id}"]`);
        itemProducto.remove();
    } catch (error) {
        console.error('Hubo un error:', error);
        alert('Ocurrió un error al eliminar el producto. Por favor, verifica tu conexión a internet o intenta más tarde.');
    }
}

cargarProductos();



// ============================================================  AGREGAR PRODUCTOS DE LA API  ============================================================

async function agregarProducto(event) {
    event.preventDefault();

    // Captura los datos del formulario
    const nombre = document.querySelector('#product-name').value;
    const descripcion = document.querySelector('#product-description').value;
    const precio = document.querySelector('#product-price').value;
    const imagen = document.querySelector('#product-image').value || 'https://via.placeholder.com/150';

    // Estructura los datos del nuevo producto
    const nuevoProducto = {
        nombre,
        descripcion,
        precio: `$${precio}`,
        imagen
    };

    try {
        // Enviar el nuevo producto a la API de MockAPI
        const response = await fetch(`https://67658e2f410f84999655798f.mockapi.io/api/consola`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(nuevoProducto),
        });

        if (!response.ok) {
            throw new Error('No se pudo agregar el producto');
        }

        const data = await response.json();
        console.log('Producto agregado con éxito:', data);

        alert('Producto agregado exitosamente');
        document.querySelector('.form__container').reset();

        cargarProductos();
    } catch (error) {
        console.error('Hubo un error:', error);
        alert('Ocurrió un error al agregar el producto');
    }
}

document.querySelector('.form__container').addEventListener('submit', agregarProducto);
