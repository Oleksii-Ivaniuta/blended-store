//Описана робота модалки - відкриття закриття і все що з модалкою повʼязано

import { refs } from './refs';

export function openModal() {
  refs.modal.classList.add('modal--is-open');

  document.addEventListener('keydown', handleEscapeClose);
  refs.modal.addEventListener('click', handleBackdropClickClose);
}

export function closeModal() {
  refs.modal.classList.remove('modal--is-open');
  removeEventListeners();
}

function removeEventListeners() {
  document.removeEventListener('keydown', handleEscapeClose);
  refs.modal.removeEventListener('click', handleBackdropClickClose);
}

function handleEscapeClose(event) {
  if (event.key === 'Escape') closeModal();
}

function handleBackdropClickClose(event) {
  if (event.target === refs.modal) closeModal();
}
