// Menú adaptable: permite abrir y cerrar la navegación en pantallas pequeñas.
const botonMenu = document.querySelector('.menu-toggle');
const menu = document.querySelector('#menu-principal');

if (botonMenu && menu) {
  botonMenu.addEventListener('click', () => {
    const estaAbierto = botonMenu.getAttribute('aria-expanded') === 'true';
    botonMenu.setAttribute('aria-expanded', String(!estaAbierto));
    botonMenu.setAttribute('aria-label', estaAbierto ? 'Abrir menú' : 'Cerrar menú');
    menu.classList.toggle('menu-abierto', !estaAbierto);
  });

  // Al elegir una sección, el menú móvil se cierra automáticamente.
  menu.querySelectorAll('a').forEach((enlace) => {
    enlace.addEventListener('click', () => {
      botonMenu.setAttribute('aria-expanded', 'false');
      botonMenu.setAttribute('aria-label', 'Abrir menú');
      menu.classList.remove('menu-abierto');
    });
  });
}

console.log('Portfolio de Naia cargado correctamente.');
