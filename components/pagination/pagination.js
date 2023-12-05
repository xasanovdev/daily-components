const itemsPerPage = 5;


const data = Array.from({ length: 11 }, (_, i) => `Item ${i + 1}`);

console.log(data);

const paginationList = document.getElementById('pagination-list');
const contentContainer = document.getElementById('content');

const displayContent = (pageNumber) => {
  const startIndex = (pageNumber - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const paginationData = data.slice(startIndex, endIndex);

  contentContainer.innerHTML = paginationData
    .map((pagination) => `<div>Pagination item ->${pagination}</div>`)
    .join('');
};

const hightLightButton = (buttonNumber) => {
  const buttons = paginationList.children;

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove('active');
  }

  buttons[buttonNumber - 1].classList.add('active');
};

const createPaginationButton = () => {
  const countButton = Math.ceil(data.length / itemsPerPage);

  for (let i = 1; i <= countButton; i++) {
    const button = document.createElement('button');
    button.textContent = i;

    button.addEventListener('click', () => {
      displayContent(i);
      hightLightButton(i);
    });

    paginationList.appendChild(button);
  }

  displayContent(1);
  hightLightButton(1);
};

createPaginationButton();
