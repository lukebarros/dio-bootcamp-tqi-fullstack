const h1 = document.getElementsByTagName('h1')[0];
const button = document.getElementById('mode-selector');
const footer = document.getElementsByTagName('footer')[0];
const body = document.getElementsByTagName('body')[0];
const dark = document.getElementsByClassName('dark-mode');

function changeMode(){
    changeClasses();
    if (body.classList.contains('dark-mode')) {
        button.innerHTML = 'Light Mode';
        h1.innerHTML = 'Dark Mode ON';
    } else {
        button.innerHTML = 'Dark Mode';
        h1.innerHTML = 'Light Mode ON';
    }

};

function changeClasses() {
    body.classList.toggle('dark-mode');
    h1.classList.toggle('dark-mode');
    footer.classList.toggle('dark-mode');
    button.classList.toggle('dark-mode');
};

button.addEventListener('click', changeMode);