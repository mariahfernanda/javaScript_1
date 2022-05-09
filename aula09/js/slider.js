"use strict"

const imagens = [
    {id: "1", url:"./img/angular.png"},
    {id: "2", url:"./img/react.png"},
    {id: "3", url:"./img/svelte.jpg"},
    {id: "4", url:"./img/vue.jpg"}
]

const criarSlider = (imagens) =>
{
    const slider = document.querySelector(".slider") 
    const anteriorButton = document.createElement("span")
    anteriorButton.classList.add("slider-button")
    anteriorButton.id = "anterior"
    anteriorButton.innerHTML = "&laquo;"

    const sliderContainer = document.createElement("div")
    sliderContainer.classList.add("slider-item-container")

    const slides = imagens.map(item => `
    <div class="slider-item">
        <img src="${item.url}">
    </div>
 `)

    sliderContainer.innerHTML = slides.join("")

    const proximoButton = document.createElement("span")
    proximoButton.classList.add("slider-button")
    proximoButton.id = "proximo"
    proximoButton.innerHTML = "&raquo;"

    slider.appendChild(sliderContainer)
    slider.appendChild(proximoButton)
    slider.appendChild(anteriorButton)
}

criarSlider(imagens)

const sliderItemContainer = document.querySelector(".slider-item-container")
let sliderItems = document.querySelectorAll(".slider-item")

const proximoItem = () => 
{
    const primeiroItem = sliderItems[0]
    sliderItemContainer.appendChild(primeiroItem)
    sliderItems = document.querySelectorAll(".slider-item")
}

const anteriorItem = () =>
{
    const ultimoItem = sliderItems[sliderItems.length -1]
    sliderItemContainer.prepend(ultimoItem)
    sliderItems = document.querySelectorAll(".slider-item")
}


document.getElementById("proximo").addEventListener("click", proximoItem)
document.getElementById("anterior").addEventListener("click", anteriorItem)