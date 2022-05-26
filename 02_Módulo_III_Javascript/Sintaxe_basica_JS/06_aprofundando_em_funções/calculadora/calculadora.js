var calculadora = () => {
    const op = Number(prompt('Escolha uma operação:\n1-soma\n2-subtração\n3-multiplicação\n4-divisão\n5-divisão real\n6-potência'));
    if (op >= 7 || !op){
        alert('Opção inválida');
        return 0;
    }
    const a = Number(prompt('Digite o primeiro número'));
    const b = Number(prompt('Digite o segundo número'));
    if (!a || !b){
        alert('Um ou Mais Número(s) inválido(s)');
        return 0;
    }
    var arrayF = {
        1:  function(x, y){
            alert(`O resultado da operação ${x} + ${y} é: ${x + y}`);
        },
        2:  function(x, y){
            alert(`O resultado da operação ${x} - ${y} é: ${x - y}`);
        },
        3:  function(x, y){
            alert(`O resultado da operação ${x} * ${y} é: ${x * y}`);
        },
        4: function(x, y){
            alert(`O resultado da operação ${x} / ${y} é: ${x / y}`);
        },
        5: function(x,y){
            alert(`O resultado da operação ${x} % ${y} é: ${x % y}`);
        },
        6: function(x,y){
            alert(`O resultado da operação ${x} ^ ${y} é: ${x ** y}`);
        }
    };
    arrayF[op](a, b);
}
let i = 1;
while (i == 1){
    calculadora();
    i = Number(prompt('Deseja continuar?\n1-sim\n2-não'));
}