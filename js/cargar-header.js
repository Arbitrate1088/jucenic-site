document.addEventListener('DOMContentLoaded', () => {
  const headerDiv = document.getElementById('header');
  if (headerDiv) {
    fetch('componentes/header.html')
      .then(response => response.text())
      .then(data => {
        headerDiv.innerHTML = data;
        activarSubmenus(); // activa dropdowns
      });
  }

  function activarSubmenus() {
    const toggles = document.querySelectorAll('.has-submenu > a');
    toggles.forEach(toggle => {
      toggle.addEventListener('click', (e) => {
        e.preventDefault();
        const submenu = toggle.nextElementSibling;
        submenu.classList.toggle('visible');
      });
    });

    const hamburger = document.getElementById('hamburger');
    const nav = document.querySelector('.nav');
    if (hamburger && nav) {
      hamburger.addEventListener('click', () => {
        nav.classList.toggle('visible');
      });
    }
  }
});
function toggleMenu() {
  const nav = document.querySelector('.nav');
  if (nav) {
    nav.classList.toggle('visible');
  }
}
