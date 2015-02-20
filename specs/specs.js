describe('Pizza', function() {
  describe('sliceCount', function(){
    it('returns 6 for an 8" pie', function(){
      var smallPie = Object.create(Pizza);
      smallPie.size = 8;
      expect(smallPie.sliceCount()).to.equal(6);
    });
    it('returns 10 for an 12" pie', function(){
      var medPie = Object.create(Pizza);
      medPie.size = 12;
      expect(medPie.sliceCount()).to.equal(10);
    });
    it('returns 16 for an 22" pie', function(){
      var largePie = Object.create(Pizza);
      largePie.size = 22;
      expect(largePie.sliceCount()).to.equal(18);
    });
  });
  describe('piePrice', function(){
    it('returns $9 for an 8" plain cheese pie', function(){
      var smallPie = Object.create(Pizza);
      smallPie.size = 8;
      smallPie.toppings = ['tomato sauce', 'cheese'];
      expect(smallPie.piePrice()).to.equal(9);
    });
    it('returns $16 for an 12" pepperoni pie', function(){
      var medPie = Object.create(Pizza);
      medPie.size = 12;
      medPie.toppings = ['tomato sauce', 'cheese'];
      medPie.toppings.push('pepperoni');
      expect(medPie.piePrice()).to.equal(16);
    });
    it('returns $29 for an 22" pepperoni/olives/sardines pie', function(){
      var largePie = Object.create(Pizza);
      largePie.size = 22;
      largePie.toppings = ['tomato sauce', 'cheese'];
      largePie.toppings.push('pepperoni');
      largePie.toppings.push('sardines');
      largePie.toppings.push('olives');
      expect(largePie.piePrice()).to.equal(29);
    });
  });
});
