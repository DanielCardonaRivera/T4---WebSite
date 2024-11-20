// Datos de los productos con precios y categorías
const products = [
    { id: 1, name: "Blusa", category: "blusas", price: 50000, image: "imagenes/blusa.jpg" },
    { id: 2, name: "Chaqueta", category: "chaquetas", price: 300000, image: "imagenes/chaqueta.jpg" },
    { id: 3, name: "Pantalón", category: "pantalones", price: 140000, image: "imagenes/pantalon.jpg" },
    { id: 4, name: "Falda", category: "faldas", price: 90000, image: "imagenes/falda.jpg" },
    { id: 5, name: "Vestido", category: "vestidos", price: 220000, image: "imagenes/vestido.jpg" },
    { id: 6, name: "Camiseta", category: "camisetas", price: 30000, image: "imagenes/camiseta.jpg" },
];

// Referencia al contenedor de productos
const productsContainer = document.getElementById("products-container");

// Función para renderizar productos
function renderProducts(filteredProducts) {
    productsContainer.innerHTML = ""; // Limpiar productos existentes
    filteredProducts.forEach(product => {
        const productItem = document.createElement("div");
        productItem.className = "product-item";
        productItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <p>${product.name}</p>
            <p>$${product.price.toLocaleString()}</p>
        `;
        productsContainer.appendChild(productItem);
    });
}

// Renderizar todos los productos inicialmente
renderProducts(products);


//CODIGO BUSADOR
// Manejar filtros al enviar el formulario
document.getElementById("filter-form").addEventListener("submit", (event) => {
    event.preventDefault();

    // Obtener valores seleccionados en los filtros
    const selectedCategory = document.getElementById("category").value;
    const selectedPriceRange = document.getElementById("price-range").value;

    // Determinar los límites de precios según la selección
    let minPrice = 0;
    let maxPrice = Infinity;

    if (selectedPriceRange === "20-100") {
        minPrice = 20000;
        maxPrice = 100000;
    } else if (selectedPriceRange === "100-250") {
        minPrice = 100001;
        maxPrice = 250000;
    } else if (selectedPriceRange === "250-max") {
        minPrice = 250001;
    }

    // Filtrar productos basados en categoría y rango de precios
    const filteredProducts = products.filter(product => {
        const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
        const matchesPrice = product.price >= minPrice && product.price <= maxPrice;
        return matchesCategory && matchesPrice;
    });

    // Renderizar productos filtrados
    renderProducts(filteredProducts);
});

// FIN CODIGO BUSCADOR
