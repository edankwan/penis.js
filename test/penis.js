var assert = require('assert');
var penis = require('../src/penis');

describe('Setting dick and balls',function(){
  before(function(done){
    penis.setBalls('1');
    penis.setHead(1);
    done();
  });

  after(function(){
    penis.reset();
  });

  it('should set a global B and D object',function(done){
    assert.equal(B,'1');
    assert.equal(D,1);
    done();
  });

  it('should allow comparing with B==D',function(done){
    assert(B==D);
    done();
  });

  it('should allow strict equality check with B===D',function(done){
    assert(B==D);
    assert(B!==D);
    done();
  });

  describe('via setters',function(){

    after(function(done){
      penis.reset();
      done();
    });

    it('should allow setting B via a property',function(done){
      penis.balls = 'BALLS';
      assert.equal(B,'BALLS');
      done();
    });

    it('should allow setting D via a property',function(done){
      penis.head = 'HEAD';
      assert.equal(D,'HEAD');
      done();
    });

  });

});

describe('reset head and balls',function(){
  var previousDValue = 'previous D';
  var previousBValue = 'previous B';

  before(function(done){
    global.D = previousDValue;
    global.B = previousBValue;
    done();
  });

  it('should reset original values when reset() is called',function(done){
    penis.setBalls('1');
    assert.equal(B,'1');
    penis.setHead(1);
    assert.equal(D,1);
    penis.reset();
    assert.equal(B,previousBValue);
    assert.equal(D,previousDValue);
    done();
  });

  it('should not overwrite the previous value when set multiple times',function(done){
    penis.balls = 'test 1';
    penis.balls = 'test 2';
    assert.equal(B,'test 2');
    penis.reset();
    assert.equal(B,previousBValue);
    penis.balls = 'test 3';
    penis.balls = 'test 4';
    assert.equal(B,'test 4');
    penis.reset();
    assert.equal(B,previousBValue);
    done();
  });
});
