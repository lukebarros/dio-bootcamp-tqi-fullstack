let items = document.getElementById('lista');
let button = document.getElementById('adicionar');
let text = document.getElementById('tarefa');

button.addEventListener('click', function(){
    var label = document.createElement('label');
    let item = document.createElement('input');
    item.type = 'checkbox';
    item.className = 'item';
    label.htmlFor = 'item';
    label.appendChild(document.createTextNode(text.value));
    items.appendChild(item); 
    items.appendChild(label);  
    items.appendChild(document.createElement('br'));
});
