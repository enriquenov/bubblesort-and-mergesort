function swap(first, second, arr) {
  let temp = arr[first];
  arr[first] = arr[second];
  arr[second] = temp;
}

function bubbleSort (array) {
  if (array.length === 0 || array.length === 1) {
    return array;
  } else {
    let size = array.length;

    while (size > 0) {

      size--;

      for (let i = 0; i < size; i++) {

        if (array[i] > array[i+1]) {
          swap(i, i+1, array);
        }
      }

    }
    return array;
  }
}
