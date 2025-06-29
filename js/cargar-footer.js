document.addEventListener('DOMContentLoaded', () => {
  fetch('componentes/footer.html')
    .then(res => res.text())
    .then(data => {
      const footerContainer = document.createElement('div');
      footerContainer.innerHTML = data;
      document.body.appendChild(footerContainer);
    });
});
