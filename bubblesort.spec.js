describe('Bubble Sort', function(){
  let arr;

  it('handles an empty array', function(){
    arr = [];
    expect( bubbleSort( arr ) ).toEqual( [] );
  });

  it('returns the array if it contains only one element', function() {
    arr = [3];
    expect( bubbleSort( arr ) ).toEqual( arr );
  });

  it('bubblesorts an array of more than one element', function() {
    expect( bubbleSort( [4, 3, 2, 0] )).toEqual( [0, 2, 3, 4]);

    arr = [3, 4, 1, 20, 7, 8, 10, 16];
    expect( bubbleSort( arr ) ).toEqual( [1, 3, 4, 7, 8, 10, 16, 20] );
  });

  beforeAll(function () {
    spyOn(window, "swap").and.callThrough();
  });
  it('should call "swap" more than once', function() {
    expect(window.swap.calls.count()).toBeGreaterThan(1);
  });

});

