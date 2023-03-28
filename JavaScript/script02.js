console.log(1 == 1);
console.log(1 === "1");
const idade = 16;
if (idade > 18) {
  console.log("Você já pode tirar a sua carteira");
} else {
  console.log("Você ainda não pode tirar a carteira");
}

const nota = 5;
switch (nota) {
  case nota < 5:
    console.log("Você está reprovado!");
    break;
  case nota === 5:
    console.log("Você poderá fazer a recuperação");
    break;
  default:
    console.log("Parabéns, você foi aprovado!");
}
