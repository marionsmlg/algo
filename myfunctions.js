function getAllIndexSeparator(str, separator) {
  let arrOfIndex = [];
  for (let i = 0; i <= str.length; i++) {
    if (str[i] === separator) {
      arrOfIndex.push(i);
    }
  }
  return arrOfIndex;
}

function IsNaNInArr(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (isNaN(arr[i])) {
      return true;
    }
  }
  return false;
}

function tomorrow(date) {
  const currentDate = new Date(date);
  currentDate.setDate(currentDate.getDate() + 1);

  return currentDate;
}

console.log(tomorrow(new Date()));

function yesterday(date) {
  const currentDate = new Date(date);
  currentDate.setDate(currentDate.getDate() - 1);

  return currentDate;
}

console.log(yesterday(new Date()));

function display(language, date) {
  let options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  let dateFormat = new Date(date).toLocaleDateString(language, options);

  return dateFormat;
}
