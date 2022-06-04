var a = parseInt(prompt("Digite o primeiro número"));
var b = parseInt(prompt("Digite o segundo número"));

function iguais(a,b) {
    if (a == b) {
        return "Os números são iguais. ";
    } else {
        return "Os números são diferentes. ";
    }
}

function comparaNum(a,b) {
    let soma = a+b;
    if (!a || !b){
        alert("Erro na operação, tente novamente!");
        return 0;
    }
    if (soma >= 10 && soma < 20){
        alert(iguais(a,b) +"A soma dos números é maior que 10 e menor que 20. A soma é: " + (soma));
    }
    else if (a + b >= 20){
        alert(iguais(a,b) +"A soma dos números é maior que 10 e maior que 20. A soma é: " + (soma));
    }
    else {
        alert(iguais(a,b) +"A soma dos números é menor que 10 e menor que 20. A soma é: " + (soma));
    }
}
comparaNum(a,b);