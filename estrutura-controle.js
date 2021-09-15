/*escreval("Digite o nome do aluno: ")
leia(nome)
escreval("Digite a primeira nota do aluno: ")
leia(nota01)
escreval("Digite a segunda nota do aluno: ")
leia(nota02)
media := (nota01+nota02) / 2

se media >= 5 entao
   escreval("o aluno ", nome, " foi aprovado com a media ", media)
senao
   escreval("o aluno ", nome, " foi reprovado com a media ", media)
fimse*/
var nota01, nota02;
nome = prompt("Digite o nome do aluno:")
nota01 = prompt("Digite a primeira nota do aluno:")
nota02 = prompt("Digite a segunda nota do aluno:")

media = (parseInt(nota01) + parseInt(nota02)) / 2;

if(media >= 5){
    alert("o aluno " + nome + " foi aprovado com a media " + media)
}
else{
    alert("o aluno " + nome + " foi reprovado com a media " + media)
}