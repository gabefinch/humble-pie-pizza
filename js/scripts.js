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

$(function(){

});
