function palindromo(frase) {
  this.frase = frase;

  let frasefraseJunta = [];
  let fraseJuntaReverse = [];
  let verdadero = false;

  fraseJunta = frase.toUpperCase().trim().split(" ").join("").split("");

  fraseJuntaReverse = frase
    .toUpperCase()
    .trim()
    .split(" ")
    .join("")
    .split("")
    .reverse();

  for (let i = 0; i < fraseJunta.length; i++) {
    if (fraseJunta[i] != fraseJuntaReverse[i]) {
      console.log("No es una frase palindorma");
      verdadero = true;
    }
  }
  if (verdadero == true) {
  } else console.log("Si que es palindromo");
}
