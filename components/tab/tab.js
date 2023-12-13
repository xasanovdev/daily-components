const tabButtons = document.querySelectorAll('.tab-navbar__item');
const tabItems = document.querySelectorAll('.tab-item');

function openTab(tabId, button) {
  const tabItem = document.getElementById(tabId);
  tabItem.classList.add('active');
  button.classList.add('active');
}
function removeActiveTabs() {
  tabButtons.forEach((button) => {
    button.classList.remove('active');
  });
  tabItems.forEach((tabItem) => {
    tabItem.classList.remove('active');
  });
}
tabButtons.forEach((button) => {
  button.addEventListener('click', () => {
    console.log('click');
    const tabId = button.getAttribute('tab-id');
    removeActiveTabs();
    openTab(tabId, button);
  });
});
