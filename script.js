$('.contain-number-warning').hide();
$('.number-blank-warning').hide();
$('.name-blank-warning').hide();
$('.number-warning').hide();
$('.date-warning').hide();
$('.cvc-warning').hide();

var condition = true;

$('.submit-button').click(function () {
  var cardNumber = $('.number-input').val();
  var name = $('.name-input').val();
  if (stringContainsNumber(name) == true) {
    $('.contain-number-warning').show();
    condition = false;
  } else {
    $('.contain-number-warning').hide();
  }

  if ($('.name-input').val().length == 0) {
    $('.name-warning').show();
    condition = false;
  } else {
    $('.name-warning').hide();
  }

  if ($('.number-input').val().length === 0) {
    $('.number-blank-warning').show();
  } else {
    $('.number-blank-warning').hide();
  }

  if (containsAnyLetter(cardNumber) == true) {
    $('.number-warning').show();
    alert('tset');
  } else {
    $('.number-warning').hide();
  }
});

// Functions

function containsAnyLetter(str) {
  return /[a-zA-Z]/.test(str);
}

function stringContainsNumber(_string) {
  return /\d/.test(_string);
}
