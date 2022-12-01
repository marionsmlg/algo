function getAllIndexSeparator(str, separator) {
  let arrOfIndex = [];
  for (let i = 0; i <= str.length; i++) {
    if (str[i] === separator) {
      arrOfIndex.push(i);
    }
  }
  return arrOfIndex;
}
console.log(getAllIndexSeparator(str, separator));

function IsNaNInArr(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (isNaN(arr[i])) {
      return true;
    }
  }
  return false;
}
