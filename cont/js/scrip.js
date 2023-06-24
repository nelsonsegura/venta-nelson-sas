document.addEventListener("DOMContentLoaded", function() {
    var registroForm = document.getElementById("registroForm");
    var mensaje = document.getElementById("mensaje");
  
    registroForm.addEventListener("submit", function(e) {
      e.preventDefault(); // Evitar el envío del formulario
  
      // Mostrar el mensaje de registro exitoso
      mensaje.style.display = "block";
  
      // Redirigir después de 3 segundos (3000 ms)
      setTimeout(function() {
        window.location.href = registroForm.action;
      }, 3000);
    });
  });