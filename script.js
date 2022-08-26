$('.name-blank-warning').hide();
$('.contain-number-warning').hide();

const cardholderNameInput = document.getElementById('cardholder-name');
const cardNumberInput = document.getElementById('card-number');
const cardNameError = document.querySelector('name-error');
const cardNameDisplay = document.getElementsByClassName('card-name-display');

cardholderNameInput.addEventListener('keyup', (e) => {
  let key = e.key;
  let keyLetters = key.match(/^[A-za-z ]*$/);

  if (cardholderNameInput.value.length === 0) {
    $('.name-blank-warning').show();
  } else {
    $('.name-blank-warning').hide();
  }

  if (stringContainsNumber(cardholderNameInput.value) === true) {
    $('.contain-number-warning').show();
  } else {
    $('.contain-number-warning').hide();
  }
});

$(document).submit(function () {
  alert(cardholderNameInput.value);
});

// Functions

function containsAnyLetter(str) {
  return /[a-zA-Z]/.test(str);
}

function stringContainsNumber(_string) {
  return /\d/.test(_string);
}
