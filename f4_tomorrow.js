// Créer un programme qui prend en argument une date et afficher la date du lendemain.

// Utiliser l'objet Date bien sûr

// $ node f4_tomorrow.js 28-02-2000
// 01-03-2000

// $ node f4_tomorrow.js 31-12-2022
// 01-01-2023

let args = process.argv.slice(2);
let dateOfToday = args.join("");

function addZero(n) {
  if (n < 10) {
    return "0" + n;
  } else {
    return n;
  }
}

function getDateOfTomorrow(dateOfToday) {
  const reverseDateOfToday = dateOfToday.split("-").reverse().join("-");
  const currentDate = new Date(reverseDateOfToday);
  currentDate.setDate(currentDate.getDate() + 1);

  const dayOfMonth = currentDate.getDate();
  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();

  const dateOfTomorrow = `${addZero(dayOfMonth)}-${addZero(month + 1)}-${year}`;

  return dateOfTomorrow;
}
console.log(getDateOfTomorrow(dateOfToday));
