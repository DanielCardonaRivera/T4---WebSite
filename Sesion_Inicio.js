// Función para manejar el inicio de sesión
function handleLogin(event) {
    event.preventDefault(); // Evita el envío del formulario por defecto
  
    // Obtener valores de los campos
    const email = document.getElementById('E-mail').value.trim();
    const password = document.getElementById('Contraseña').value.trim();
  
    // Validar campos
    if (!email || !password) {
      alert('Por favor, complete todos los campos.');
      return;
    }
  
    // Simulación de inicio de sesión (puedes reemplazar esto con lógica real)
    if (email === "usuario@ejemplo.com" && password === "123456") {
      alert('Inicio de sesión exitoso.');
      window.location.href = "#INICIO"; // Redirigir a la sección de inicio
    } else {
      alert('Correo o contraseña incorrectos.');
    }
  }
  
  // Función para manejar el registro
  function handleRegister(event) {
    event.preventDefault(); // Evita el envío del formulario por defecto
  
    // Obtener valores de los campos
    const name = document.getElementById('Nombre').value.trim();
    const email = document.getElementById('E-mail').value.trim();
    const password = document.getElementById('Contraseña').value.trim();
    const confirmPassword = document.getElementById('ConfirmacionContraseña').value.trim();
  
    // Validar campos
    if (!name || !email || !password || !confirmPassword) {
      alert('Por favor, complete todos los campos.');
      return;
    }
  
    // Validar que las contraseñas coincidan
    if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden.');
      return;
    }
  
    // Validación exitosa (puedes guardar los datos en un servidor o base de datos)
    alert(`¡Registro exitoso! Bienvenido, ${name}.`);
    window.location.href = "#INICIO"; // Redirigir a la sección de inicio
  }
  
  // Asignar eventos a los formularios
  document.addEventListener('DOMContentLoaded', () => {
    // Asignar evento al formulario de inicio de sesión
    const loginForm = document.querySelector('section#LOGIN form');
    if (loginForm) {
      loginForm.addEventListener('submit', handleLogin);
    }
  
    // Asignar evento al formulario de registro
    const registerForm = document.querySelector('section#REGISTRO form');
    if (registerForm) {
      registerForm.addEventListener('submit', handleRegister);
    }
  });
  