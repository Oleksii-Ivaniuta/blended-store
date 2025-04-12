//Описана робота модалки - відкриття закриття і все що з модалкою повʼязано
const modal = document.querySelector('.modal');

export function openModal() {
  modal.classList.add('modal--is-open');

  document.addEventListener('keydown', handleEscapeClose);
  modal.addEventListener('click', handleBackdropClickClose);
}

export function closeModal() {
  modal.classList.remove('modal--is-open');
  removeEventListeners();
}

function removeEventListeners() {
  document.removeEventListener('keydown', handleEscapeClose);
  modal.removeEventListener('click', handleBackdropClickClose);
}

function handleEscapeClose(event) {
  if (event.key === 'Escape') closeModal();
}

function handleBackdropClickClose(event) {
  if (event.target === modal) closeModal();
}
