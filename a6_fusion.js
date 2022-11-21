// Créez un programme qui fusionne deux listes d’entiers triées en les gardant triées, les deux listes seront séparées par un “fusion”.

// $ node a6_fusion.js 10 20 30 fusion 15 25 35
// 10 15 20 25 30 35

// $ node a6_fusion.js 1 3 5 8 2
// erreur, le mot clé 'fusion' est manquant

let args = process.argv.slice(2);

function mergeSortedListOfNb(arr) {
  function byValue(a, b) {
    return a - b;
  }
  if (arr.includes("fusion")) {
    let arr1 = arr.slice(0, arr.indexOf("fusion"));
    let arr2 = arr.slice(arr.indexOf("fusion") + 1, arr.length);
    let finalArr = arr1.concat(arr2);

    return finalArr.sort(byValue).join(" ");
  }

  return "erreur, le mot clé 'fusion' est manquant";
}
console.log(mergeSortedListOfNb(args));
