// Créer un programme qui prend en argument une date et afficher la date du lendemain.

// Utiliser l'objet Date bien sûr

// $ node f4_tomorrow.js 28-02-2000
// 01-03-2000

// $ node f4_tomorrow.js 31-12-2022
// 01-01-2023

let args = process.argv.slice(2);
let dateOfToday = args.join("");

function dateOfTomorrow(dateOfToday) {
  let arrOfdate = dateOfToday.split("-");
  let dateOfTomorrow = {
    day: Number(arrOfdate[0]) + 1,
    month: arrOfdate[1],
    year: arrOfdate[2],
  };
  return `${dateOfTomorrow.day}-${dateOfTomorrow.month}-${dateOfTomorrow.year}`;
}
console.log(dateOfTomorrow("02-12-2022"));
