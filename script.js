// Criação das variáveis
var flexStart = document.getElementById("flex-start");
var center = document.getElementById("center");
var flexEnd = document.getElementById("flex-end");
var spaceAround = document.getElementById("space-around");
var spaceBetween = document.getElementById("space-between");
var spaceEvenly = document.getElementById("space-evenly");
var flexWrap = document.getElementById("flex-wrap");
const classeFixa = ["flex-wrap"];

flexStart.addEventListener("click", () => {
    flexWrap.classList.forEach(classe =>{
        if(classe != classeFixa) {
            flexWrap.classList.remove(classe);
        }
    })
    flexWrap.classList.add("flex-start")
});

center.addEventListener("click", () => {
    flexWrap.classList.forEach(classe =>{
        if(classe != classeFixa) {
            flexWrap.classList.remove(classe);
        }
    })
    flexWrap.classList.add("center")
});

flexEnd.addEventListener("click", () => {
    flexWrap.classList.forEach(classe =>{
        if(classe != classeFixa) {
            flexWrap.classList.remove(classe);
        }
    })
    flexWrap.classList.add("flex-end")
});

spaceAround.addEventListener("click", () => {
    flexWrap.classList.forEach(classe =>{
        if(classe != classeFixa) {
            flexWrap.classList.remove(classe);
        }
    })
    flexWrap.classList.add("space-around")
});

spaceBetween.addEventListener("click", () => {
    flexWrap.classList.forEach(classe =>{
        if(classe != classeFixa) {
            flexWrap.classList.remove(classe);
        }
    })
    flexWrap.classList.add("space-between")
});

spaceEvenly.addEventListener("click", () => {
    flexWrap.classList.forEach(classe =>{
        if(classe != classeFixa) {
            flexWrap.classList.remove(classe);
        }
    })
    flexWrap.classList.add("space-evenly")
});

