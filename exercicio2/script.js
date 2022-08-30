const numeroUsuario1 = Number(prompt("Insira um número."))
const numeroUsuario2 = Number(prompt("Insira mais um número."))
console.log(
`Seu primeiro número foi ${numeroUsuario1}
Seu segundo número foi ${numeroUsuario2}
`)

console.log(
`O primeiro número é maior que o segundo? ${numeroUsuario1 > numeroUsuario2}
O primeiro número é igual que o segundo? ${numeroUsuario1 == numeroUsuario2}
O primeiro número é divisível pelo segundo? ${(numeroUsuario1 % numeroUsuario2) === 0}
O segundo numero é divisível pelo primeiro? ${(numeroUsuario2 % numeroUsuario1) === 0}



`)