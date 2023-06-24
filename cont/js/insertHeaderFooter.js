document.addEventListener("DOMContentLoaded", function() {
    // Insertar el encabezado
    fetch("/cont/web/header.html")
      .then(response => response.text())
      .then(html => {
        document.getElementById("header-container").innerHTML = html;
      });
  
    // Insertar el pie de página
    fetch("/cont/web/footer.html")
      .then(response => response.text())
      .then(html => {
        document.getElementById("footer-container").innerHTML = html;
      });
  });
  