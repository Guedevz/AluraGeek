async function cargarProductos() {
    try {
        const response = await fetch('https://raw.githubusercontent.com/Guedevz/Game-Consoles/refs/heads/main/consoles.json');
        if (!response.ok) {
            throw new Error(`Error al cargar los datos: ${response.status}`);
        }
        const data = await response.json();

        const productos = Array.isArray(data) ? data : data.consolas;

        if (!productos || !Array.isArray(productos)) {
        throw new Error('El JSON no contiene un array válido.');
        }

        const listaProductos = document.getElementById('data-list');
        productos.forEach(producto => {
        const itemHTML = `
            <li class="product__item">
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
    } catch (error) {
        console.error('Hubo un problema:', error);
    }
}

cargarProductos();

