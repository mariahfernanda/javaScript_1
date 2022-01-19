const titulo = document.getElementById('titulo');
const nome = document.getElementById('nome');
const vermelho = document.getElementById('vermelho');
const azul = document.getElementById('azul');
const verde = document.getElementById('verde');

function trocarCorVermelho(){
    titulo.textContent = nome.value;
    titulo.classList.add('vermelho');
}

function trocarCorAzul (){
    titulo.textContent = nome.value;
    titulo.classList.add('azul');
}
function trocarCorVerde (){
    titulo.textContent = nome.value;
    titulo.classList.add('verde');
}

vermelho.addEventListener('click', trocarCorVermelho);
azul.addEventListener('click' , trocarCorAzul);
verde.addEventListener('click' , trocarCorVerde);
