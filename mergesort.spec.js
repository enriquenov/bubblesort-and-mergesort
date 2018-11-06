let arr, arr2;

describe('Split Array Function', function() {
  it ('is able to split an array into two halves', function() {
    arr = [2, 3, 4, 5, 6, 7];
    arr2 = [1, 2, 3, 4, 5];

    expect(split(arr)).toEqual([[2, 3, 4], [5, 6, 7]]);
    expect(split(arr2)).toEqual([[1, 2], [3, 4, 5]]);
  });
});

describe('Merge function', function() {
  it('is able to merge two sorted arrays into one sorted array', function() {
    arr = [2, 3, 9];
    arr2 = [1, 5, 6];

    expect(merge(arr, arr2)).toEqual([1, 2, 3, 5, 6, 9]);
  });
});

describe('MergeSort function', function() {
  it('is able to sort an unsorted array using recursion, and the implemented "split" and "merge" functions', function() {

    arr = [4, 6, 3, 12, 24, 98, 76];
    expect(mergeSort(arr)).toEqual([3, 4, 6, 12, 24, 76, 98]);
  });

  beforeAll(function () {
    spyOn(window, "mergeSort").and.callThrough();
  });
  it('should call "mergeSort" more than once', function() {
    expect(window.mergeSort.calls.count()).toBeGreaterThan(1);
  });
});
