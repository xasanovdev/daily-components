const value = document.querySelector('.value');
const valueContent = document.querySelector('.select-value');
const selectItems = document.querySelectorAll('.select-item');
const selectList = document.querySelector('.select-list');

valueContent.addEventListener('click', (e) => {
  valueContent.classList.toggle('active');
  if (valueContent.classList.contains('active')) {
    selectList.classList.add('active');
  } else {
    selectList.classList.remove('active');
  }
});

const countryForm = document.getElementById('countryForm');
const selectedValue = document.getElementById('selectedValue');

countryForm.addEventListener('change', (event) => {
  const selectedCountry = document.querySelector(
    'input[name="country"]:checked'
  );

  if (selectedCountry) {
    selectedValue.innerHTML = `<span class="value">${selectedCountry.value}</span>`;
  } else {
    selectedValue.innerHTML = '<span class="value">Select value</span>';
  }
});
