

document.getElementById('Barra_busqueda').addEventListener('keyup', function () {
  const query = this.value.toLowerCase();
  const articles = document.querySelectorAll('#articulos li');

  articles.forEach(article => {
      const text = article.textContent.toLowerCase();
      if (text.includes(query)) {
          article.style.display = 'block';
      } else {
          article.style.display = 'none';
      }
  });
});
