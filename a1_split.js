// Créez un programme qui découpe une chaîne de caractères en tableau (séparateurs : espaces, tabulations, retours à la ligne).

// Créez la fonction nommée split, qui prendra un argument une string et le séparateur

// function split(str, separator){}

// Ensuite utilisez la fonction pour afficher ceci:

// $ node a1_split.js Bonjour les amis
// Bonjour
// les
// amis

function getAllIndexSeparator(str, separator) {
  let arrOfIndex = [];
  for (let i = 0; i <= str.length; i++) {
    if (str[i] === separator) {
      arrOfIndex.push(i);
    }
  }
  return arrOfIndex;
}

function mySplit(str, separator) {
  let arrOfIndexSeparator = getAllIndexSeparator(str, separator);
  let finalArr = [];
  if (separator === "") {
    for (let j = 0; j < str.length; j++) {
      finalArr.push(str[j]);
    }
    return finalArr;
  } else {
    finalArr.push(str.slice(0, str.indexOf(separator)));

    for (let i = 0; i < arrOfIndexSeparator.length; i++) {
      finalArr.push(
        str.slice(arrOfIndexSeparator[i] + 1, arrOfIndexSeparator[i + 1])
      );
    }
    return finalArr;
  }
}

let args = process.argv.slice(2);
let strInArgs = args.join(" ");

function showMySplit(str) {
  let finalArr = [];
  let arrOfstrSplited = mySplit(str, " ");
  for (let i = 0; i < arrOfstrSplited.length; i++) {
    finalArr.push(arrOfstrSplited[i]);
  }
  return finalArr;
}
console.log(showMySplit(strInArgs).join("\n"));
