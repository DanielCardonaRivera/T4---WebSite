// Variables globales
const precio = 25000; // Precio del producto
let cantidad = 1; // Cantidad inicial
let total = precio * cantidad; // Total inicial

// Referencias a elementos del DOM
const cantidadInput = document.getElementById('cantidad');
const totalAPagar = document.getElementById('totalAPagar');
const carritoMensaje = document.getElementById('carritoMensaje');
const metodoPago = document.getElementById('metodoPago');

// Evento: Actualizar total al cambiar la cantidad
cantidadInput.addEventListener('input', () => {
    cantidad = cantidadInput.value || 1; // Asegurar un valor mínimo de 1
    total = precio * cantidad;
    totalAPagar.innerText = `$${total.toLocaleString()}`;
});

// Evento: Agregar producto al carrito
document.getElementById('agregarCarrito').addEventListener('click', () => {
    carritoMensaje.style.display = 'block';
    console.log(`Producto agregado al carrito: Camisa Blanca, Cantidad: ${cantidad}`);
});

// Evento: Mostrar método de pago
document.getElementById('comprarAhora').addEventListener('click', () => {
    metodoPago.style.display = 'block';
    totalAPagar.innerText = `$${total.toLocaleString()}`;
});

// Evento: Finalizar compra
document.getElementById('finalizarCompra').addEventListener('click', () => {
    const metodoSeleccionado = document.querySelector('input[name="metodo"]:checked');
    if (metodoSeleccionado) {
        alert(`Compra realizada con el método de pago: ${metodoSeleccionado.value}. Total: $${total.toLocaleString()}`);
    } else {
        alert('Por favor, seleccione un método de pago.');
    }
});

// Evento: Ver carrito (ejemplo de acción futura)
document.getElementById('verCarrito').addEventListener('click', () => {
    alert('Aquí mostrarías el contenido del carrito.');
});
