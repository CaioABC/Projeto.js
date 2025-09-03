

//Exemplo 3
//Nota(aprovado ou reprovado)

const nota = Number(prompt("Nota (0-100):"));

if (Number.isNaN(nota) || nota < 0 || nota > 100) {
    console.log("Nota invalida")
} else if (nota < 60) {
    console.log("Reprovado")
} else if (nota < 80) {
    console.log("Recuperação")
}else {
    console.log("Aprovado")
}