const modalToggleButtons = document.querySelectorAll('.modal-toggle-button');
const modalCloseButtons = document.querySelectorAll('.close-modal-button');
const modalNextButtons = document.querySelectorAll('.next-modal-button');
const overlay = document.querySelector('.overlay');
const modals = document.querySelectorAll('.modal');

// openModal function to open modals
const openModal = (modalId) => {
  const modal = document.getElementById(modalId);
  modal.classList.add('active');
  overlay.classList.add('active');
};

// closeModal function to close modals
const closeModal = (modalId) => {
  const modal = document.getElementById(modalId);
  modal.classList.remove('active');
  overlay.classList.remove('active');
};

// Function to remove active modals based on input content
const removeActiveModals = () => {
  modals.forEach((modal) => {
    const modalInput = modal.querySelector('.modal-input');
    const nextButton = modal.querySelector('.next-modal-button');

    if (modalInput) {
      if (modalInput.value.length === 0) {
        modalInput.classList.add('error');
        nextButton.classList.add('active');
      } else {
        modal.classList.remove('active');
        nextButton.classList.remove('active');
        modalInput.classList.remove('error');
      }
    } else {
      modal.classList.remove('active');
    }
  });
};

// Function to handle opening the next modal
const nextModal = (modalId) => {
  removeActiveModals();
  const modal = document.getElementById(modalId);
  setTimeout(() => {
    modal.classList.add('active');
  }, 200);
};

// Add input event listeners to dynamically update Next button
modals.forEach((modal) => {
  const modalInput = modal.querySelector('.modal-input');
  if (modalInput) {
    modalInput.addEventListener('input', () => {
      const nextButton = modal.querySelector('.next-modal-button');
      if (modalInput.value.length > 0) {
        nextButton.classList.remove('active');
      } else {
        nextButton.classList.add('active');
      }
    });
  }
});

// Event listeners for Next, Open, Close, Overlay click, and Escape key
modalNextButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const modalId = button.getAttribute('modal-id');
    nextModal(modalId);
  });
});

modalToggleButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const modalId = button.getAttribute('modal-id');
    openModal(modalId);
  });
});

modalCloseButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modalId = button.parentElement.id;
    closeModal(modalId);
  });
});

overlay.addEventListener('click', () => {
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
