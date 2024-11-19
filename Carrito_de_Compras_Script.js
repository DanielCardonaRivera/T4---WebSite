// Arreglo para almacenar los productos del carrito
let carrito = [];

// Función para agregar productos al carrito
function agregarAlCarrito(nombre, precio) {
    // Crear un objeto producto
    const producto = {
        nombre: nombre,
        precio: precio
    };

    // Añadir el producto al carrito
    carrito.push(producto);

    // Actualizar la lista del carrito en la página
    actualizarCarrito();
}

// Función para actualizar el carrito
function actualizarCarrito() {
    const listaCarrito = document.getElementById('lista-carrito');
    const totalElemento = document.getElementById('total');

    // Limpiar la lista del carrito
    listaCarrito.innerHTML = '';

    // Variable para calcular el total
    let total = 0;

    // Añadir cada producto del carrito a la lista
    carrito.forEach((producto) => {
        const li = document.createElement('li');
        li.textContent = `${producto.nombre} - $${producto.precio}`;
        listaCarrito.appendChild(li);

        // Sumar al total
        total += producto.precio;
    });

    // Mostrar el total
    totalElemento.textContent = `Total: $${total}`;
}
