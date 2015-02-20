describe('Pizza', function() {
  describe('sliceCount', function(){
    it('returns 6 for an 8" sicilian pie', function(){
      var smallPie = Object.create(Pizza);
      smallPie.size = 8;
      expect(smallPie.sliceCount()).to.equal(6);
    });
    it('returns 10 for an 12" sicilian pie', function(){
      var medPie = Object.create(Pizza);
      medPie.size = 12;
      expect(medPie.sliceCount()).to.equal(10);
    });
    it('returns 18 for an 22" sicilian pie', function(){
      var largePie = Object.create(Pizza);
      largePie.size = 22;
      expect(largePie.sliceCount()).to.equal(18);
    });

    it('returns 4 for an 8" neopolitan pie', function(){
      var smallPie = Object.create(Pizza);
      smallPie.size = 8;
      smallPie.style = 'neopolitan';
      expect(smallPie.sliceCount()).to.equal(4);
    });
    it('returns 9 for an 12" neopolitan pie', function(){
      var medPie = Object.create(Pizza);
      medPie.size = 12;
      medPie.style = 'neopolitan';
      expect(medPie.sliceCount()).to.equal(9);
    });
    it('returns 16 for an 22" neopolitan pie', function(){
      var largePie = Object.create(Pizza);
      largePie.size = 22;
      largePie.style = 'neopolitan';
      expect(largePie.sliceCount()).to.equal(16);
    });
  });
  describe('piePrice', function(){
    it('returns $9 for an 8" plain cheese sicilian pie', function(){
      var smallPie = Object.create(Pizza);
      smallPie.size = 8;
      smallPie.toppings = ['tomato sauce', 'cheese'];
      expect(smallPie.piePrice()).to.equal(9);
    });
    it('returns $16 for an 12" pepperoni sicilian pie', function(){
      var medPie = Object.create(Pizza);
      medPie.size = 12;
      medPie.toppings = ['tomato sauce', 'cheese'];
      medPie.toppings.push('pepperoni');
      expect(medPie.piePrice()).to.equal(16);
    });
    it('returns $29 for an 22" pepperoni/anchovy/arugala sicilian pie', function(){
      var largePie = Object.create(Pizza);
      largePie.size = 22;
      largePie.toppings = ['tomato sauce', 'cheese'];
      largePie.toppings.push('pepperoni');
      largePie.toppings.push('anchovies');
      largePie.toppings.push('arugala');
      expect(largePie.piePrice()).to.equal(29);
    });

    it('returns $12 for an 8" plain cheese neopolitan pie', function(){
      var smallPie = Object.create(Pizza);
      smallPie.size = 8;
      smallPie.style = 'neopolitan';
      smallPie.toppings = ['tomato sauce', 'cheese'];
      expect(smallPie.piePrice()).to.equal(12);
    });
    it('returns $21 for an 12" pepperoni neopolitan pie', function(){
      var medPie = Object.create(Pizza);
      medPie.size = 12;
      medPie.style = 'neopolitan';
      medPie.toppings = ['tomato sauce', 'cheese'];
      medPie.toppings.push('pepperoni');
      expect(medPie.piePrice()).to.equal(21);
    });
    it('returns $36 for an 22" pepperoni/anchovy/arugala neopolitan pie', function(){
      var largePie = Object.create(Pizza);
      largePie.size = 22;
      largePie.style = 'neopolitan';
      largePie.toppings = ['tomato sauce', 'cheese'];
      largePie.toppings.push('pepperoni');
      largePie.toppings.push('anchovies');
      largePie.toppings.push('arugala');
      expect(largePie.piePrice()).to.equal(36);
    });
  });
});
