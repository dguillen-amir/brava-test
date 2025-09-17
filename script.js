function mostrarSeccion(id) {
  const secciones = document.querySelectorAll('.seccion');
  secciones.forEach(sec => sec.classList.remove('activa'));
  document.getElementById(id).classList.add('activa');
}

// Detectar si la imagen no se cargó correctamente
document.addEventListener('DOMContentLoaded', function() {
  const logoImg = document.querySelector('.logo');
  if (logoImg) {
    logoImg.onerror = function() {
      this.style.display = 'none';
      // Si necesitas un placeholder, puedes crearlo dinámicamente aquí
    };
  }
});