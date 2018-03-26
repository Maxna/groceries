$(document).ready(function() {
  $(".groceries").submit(function() {
    event.preventDefault();
    var inputList = [1,2,3,4];
    var orders = [];

    inputList.forEach(function(item){
      var input = $('#g' + item).val().toUpperCase();
      orders.push(input);
    });

    orders.sort();

    orders.map(function(order){
      $('#list').append('<li>' + order + '</li>');
    });
    $('.groceries').hide();
    $('.hidden').show();
  });
});
