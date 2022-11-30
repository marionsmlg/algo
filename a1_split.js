// Créez un programme qui découpe une chaîne de caractères en tableau (séparateurs : espaces, tabulations, retours à la ligne).

// Créez la fonction nommée split, qui prendra un argument une string et le séparateur

// function split(str, separator){}

// Ensuite utilisez la fonction pour afficher ceci:

// $ node a1_split.js Bonjour les amis
// Bonjour
// les
// amis

let args = process.argv.slice(2);
let str = "Salut les amis";
let separator = " ";

function split(str, separator) {
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    j = str.indexOf(separator) - i;

    if (str[i] === separator) {
      arr.push(str.slice(0, i));
    }
    if (str[i] === separator && j !== 0) {
      arr.push(str.slice(i - 3, j - 1));
      arr.push(str.slice(i + 1));
    }
  }
  return arr;
}

console.log(split(str, " "));
