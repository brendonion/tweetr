$(document).ready(function () {
  $('.new-tweet form').on('keypress', 'textarea', function(event){
    let count = $(this).parent().find('.counter');
    let counter = 140 - $(this).val().length - 1;
    count.html(counter);
    if (counter <= 0) {
      count.css("color", "red");
    } else {
      count.css("color", "#244751");
    }
  });
});