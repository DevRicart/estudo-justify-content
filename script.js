// Criação das variáveis
var flexStart = document.getElementById("flex-start");
var center = document.getElementById("center");
var flexEnd = document.getElementById("flex-end");
var spaceAround = document.getElementById("space-around");
var spaceBetween = document.getElementById("space-between");
var spaceEvenly = document.getElementById("space-evenly");
var flexWrap = document.getElementById("flex-wrap");
const buttons = document.querySelectorAll(".btn");
const classeFixa = ["flex-wrap"];

flexStart.addEventListener("click", () => {
    flexWrap.classList.forEach(classe =>{
        if(classe != classeFixa) {
            flexWrap.classList.remove(classe);
        }
    })
    flexWrap.classList.add("flex-start")
    removerActive();
    flexStart.classList.add("active")
});

center.addEventListener("click", () => {
    flexWrap.classList.forEach(classe =>{
        if(classe != classeFixa) {
            flexWrap.classList.remove(classe);
        }
    })
    flexWrap.classList.add("center")
    removerActive();
    center.classList.add("active")
});

flexEnd.addEventListener("click", () => {
    flexWrap.classList.forEach(classe =>{
        if(classe != classeFixa) {
            flexWrap.classList.remove(classe);
        }
    })
    flexWrap.classList.add("flex-end")
    removerActive();
    flexEnd.classList.add("active")
});

spaceAround.addEventListener("click", () => {
    flexWrap.classList.forEach(classe =>{
        if(classe != classeFixa) {
            flexWrap.classList.remove(classe);
        }
    })
    flexWrap.classList.add("space-around")
    removerActive();
    spaceAround.classList.add("active")
});

spaceBetween.addEventListener("click", () => {
    flexWrap.classList.forEach(classe =>{
        if(classe != classeFixa) {
            flexWrap.classList.remove(classe);
        }
    })
    flexWrap.classList.add("space-between")
    removerActive();
    spaceBetween.classList.add("active")
});

spaceEvenly.addEventListener("click", () => {
    flexWrap.classList.forEach(classe =>{
        if(classe != classeFixa) {
            flexWrap.classList.remove(classe);
        }
    })
    flexWrap.classList.add("space-evenly")
    removerActive();
    spaceEvenly.classList.add("active")
});

function removerActive() {
    buttons.forEach( btn => {
        if(btn.classList.contains("active")) {
            btn.classList.remove("active");
        }
    })
}