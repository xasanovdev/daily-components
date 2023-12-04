const modalToggleButtons = document.querySelectorAll('.modal-toggle-button');
const modalCloseButtons = document.querySelectorAll('.close-modal-button');
const overlay = document.querySelector('.overlay');
const modals = document.querySelectorAll('.modal');

// openModal funcition for open modals
const openModal = (modalId) => {
  const modal = document.getElementById(modalId);
  modal.classList.add('active');
  overlay.classList.add('active');
};

// closeModal function for close modals
const closeModal = (modalId) => {
  const modal = document.getElementById(modalId);
  modal.classList.remove('active');
  overlay.classList.remove('active');
};

modalToggleButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const modalId = button.getAttribute('modal-id');
    openModal(modalId);
  });
});

modalCloseButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modalId = button.parentElement.id;
    console.log(button.parentElement.id);
    closeModal(modalId);
  });
});

overlay.addEventListener('click', (e) => {
  modals.forEach((modal) => {
    modal.classList.remove('active');
  });
  overlay.classList.remove('active');
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    modals.forEach((modal) => {
      modal.classList.remove('active');
    });
    overlay.classList.remove('active');
  }
});
