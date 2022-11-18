// Créez un programme qui transforme un tableau de chaînes de caractères en une seule chaîne de caractères.
// Espacés d’un séparateur donné en dernier argument au programme.

// $ node a2_concat.js Les boomers les points de suspension ...
// Les...boomers...les...points...de...suspension

let args = process.argv.slice(2);

function concat(arr) {
  let separator = arr.pop();
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (i !== arr.length - 1) {
      newArray.push(`${arr[i]}${separator}`);
    }
    if (i === arr.length - 1) {
      newArray.push(`${arr[i]}`);
    }
  }
  return newArray.join("");
}
console.log(concat(args));
