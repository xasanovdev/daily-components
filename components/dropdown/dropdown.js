const dropdownToggleButton = document.querySelector('.dropdown-toggle-button');
const dropdownMenu = document.querySelector('.dropdown-menu');

dropdownToggleButton.addEventListener("click", function() {
    dropdownMenu.classList.toggle('active');
    dropdownMenu.computedStyleMap.height = "auto";
})