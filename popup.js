const popup = document.querySelector('.popup');

function showPopup() {
  popup.style.display = 'block';
}

function hidePopup() {
  popup.style.display = 'none';
}

// Mostrar el popup cuando se cargue la página
window.addEventListener('load', showPopup);

// Ocultar el popup cuando se haga clic en cualquier parte fuera de él
document.addEventListener('click', (event) => {
  if (!popup.contains(event.target)) {
    hidePopup();
  }
});
