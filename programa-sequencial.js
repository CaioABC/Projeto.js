//ativ 1. Básico

for (let i = 1; i <= 10; i++) {
  console.log(i);
}


//ativ 2.Básico


for (let i = 1; i <= 10; i++) {
    console.log(`1 x ${i} = ${1 * i} `)
}


//ativ 3.Básico

let N = Number(prompt("Digite um número: "));

let soma = 0;

for (let i = 1; i <= N; i++) {
  soma += i;
}
console.log(`O total dos números de 1 a ${N} é: ${soma}`);

//Ativ 1. Médio

for (let i = 2; i <= 50; i += 2) {
    console.log(i);
}



//Ativ 2. Médio

let secreto = Math.floor(Math.random() * 100) + 1;

let tentativas;

while (tentativas !== secreto) {
    tentativas = Number(prompt("Adivinhe o número entre 1 e 100: "))

    if (tentativas > secreto) {
        alert("Tente um número menor!")
    } else if (tentativas < secreto) {
        alert("Tente um número maior")
    } else {
        alert("Parabéns, você acertou!!!!!")
    }
}


