var Pizza = {size: 12,
            toppings: undefined,
            delivery: false,
            customer: undefined};

Pizza.sliceCount = function() {
  if (this.size === 8) {
    return 6;
  } else if (this.size === 12) {
    return 10;
  } else if (this.size === 22) {
    return 18;
  }
};
Pizza.piePrice = function() {
  var total, toppingRate;
  if (this.size === 8) {
    total = 9, toppingRate = 1;
  } else if (this.size === 12) {
    total = 14, toppingRate = 2;
  } else if (this.size === 22) {
    total = 20, toppingRate = 3;
  }
  total += toppingRate * (this.toppings.length - 2);
  return total;
}

var allPizzas = [];

$(function(){
  $('#pizza-form').submit(function(event){
    event.preventDefault();
    newPizza = Object.create(Pizza);
    newPizza.size = parseInt($('#selectSize').val());
    newPizza.toppings = [];
    var pieText = '<h4>' + newPizza.size + '" pizza </h4>'
    if ($('#tomato-sauce').prop('checked')) {
      newPizza.toppings.push('tomato sauce');
      pieText = pieText + '<h6>tomato sauce</h6>';
      }
    if ($('#cheese').prop('checked')) {
      newPizza.toppings.push('cheese');
      pieText = pieText + '<h6>mozarella</h6>';
      }
    if ($('#pepperoni').prop('checked')) {
      newPizza.toppings.push('pepperoni');
      pieText = pieText + '<h6>pepperoni</h6>';
      }
    if ($('#anchovies').prop('checked')) {
      newPizza.toppings.push('anchovies');
      pieText = pieText + '<h6>anchovies</h6>';
      }
    if ($('#arugala').prop('checked')) {
      newPizza.toppings.push('arugala');
      pieText = pieText + '<h6>arugala</h6>';
      }
    $('#no-pie').remove();
    $('#order').append(pieText);

  });
});
