// Créer un programme qui va vérifier que les algos t1 à t7 fonctionnent.

// Reprendre les inputs et outputs spécifiés sur les tickets Linear des algos concernés

// Dans le cas d'une erreur, on affiche le résultat attendu et le résultat obtenu.

// Optionnel: vous pouvez créer un fichier "tx_error.js" qui permettrait de simuler une erreur
// pour tester le bon fonctionnement dans le cas d'une erreur.

// $ node f6_check_terre.js
// Algo n°1 (1/1) success
// Algo n°2 (1/1) success
// Algo n°3 (1/3) success
// Algo n°3 (2/3) success
// Algo n°3 (3/3) success
// ...
// Algo n°x (1/1) failed
// expected: hello
// received: bye

const { exec } = require("child_process");

const arrOfCodetoCheck = [
  {
    number: "1 (1/1)",
    filename: "t1_alphabet.js",
    input: "",
    output: "abcdefghijklmnopqrstuvwxyz\n",
  },
  {
    number: "2 (1/1)",
    filename: "t2_nom.js",
    input: "",
    output: "t2_nom.js\n",
  },
  {
    number: "3 (1/3)",
    filename: "t3_arg.js",
    input: "je suis solide !",
    output: "je\nsuis\nsolide\n!\n",
  },
  {
    number: "3 (2/3)",
    filename: "t3_arg.js",
    input: "Hello world !!",
    output: "Hello\nworld\n!!\n",
  },
  {
    number: "3 (3/3)",
    filename: "t3_arg.js",
    input: "coucou",
    output: "coucou\n",
  },
  {
    number: "4 (1/1)",
    filename: "t4_alphabetFrom.js",
    input: "m",
    output: "mnopqrstuvwxyz\n",
  },
  {
    number: "5 (1/4)",
    filename: "t5_evenOrOdd.js",
    input: "2",
    output: "pair\n",
  },
  {
    number: "5 (2/4)",
    filename: "t5_evenOrOdd.js",
    input: "3",
    output: "impair\n",
  },
  {
    number: "5 (3/4)",
    filename: "t5_evenOrOdd.js",
    input: "Bonjour",
    output: "impossible\n",
  },
  {
    number: "5 (4/4)",
    filename: "t5_evenOrOdd.js",
    input: "",
    output: "impossible\n",
  },
  {
    number: "6 (1/3)",
    filename: "t6_division.js",
    input: "5 2",
    output: "résultat: 2\nreste: 1\n",
  },
  {
    number: "6 (2/3)",
    filename: "t6_division.js",
    input: "10 0",
    output: "impossible\n",
  },
  {
    number: "6 (3/3)",
    filename: "t6_division.js",
    input: "3 5",
    output: "impossible\n",
  },
  {
    number: "7 (1/1)",
    filename: "t7_reverse.js",
    input: '"Hello world!"',
    output: "!dlrow olleH\n",
  },
];

for (const algo of arrOfCodetoCheck) {
  exec(`node ${algo.filename} ${algo.input}`, (error, output) => {
    if (error) {
      console.log(error);
      return;
    }
    if (output === algo.output) {
      console.log(`Algo n°${algo.number} success`);
    } else {
      console.log(
        `Algo n°${algo.number} failed\nexpected: ${algo.output}received: ${output}`
      );
    }
  });
}
