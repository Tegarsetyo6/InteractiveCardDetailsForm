// Set All Warning to hide
$('.name-blank-warning').hide();
$('.contain-number-warning').hide();
$('.number-blank-warning').hide();
$('.number-warning').hide();
$('.date-warning').hide();
$('.date-contain-letter').hide();
$('.cvc-warning').hide();
$('.cvc-contain-letter').hide();
$('.submit-feedback').hide();

// Creating Variables
const cardholderNameInput = document.getElementById('cardholder-name');
const cardNumberInput = document.getElementById('card-number');
const cardNameError = document.querySelector('name-error');
const cardMonth = document.getElementById('month');
const cardDate = document.getElementById('date');
const cardCVC = document.getElementById('cvc');

cardholderNameInput.addEventListener('keyup', function (e) {
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

cardNumberInput.addEventListener('keyup', function (e) {
  e.target.value = e.target.value.replace(/(\d{4})(\d+)/g, '$1 $2');

  let key = e.key;
  let keyLetters = key.match(/^[A-za-z ]*$/);

  if (cardNumberInput.value.length === 0) {
    $('.number-blank-warning').show();
  } else {
    $('.number-blank-warning').hide();
  }

  if (containsAnyLetter(cardNumberInput.value) === true) {
    $('.number-warning').show();
  } else {
    $('.number-warning').hide();
  }
});

cardMonth.addEventListener('keyup', function (e) {
  let key = e.key;
  let keyLetters = key.match(/^[A-za-z ]*$/);

  if (cardMonth.value.length === 0) {
    $('.date-warning').show();
  } else {
    $('.date-warning').hide();
  }

  if (containsAnyLetter(cardMonth.value) === true) {
    $('.date-contain-letter').show();
  } else {
    $('.date-contain-letter').hide();
  }
});

cardDate.addEventListener('keyup', function (e) {
  let key = e.key;
  let keyLetters = key.match(/^[A-za-z ]*$/);

  if (cardDate.value.length === 0) {
    $('.date-warning').show();
  } else {
    $('.date-warning').hide();
  }

  if (containsAnyLetter(cardDate.value) === true) {
    $('.date-contain-letter').show();
  } else {
    $('.date-contain-letter').hide();
  }
});

cardCVC.addEventListener('keyup', function (e) {
  let key = e.key;
  let keyLetters = key.match(/^[A-za-z ]*$/);

  if (cardCVC.value.length === 0) {
    $('.cvc-warning').show();
  } else {
    $('.cvc-warning').hide();
  }

  if (containsAnyLetter(cardCVC.value) === true) {
    $('.date-contain-letter').show();
  } else {
    $('.date-contain-letter').hide();
  }
});

$('.submit-button').click(function (event) {
  var a = cardholderNameInput.value;
  var b = cardNumberInput.value;
  var c = cardMonth.value;
  var d = cardDate.value;
  var e = cardCVC.value;

  if ((a == null || a == '', b == null || b == '', c == null || c == '', d == null || d == '', e == null || e == '')) {
    alert('Please Fill All Required Field');
    return false;
  } else {
    $('.form').hide();
    $('.submit-feedback').show();
  }

  event.preventDefault();
});

// Functions

function containsAnyLetter(str) {
  return /[a-zA-Z]/.test(str);
}

function stringContainsNumber(_string) {
  return /\d/.test(_string);
}
