
// Função chamada ao clicar no button
function alteraModo(){
    alterarClasses();      
    mudarTetxo();
}


// Função responsavel por alterar as classes EX: button, h1, body
function alterarClasses(){
button.classList.toggle(darkModeClass);
h1.classList.toggle(darkModeClass);
body.classList.toggle(darkModeClass);
footer.classList.toggle(darkModeClass);
}

function mudarTetxo(){
    const lightMode = "Light Mode"
    const darkMode = "Dark Mode"


    if(body.classList.contains(darkModeClass)){ // se o body contem darkModeClass na classe então
        button.innerHTML = lightMode; // Muda o texto do button
        h1.innerHTML = darkMode + " ON"; //muda titulo 
        return
    }{
        button.innerHTML = darkMode;
        h1.innerHTML = lightMode + " ON"
    }
}

const darkModeClass = 'dark-mode';
const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];

button.addEventListener('click', alteraModo);