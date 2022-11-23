// Créez un programme qui transforme un tableau de chaînes de caractères en une seule chaîne de caractères.
// Espacés d’un séparateur donné en dernier argument au programme.

// $ node a2_concat.js Les boomers les points de suspension ...
// Les...boomers...les...points...de...suspension

let args = process.argv.slice(2);
let arr = args.slice(0, args.length - 1);
let separator = args[args.length - 1];

function concat(arr, separator) {
  let finalStr = "";
  for (let i = 0; i < arr.length; i++) {
    if (i !== arr.length - 1) {
      finalStr += `${arr[i]}${separator}`;
    } else {
      finalStr += `${arr[i]}`;
    }
  }
  return finalStr;
}
console.log(concat(arr, separator));
