var Pizza = {size: 'medium',
            toppings: undefined,
            style: 'sicilian',
            delivery: false,};

Pizza.sliceCount = function() {
  if (this.style === 'sicilian'){
    if (this.size === 8) {
    return 6;
    } else if (this.size === 12) {
    return 10;
    } else if (this.size === 22) {
    return 18;
    }
  } else if (this.style === 'neopolitan') {
    if (this.size === 8) {
    return 4;
    } else if (this.size === 12) {
    return 9;
    } else if (this.size === 22) {
    return 16;
    }
  }
};
Pizza.piePrice = function() {
  var total, toppingRate;
  if ((this.size === 8) && (this.style === 'sicilian')) {
    total = 9, toppingRate = 1;
  } else if ((this.size === 12) && (this.style === 'sicilian')) {
    total = 14, toppingRate = 2;
  } else if ((this.size === 22) && (this.style === 'sicilian')) {
    total = 20, toppingRate = 3;
  } else if((this.size === 8) && (this.style === 'neopolitan')) {
    total = 12, toppingRate = 1;
  } else if ((this.size === 12) && (this.style === 'neopolitan')) {
    total = 19, toppingRate = 2;
  } else if ((this.size === 22) && (this.style === 'neopolitan')) {
    total = 27, toppingRate = 3;
  }
  total += toppingRate * (this.toppings.length - 2);
  return total;
}

var allPizzas = [];

$(function(){
  $('#pizza-form').submit(function(event){
    event.preventDefault();
    newPizza = Object.create(Pizza);
    allPizzas.push(newPizza);
    newPizza.size = parseInt($('#selectSize').val());
    newPizza.style = $('#selectStyle').val()
    newPizza.toppings = [];
    var pieText = '<h4>' + newPizza.size + '" ' + newPizza.style + ' pizza </h4>'
    if ($('#tomato-sauce').prop('checked')) {
      newPizza.toppings.push('tomato sauce');
      pieText = pieText + '<h6>-tomato sauce</h6>';
      }
    if ($('#cheese').prop('checked')) {
      newPizza.toppings.push('cheese');
      pieText = pieText + '<h6>-mozarella</h6>';
      }
    if ($('#pepperoni').prop('checked')) {
      newPizza.toppings.push('pepperoni');
      pieText = pieText + '<h6>-pepperoni</h6>';
      }
    if ($('#anchovies').prop('checked')) {
      newPizza.toppings.push('anchovies');
      pieText = pieText + '<h6>-anchovies</h6>';
      }
    if ($('#arugala').prop('checked')) {
      newPizza.toppings.push('arugala');
      pieText = pieText + '<h6>-arugala</h6>';
      }
    $('#no-pie').remove();
    $('#order').append(pieText);
    var pieces = parseInt($('#total-pieces').text());
    $('#total-pieces').text(pieces + newPizza.sliceCount());
    $('#total-pizzas').text(allPizzas.length);
    var cost = parseFloat($('#total-cost').text());
    $('#total-cost').text((cost + newPizza.piePrice()).toFixed(2));

  });
});
