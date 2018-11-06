function split(wholeArray) {

  let len = wholeArray.length, firstHalf, secondHalf;

  firstHalf = wholeArray.slice(0, Math.floor(len / 2));
  secondHalf = wholeArray.slice(Math.floor(len / 2), len);

  return [firstHalf, secondHalf];
}

function merge(array1, array2) {
  let merged = [];
  let index1 = 0;
  let index2 = 0;

  while (index1 < array1.length && index2 < array2.length) {

    if (array1[index1] >= array2[index2]) {
      merged.push(array2[index2]);
      index2++;
    } else {
      merged.push(array1[index1]);
      index1++;
    }
  }
  return merged.concat(array1.slice(index1).concat(array2.slice(index2)));

}

function mergeSort(array) {

  if (array.length === 1) {
    return array;
  }

  return merge(mergeSort(split(array)[0]), mergeSort(split(array)[1]));

}
