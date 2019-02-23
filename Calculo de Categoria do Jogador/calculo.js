/*
2 a 10 = Infatil
11 a 15 = Junior
16 a 18 = Sub18
19 a 20 = Sub 20
Maior que 21 = Prossional

--------------------------------

| = ou
&& = e

*/

idade = prompt("Digite sua idade: ")

if (idade >= 2 && idade <= 10) {
    alert("Infatil")
} else if(idade >= 11 && idade <= 15) {
    alert("Junior")
} else if(idade >= 16 && idade <= 18) {
    alert("Sub 18")
} else if(idade >= 19 && idade <= 20) {
    alert("Sub 20")
} else if(idade >= 21) {
    alert("Profissional")
} else {
    alert("O atleta não é valido!")
}