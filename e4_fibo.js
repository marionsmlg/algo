// Créez un programme qui affiche le N-ème élément de la célèbre suite de Fibonacci. (0, 1, 1, 2)
// étant le début de la suite et le premier élément étant à l’index 0.
// Afficher -1 si le paramètre est négatif ou mauvais.

// $ node e4_fibo.js 3
// 2

// $ node e4_fibo.js 9
// 34

// $ node e4_fibo.js 15
// 610

let args = process.argv.slice(2);

function fibo(n) {
  let nb1 = 0;
  let nb2 = 1;
  let somme = 1;
  for (let i = 2; i <= n; i++) {
    somme = nb1 + nb2;
    nb1 = nb2;
    nb2 = somme;
  }
  return somme;
}
console.log(fibo(15));
