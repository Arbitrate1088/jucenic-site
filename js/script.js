document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const menu = document.getElementById('menu');

  // Activar menú hamburguesa
  hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
  });

  // Cerrar submenús si haces clic fuera
  document.addEventListener('click', (e) => {
    const isClickInside = hamburger.contains(e.target) || menu.contains(e.target);
    if (!isClickInside) {
      menu.classList.remove('active');
    }
  });
});
