document.addEventListener('DOMContentLoaded', () => {
  const toggles = document.querySelectorAll('.dropdown-toggle');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.querySelector('.nav-links');

  // Submenús desplegables
  toggles.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
      e.stopPropagation(); // evita cierre accidental
      const parent = toggle.closest('.dropdown');
      parent.classList.toggle('open');

      // Cierra otros submenús
      document.querySelectorAll('.dropdown').forEach(drop => {
        if (drop !== parent) drop.classList.remove('open');
      });
    });
  });

  // Cerrar si se hace clic fuera
  document.addEventListener('click', (e) => {
    document.querySelectorAll('.dropdown').forEach(drop => {
      if (!drop.contains(e.target)) drop.classList.remove('open');
    });
  });

  // Menú hamburguesa móvil
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });
});
