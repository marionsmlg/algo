// Créez un programme qui affiche toutes les valeurs comprises entre deux nombres dans l’ordre croissant. Min inclus, max exclus.

// $ node e7_minmax.js 1 7
// 1 2 3 4 5 6 7

// $ node e7_minmax.js 20 25
// 20 21 22 24 24 25

// $ node e7_minmax.js hello world
// error

let args = process.argv.slice(2);
let arg1 = args[0];
let arg2 = args[1];

function middleNumbers(x, y) {
  let arr = [];
  if (!isNaN(x) && !isNaN(y)) {
    for (let i = x; i <= y; i++) {
      arr.push(i);
    }
    return arr.join(" ");
  }
  return "error";
}
console.log(middleNumbers(arg1, arg2));
