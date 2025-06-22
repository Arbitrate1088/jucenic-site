document.addEventListener('DOMContentLoaded', () => {
  const toggles = document.querySelectorAll('.dropdown-toggle');
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelector('.nav-links');

  // Abrir y cerrar submenús
  toggles.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
      const parent = toggle.closest('.dropdown');
      parent.classList.toggle('open');

      // Cierra otros menús
      document.querySelectorAll('.dropdown').forEach(drop => {
        if (drop !== parent) drop.classList.remove('open');
      });
    });
  });

  // Cerrar submenú si haces clic fuera
  document.addEventListener('click', (e) => {
    document.querySelectorAll('.dropdown').forEach(drop => {
      if (!drop.contains(e.target)) drop.classList.remove('open');
    });
  });

  // Mostrar menú móvil
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });
});
