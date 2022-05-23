let currentNumber = document.getElementById("currentNumber");
let add = document.getElementById("adicionar");
let sub = document.getElementById("subtrair");
let count = 0;

add.addEventListener('click', function increment(){
    count++;
    currentNumber.innerHTML = count;
    if (count >= 0){
        currentNumber.style.color = 'white';
    }
    if (count >= 10){
        add.style.visibility = 'hidden';
    }
});

sub.addEventListener('click', function decrement(){
    count--;
    currentNumber.innerHTML = count;
    if (count < 0){
        currentNumber.style.color = 'red';
    }
});