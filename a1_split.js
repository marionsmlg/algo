// Créez un programme qui découpe une chaîne de caractères en tableau (séparateurs : espaces, tabulations, retours à la ligne).

// Créez la fonction nommée split, qui prendra un argument une string et le séparateur

// function split(str, separator){}

// Ensuite utilisez la fonction pour afficher ceci:

// $ node a1_split.js Bonjour les amis
// Bonjour
// les
// amis

function mySplit(str, separator) {
  let finalArr = [];
  let arrOfIndexSeparator = [];
  for (let i = 0; i < str.length; i++) {
    if (separator === "") {
      finalArr.push(str[i]);
    }
    if (str[i] === separator) {
      arrOfIndexSeparator.push(i);
    }
  }
  finalArr.push(str.slice(0, str.indexOf(separator)));

  for (let j = 0; j < arrOfIndexSeparator.length; j++) {
    finalArr.push(
      str.slice(arrOfIndexSeparator[j] + 1, arrOfIndexSeparator[j + 1])
    );
  }

  return finalArr;
}

// console.log(mySplit("Bonjour les amis", " "));

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
